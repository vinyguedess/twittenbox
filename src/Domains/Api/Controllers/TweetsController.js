

export default bootstrap => 
{

    bootstrap.route({
        method: "GET",
        path: "/api/tweets",
        handler: () => 
        {
            return [];
        }
    });

};