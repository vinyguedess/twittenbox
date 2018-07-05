import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import tweets from "./../../../../Fixtures/tweets";
import Tweet from "../../../../../resources/app/components/Home/components/Tweet";


describe("Test/Unit/App/Home/Components/TweetTest", () => {

    before(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    it("Should render single tweet without trouble", () => {
        const wrapper = Enzyme.shallow(<Tweet tweet={tweets[0]} />);
        expect(wrapper).to.be.lengthOf(1);
    });

});