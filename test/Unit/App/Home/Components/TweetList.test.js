import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as sinon from "sinon";
import tweets from "./../../../../Fixtures/tweets";
import TweetList from "../../../../../resources/app/components/Home/components/TweetList";


describe("Test/Unit/App/Home/Components/TweetListTest", () => 
{

    before(() => 
    {
        Enzyme.configure({ adapter: new Adapter() });
    });

    it("Should render tweets' list", () => 
    {
        const callback = sinon.spy();
        const wrapper = Enzyme.shallow(<TweetList tweets={tweets} isFetching={false} refreshTweets={callback} />);
        wrapper.find(".refresh-button").simulate("click");

        expect(wrapper).to.be.lengthOf(1);
        expect(callback.called).to.be.true;
    });

});