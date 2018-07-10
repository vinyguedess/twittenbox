import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import createStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import Home from "./../../../../resources/app/components/Home/container";


describe("Test/Unit/App/Home/ContainerTest", () => 
{

    const initialState = {
            home: {
                isFetching: false,
                tweets: []
            }
        },
        middlewares = [thunkMiddleware],
        mockStore = createStore(middlewares);

    before(() => 
    {
        Enzyme.configure({ adapter: new Adapter() });
    });

    it("Should render Home Container", () => 
    {
        const store = mockStore(initialState);
        const wrapper = Enzyme.shallow(<Home store={store} />);

        expect(wrapper).to.be.lengthOf(1);
    });

});