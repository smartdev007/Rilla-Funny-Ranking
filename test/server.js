const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();
chai.use(chaiHttp);

describe("Get user info", () => {
  it("Should return my name and email", (done) => {
    chai
      .request(server)
      .get("/user-info")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.name.should.equal("Jenish Kevadia");
        res.body.email.should.equal("jkevadia@stevens.edu");
        done();
      });
  });
});

// Write more tests here if you wish to continue the testing in this file
// -------- HERE ----------

server.close();
