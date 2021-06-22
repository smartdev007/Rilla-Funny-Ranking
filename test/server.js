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
describe("Test user one and their rank", () => {
  it("Should return username and their rank", (done) => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        const userData = res.body[0]
        
        userData.user.should.equal("Jim Halpert");
        userData.ranking.should.equal(1242);
        done();
      });
  });
});

describe("Test user two and their rank", () => {
  it("Should return username and their rank", (done) => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        const userData = res.body[1]
        
        userData.user.should.equal("Dwight Schrute");
        userData.ranking.should.equal(868);
        done();
      });
  });
});

describe("Test user three and their rank", () => {
  it("Should return username and their rank", (done) => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        const userData = res.body[2]
        
        userData.user.should.equal("Stanley Hudson");
        userData.ranking.should.equal(432);
        done();
      });
  });
});

describe("Test user four and their rank", () => {
  it("Should return username and their rank", (done) => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        const userData = res.body[3]
        
        userData.user.should.equal("Phyllis Vance");
        userData.ranking.should.equal(371);
        done();
      });
  });
});

describe("Test user five and their rank", () => {
  it("Should return username and their rank", (done) => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        const userData = res.body[4]
        
        userData.user.should.equal("Pam Beasley");
        userData.ranking.should.equal(1105);
        done();
      });
  });
});

server.close();
