import * as path from "path";
import Hapi from "hapi";
import * as dotenv from "dotenv";
import Registers from "./Configs/Registers";
import AuthController from "./Domains/App/Controllers/AuthController";
import AppController from "./Domains/App/Controllers/AppController";
import TweetsController from "./Domains/Api/Controllers/TweetsController";


dotenv.config();

export const bootstrap = new Promise(resolve => resolve(new Hapi.Server({
    host: "localhost",
    port: process.env.PORT || 3000,

    routes: {
        files: {
            relativeTo: path.resolve("public")
        }
    }
}))).then(async app => {

    await Registers(app);

    TweetsController(app);

    AuthController(app);
    AppController(app);

    return app;
});


export default bootstrap;