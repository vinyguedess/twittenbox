import CookieService from "../Services/CookieService";
import TwitterService from "../Services/TwitterService";


export default bootstrap => 
{

    bootstrap.route({
        method: "GET",
        path: "/api/tweets",
        handler: (request, reply) => 
        {
            if (!CookieService.has("twitter.auth"))
                return reply.response({
                    "message": "Missing twitter tokens",
                    "errors": {
                        "auth": ["Missing twitter tokens"]
                    }
                }).code(403);

            const { oauth_token, oauth_token_secret } = CookieService.get("twitter.auth");
            const twitterService = new TwitterService(oauth_token, oauth_token_secret);
            return twitterService.fetchTweets()
                .then(tweets => tweets);
        }
    });

};