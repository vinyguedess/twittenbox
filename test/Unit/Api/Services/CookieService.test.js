import { expect } from "chai";
import CookieService from "../../../../src/Domains/Api/Services/CookieService";


describe("Test/Unit/Api/Services/CookieServiceTest", () => 
{

    before(() => 
    {
        CookieService.set("any.key", "1");
        CookieService.set("any.object.key", {
            any: "value"
        });
    });

    it("Should check if cookie exists", () => 
    {
        expect(CookieService.has("any.key")).to.be.true;
        expect(CookieService.has("other.key")).to.be.false;
    });

    it("Should get cookie", () => 
    {
        expect(CookieService.get("any.key")).to.be.equal(1);

        expect(CookieService.get("any.object.key")).to.be.deep.equal({
            any: "value"
        });

        expect(CookieService.get("other.key")).to.be.null;
    });

});