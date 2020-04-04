const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app.js');

chai.use(chaiHttp);

let token;
let directorId;

describe('DİRECTORS TEST!', () => {
  before((done) => {
    chai.request(server)
      .post('/api/users/Authentication')
      .send({ username: 'test_user', password: '1234' })
      .end((err, res) => {
        if (err) {
          throw err
        }
        token = res.body.token;
        done()
      })
  });

  describe('/api/directors/AllDirector Being Tested!', () => {
    it('"/api/directors/AllDirector" Test Result!"', (done) => {
      chai.request(server)
        .get('/api/directors/AllDirector')
        .set('x-access-token', token)
        .end((err, res) => {
          if (err) {
            throw err
          }
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        })
    })
  })

  describe('/api/directors/AddDirector Being Tested!', () => {
    it('"/api/directors/AddDirector" Test Result!', (done) => {
      const director = {
        name: 'Test2 Dir Name',
        surname: 'Test2 Dir Surname',
        bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      };

      chai.request(server)
        .post('/api/directors/AddDirector')
        .send(director)
        .set('x-access-token', token)
        .end((err, res) => {
          if (err) {
            throw err
          }
          res.should.have.status(200);
          res.should.have.be.a('object');
          res.body.should.have.property('name');
          res.body.should.have.property('surname');
          res.body.should.have.property('bio');
          directorId = res.body._id;
          done();
        })
    })
  })
})
