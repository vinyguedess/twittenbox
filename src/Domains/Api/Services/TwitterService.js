import { OAuth } from "oauth";
import Axios from "axios";


export default class TwitterService {

    constructor(oauthToken = null, oauthTokenSecret = null) {
        this.oauth = new OAuth(
            "https://api.twitter.com/oauth/request_token",
            "https://api.twitter.com/oauth/access_token",
            process.env.TWITTER_CONSUMER_KEY,
            process.env.TWITTER_CONSUMER_SECRET,
            "1.0",
            "http://localhost:3000/auth/proccess",
            "HMAC-SHA1"
        );

        this.api = "https://api.twitter.com"

        this.oauthToken = oauthToken;
        this.oauthTokenSecret = oauthTokenSecret;
    }

    fetchTweets() {
        return new Promise((resolve, reject) => {
            this.oauth.get(`${this.api}/1.1/statuses/home_timeline.json`, this.oauthToken, this.oauthTokenSecret, (err, results) => {
                if (err) return reject(err);

                resolve(JSON.parse(results));
            });
        });
    }

    getAccessToken(oauthToken, oauthVerifier) {
        return Axios.post(`${this.api}/oauth/access_token?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`, {
            oauth_verifier: oauthVerifier
        })
            .then(({ data }) => this.parseAccessTokenBody(data));
    }

    getOAuthRequestToken() {
        return new Promise((resolve, reject) =>
            this.oauth.getOAuthRequestToken((err, oauthAccessToken) =>
                err ? reject(err) : resolve(oauthAccessToken)));
    }

    parseAccessTokenBody(data) {
        let treatedData = data.split("&"), attributes = {};
        treatedData.forEach(item => {
            let [field, value] = item.split("=");
            attributes[field] = value;
        });

        return attributes;
    }

}