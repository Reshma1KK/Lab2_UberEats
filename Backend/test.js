var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://13.56.184.154:3001");
var assert = require("assert");

describe('View Customer Page And Dishes', function () {

        it('View Customer Page',(done) => {
            server.get("/CustomerPage")
                .send({ email: "karishma@gmail.com", password: "karishma123" })
                .then(function (res) {
                    assert.equal(res.status, 200);
                    done();
                })
                .catch(done);
        });

        it('View Restaurant Dishes', (done) => {
            server.get("/Dishes")
                .send({ customerName: "Kash", city:"San Jose" })
                .then(function (res) {
                    assert.equal(res.status, 200);
                    done();
                })
                .catch(done);
        });
    });
