import CookieService from "../../Api/Services/CookieService";

export default bootstrap => 
{

    bootstrap.route({
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: "."
            }
        }
    });

    bootstrap.route({
        method: "GET",
        path: "/",
        handler: (request, reply) => 
        {
            if (CookieService.has("twitter.auth"))
                return reply.redirect().location("/app");
                
            return reply.view("home");
        }
    });

    bootstrap.route({
        method: "GET",
        path: "/app",

        handler: (request, reply) => 
        {
            if (!CookieService.has("twitter.auth"))
                return reply.redirect().location("/auth/login");

            return reply.view("app");
        }
    });

};