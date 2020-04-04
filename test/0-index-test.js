const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app.js');

chai.use(chaiHttp);

describe('INDEX TEST!', () => {
  it('"/" Test Result!', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        done();
      })
  })
});
