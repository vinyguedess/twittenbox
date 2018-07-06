import { expect } from "chai";
import tweets from "./../../../Fixtures/tweets";
import { HOME_REQUEST_TWEETS, HOME_RECEIVE_TWEETS } from "../../../../resources/app/components/Home/actions";
import reducer from "../../../../resources/app/components/Home/reducer";


describe("Test/Unit/App/Home/ReducerTest", () => 
{

    it("Should return default state", () => 
    {
        expect(reducer(null, {})).to.be.deep.equal({
            isFetching: false,
            tweets: []
        });
    });

    it(`Should return state for action ${HOME_REQUEST_TWEETS}`, () => {
        expect(reducer({ tweets: [] }, { type: HOME_REQUEST_TWEETS })).to.be.deep.equal({
            isFetching: true,
            tweets: []
        });
    });

    it(`Should return state for action ${HOME_RECEIVE_TWEETS}`, () => 
    {
        expect(reducer(null, { type: HOME_RECEIVE_TWEETS, tweets })).to.be.deep.equal({
            isFetching: false,
            tweets
        });
    });

});