import { expect } from "chai";
import * as dotenv from "dotenv";
import TwitterService from "../../../../src/Domains/Api/Services/TwitterService";


describe("Test/Unit/Api/Services/TwitterService", () => 
{

    before(() => 
    {
        dotenv.config();
    });

    it("Should fetch tweets", done => 
    {
        new TwitterService(process.env.TWITTER_TEST_ACCESS_TOKEN, process.env.TWITTER_TEST_ACCESS_TOKEN_SECRET)
            .fetchTweets()
            .then(tweets => 
            {
                expect(tweets).to.be.an("array");
                if (tweets.length) 
                {
                    expect(tweets[0]).to.have.property("created_at");
                    expect(tweets[0]).to.have.property("user");
                    expect(tweets[0]).to.have.property("text");
                }
            })
            .then(done);
    });

});