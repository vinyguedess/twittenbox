import { expect } from "chai";
import * as sinon from "sinon";
import Axios from "axios";
import { OAuth } from "oauth";
import tweets from "./../../../Fixtures/tweets";
import TwitterService from "../../../../src/Domains/Api/Services/TwitterService";


describe("Test/Unit/Api/Services/TwitterService", () => 
{

    before(() => 
    {
        const API = "https://api.twitter.com";
        sinon.stub(Axios, "post")
            .returns(Promise.resolve({
                data: "access_token=access_token&access_token_secret=access_token_secret"
            }));

        sinon.stub(OAuth.prototype, "getOAuthRequestToken")
            .onCall(0).yields(null, "request_token")
            .onCall(1).yields(new Error("request_token"), null);

        sinon.stub(OAuth.prototype, "get")
            .withArgs(`${API}/1.1/statuses/home_timeline.json`, "token", "token_secret")
            .yields(null, JSON.stringify(tweets))

            .withArgs(`${API}/1.1/statuses/home_timeline.json`, "e_token", "e_token_secret")
            .yields(new Error("problem with tokens"), null);
    });

    describe("Request Token", () => 
    {
        it("Should acquire request token", done => 
        {
            new TwitterService()
                .getOAuthRequestToken()
                .then(token => 
                {
                    expect(token).to.be.equal("request_token");
                })
                .then(done);
        });

        it("Should treat error when not getting request token", done => 
        {
            new TwitterService()
                .getOAuthRequestToken()
                .catch(err => 
                {
                    expect(err.message).to.be.equal("request_token");
                })
                .then(done);
        });
    });

    describe("Access Token and Secret", () => 
    {
        it("Should return acces token and secret", done => 
        {
            new TwitterService()
                .getAccessToken("oauth_token", "oauth_token_verifier")
                .then(tokens => 
                {
                    expect(tokens).to.be.deep.equal({
                        "access_token": "access_token",
                        "access_token_secret": "access_token_secret"
                    });
                })
                .then(done);
        });
    });

    describe("Fetch Tweets", () => 
    {
        it("Should fetch tweets", done => 
        {
            new TwitterService("token", "token_secret")
                .fetchTweets()
                .then(tweets => 
                {
                    expect(tweets).to.be.an("array");
                    expect(tweets[0]).to.have.property("created_at");
                    expect(tweets[0]).to.have.property("user");
                    expect(tweets[0]).to.have.property("text");
                })
                .then(done);
        });

        it("Should fetch empty tweets in case has any problem", done => 
        {
            new TwitterService("e_token", "e_token_secret")
                .fetchTweets()
                .then(tweets => 
                {
                    expect(tweets).to.be.lengthOf(0);
                })
                .then(done);
        });
    });

    after(() => 
    {
        sinon.reset();
    });

});