import TwitterService from "../../Api/Services/TwitterService";
import CookieService from "../../Api/Services/CookieService";


export default bootstrap => 
{

    bootstrap.route({
        method: "GET",
        path: "/auth/login",
        handler: (request, reply) => 
        {
            let twitterService = new TwitterService();
            return twitterService.getOAuthRequestToken()
                .then(token => reply
                    .redirect()
                    .location(`https://api.twitter.com/oauth/authorize?oauth_token=${token}`));
        }
    });

    bootstrap.route({
        method: "GET",
        path: "/auth/logout",
        handler: (request, reply) => 
        {
            CookieService.delete("twitter.auth");
            return reply.redirect().location("/");
        }
    });

    bootstrap.route({
        method: "GET",
        path: "/auth/proccess",

        handler: (request, reply) => 
        {
            return new TwitterService()
                .getAccessToken(request.query.oauth_token, request.query.oauth_verifier)
                .then(response => 
                {
                    CookieService.set("twitter.auth", {
                        oauth_token: response.oauth_token,
                        oauth_token_secret: response.oauth_token_secret
                    });

                    return reply.redirect().location("/app");
                });
        }
    });

};