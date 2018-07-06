import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import tweets from "./../../../../Fixtures/tweets";
import Home from "../../../../../resources/app/components/Home/components/Home";


describe("Test/Unit/App/Home/Components/HomeTest", () => {

    before(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    it("Should render single tweet without trouble", () => {
        const wrapper = Enzyme.shallow(<Home tweets={tweets} isFetching={false} />);

        expect(wrapper).to.be.lengthOf(1);
        expect(wrapper.find(".tweets-nav")).to.be.lengthOf(1);
    });

});