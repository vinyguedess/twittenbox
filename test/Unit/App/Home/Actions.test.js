import { expect } from "chai";
import * as sinon from "sinon";
import Axios from "axios";
import createStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import tweets from "./../../../Fixtures/tweets";
import { fetchTweets, HOME_REQUEST_TWEETS, HOME_RECEIVE_TWEETS } from "../../../../resources/app/components/Home/actions";


describe("Test/Unit/App/Home/ActionsTest", () =>
{

    const initialState = {},
        middlewares = [thunkMiddleware],
        mockStore = createStore(middlewares);

    it("Should request for tweets list", done => {
        sinon.stub(Axios, "get")
            .onCall(0).returns(Promise.resolve({
                status: 200,
                data: tweets
            }));

        const store = mockStore(initialState);
        store.dispatch(fetchTweets())
            .then(() =>  
            {
                let actions = store.getActions();

                expect(actions).to.be.an("Array");

                expect(actions[0]).to.be.deep.equal({
                    type: HOME_REQUEST_TWEETS
                });

                expect(actions[1]).to.be.deep.equal({
                    type: HOME_RECEIVE_TWEETS,
                    tweets
                });

                sinon.reset();
            })
            .then(done);
    });

});