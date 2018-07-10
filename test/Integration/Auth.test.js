import { expect } from "chai";
import Axios from "axios";
import bootstrap from "./../../src/bootstrap";


describe("Test/Integration/AuthTest", () => 
{

    before(done => 
    {
        bootstrap.then(server => server.start()).then(done);
    });

    it("Should request login", done => 
    {
        Axios.get("http://127.0.0.1:3000/auth/login")
            .then(({ data, status }) => 
            {
                expect(data).to.contain("Twitter / Autorizar um aplicativo");
                expect(status).to.be.equal(200);
            })
            .then(done);
    });

    after(done => 
    {
        bootstrap.then(server => server.stop()).then(done);
    });

});