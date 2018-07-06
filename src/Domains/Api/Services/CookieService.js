import * as fs from "fs";
import * as path from "path";


const reverse = text => text.split("").reverse().join("");

const filename = name => `${crypt(name)}.cookie`;

const crypt = text => new Buffer(reverse(new Buffer(text).toString("base64"))).toString("base64");

const decrypt = text => new Buffer(reverse(new Buffer(text, "base64").toString("utf8")), "base64").toString("utf8");


export default {
    set(key, value)
    {
        fs.writeFileSync(
            path.resolve("storage/cookies", filename(key)), 
            crypt(typeof value === "object" ? JSON.stringify(value) : value),
            { encoding: "utf8" }
        );
    },

    get(key, defaultValue = null)
    {
        if (this.has(key))
        {
            let content = decrypt(fs.readFileSync(path.resolve("storage/cookies", filename(key)), { encoding: "utf8" }));
            try 
            {
                return JSON.parse(content);
            }
            catch (err) 
            {
                return content; 
            }
        }

        return defaultValue;
    },

    delete(key)
    {
        if (this.has(key))
            fs.unlinkSync(path.resolve("storage/cookies", filename(key)));

        return null;
    },

    has(key)
    {
        return fs.existsSync(path.resolve("storage/cookies", filename(key)));
    }
};