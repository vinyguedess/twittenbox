import Axios from "axios";
import bootstrap from "./../../src/bootstrap";


describe.skip("Test/Integration/AuthTest", () => 
{

    before(done => 
    {
        bootstrap.start().then(done);
    });

    it("Should request token", done => 
    {
        Axios.get("http://127.0.0.1:3000/")
            .then(({ data, status }) => 
            {
                console.log(data, status);
            })
            .then(done);
    });

    after(done => 
    {
        bootstrap.stop().then(done);
    });

});