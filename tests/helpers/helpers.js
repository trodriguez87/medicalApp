const supertest = require("supertest");
const app = require("../../app/main/app");
class Helper {
    constructor(model) {
        this.apiServer = supertest(app);
    }
}

module.exports = Helper;