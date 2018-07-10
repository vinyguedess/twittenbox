import { expect } from "chai";
import Axios from "../../node_modules/axios";
import { bootstrap } from "../../src/bootstrap";
import CookieService from "../../src/Domains/Api/Services/CookieService";


describe("Test/Integration/TweetsTest", () => 
{

    before(done => 
    {
        bootstrap.then(server => server.start()).then(done);
    });

    it("Should fetch tweets from timeline", done => 
    {
        CookieService.set("twitter.auth", {
            oauth_token: process.env.TWITTER_TEST_ACCESS_TOKEN,
            oauth_token_secret: process.env.TWITTER_TEST_ACCESS_TOKEN_SECRET
        });

        Axios.get("http://127.0.0.1:3000/api/tweets")
            .then(({ data, status }) => 
            {
                expect(data).to.be.an("array");
                expect(status).to.be.equal(200);
                CookieService.delete("twitter.auth");
            })
            .then(done);
    });

    it("Should present error when no user logged in", done => 
    {
        Axios.get("http://127.0.0.1:3000/api/tweets")
            .catch(err => err.response)
            .then(({ data, status }) => 
            {
                expect(data.message).to.be.a("string");
                expect(data.errors).to.be.an("object");
                expect(status).to.be.equal(403);
            })
            .then(done);
    });

    after(done => 
    {
        bootstrap.then(server => server.stop()).then(done);
    });

});