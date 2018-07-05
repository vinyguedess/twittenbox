import Inert from "inert";
import Vision from "vision";
import * as pug from "pug";


export default app => {
    const registers = [
        app.register(Inert),

        app.register(Vision).then(() => {
            app.views({
                engines: { pug },
                path: process.cwd() + "/resources/views"
            });
        }),

        app.state('twitter.auth', {
            ttl: 1000 * 60 * 60 * 24,
            isSecure: false,
            isHttpOnly: true,
            path: "/",
            encoding: 'base64json',
            clearInvalid: false, // remove invalid cookies
            // strictHeader: true // don't allow violations of RFC 6265
        })
    ];

    return Promise.all(registers.map(register => {
        if (register instanceof Promise)
            return register;

        return Promise.resolve(register);
    }));
}