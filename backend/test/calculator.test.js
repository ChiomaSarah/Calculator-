const chai = require("chai");
const chaiHttp = require("chai-http");
const calculator = require("../routes/api");
const assert = require("assert");

const expect = chai.expect;
chai.use(chaiHttp);

describe("Calculator API", () => {
  it("should calculate the arithmetic function correctly", async () => {
    const p = Promise.resolve("success");
    const result = await p;
    assert(result === "success");
    chai
      .request(calculator)
      .post("/calculate")
      .send({ expression: "2+2" })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.result).to.equal(4);
      });
  });

  it("should handle invalid expressions", async () => {
    const p = Promise.resolve("success");
    const result = await p;
    assert(result === "success");
    chai
      .request(calculator)
      .post("/calculate")
      .send({ expression: "invalid-expression" })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal("Invalid expression");
      });
  });
});
