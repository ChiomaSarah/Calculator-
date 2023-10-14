const chai = require("chai");
const chaiHttp = require("chai-http");
const history = require("../routes/api");
const assert = require("assert");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Calculator API", () => {
  it("should successfully fetch history", async () => {
    const p = Promise.resolve("success");
    const result = await p;
    assert(result === "success");
    chai
      .request(history)
      .get("/history")
      .send(result)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        expect(res.body).to.deep.equal({ success: true });
      });
  });
});
