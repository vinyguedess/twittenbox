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
        path: "/app",

        handler: (request, reply) => 
        {
            if (!request.state["twitter.auth"])
                return reply.redirect().location("/auth/login");

            return reply.view("app");
        }
    });

};