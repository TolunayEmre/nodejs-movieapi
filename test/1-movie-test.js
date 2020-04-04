const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

let token;
let movieId;

describe('MOVİES TEST!', () => {
  before((done) => {
    chai.request(server)
      .post('/api/users/Authentication')
      .send({ username: 'test_user', password: '1234' })
      .end((err, res) => {
        if (err) {
          throw err
        }
        token = res.body.token;
        done();
      })
  })

 
  describe('/api/movies/AllMovie Being Tested!', () => {
    it('"/api/movies/AllMovie" Test Result!', (done) => {
      chai.request(server)
        .get('/api/movies/AllMovie')
        .set('x-access-token', token)
        .end((err, res) => {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        })
    })
  })

 
  describe('/api/movies/AddMovie Being Tested!', () => {
    it('"/api/movies/AddMovie" Test Result!', (done) => {
      const movie = {
        director_id: '5e88e6cd9dadd22309339e72',
        title: 'Test2 Mov Title',
        category: 'Test2 Mov Category',
        year: 2020,
        country: 'Test Mov Country',
        imdb_score: 10
      };

      chai.request(server)
        .post('/api/movies/AddMovie')
        .send(movie)
        .set('x-access-token', token)
        .end((err, res) => {
          if (err) {
            throw err
          }
          res.should.have.status(200);
          res.should.have.be.a('object');

         
          res.body.should.have.property('director_id');
          res.body.should.have.property('title');
          res.body.should.have.property('category');
          res.body.should.have.property('year');
          res.body.should.have.property('country');
          res.body.should.have.property('imdb_score');
          movieId = res.body._id;
          done();
        })
    })
  })

 
  describe('/api/movies/SearchMovie/:movie_id Being Tested', () => {
    it('"/api/movies/SearchMovie/:movie_id" Test Result!', (done) => {
      chai.request(server)
        .get('/api/movies/SearchMovie/' + movieId)
        .set('x-access-token', token)
        .end((err, res) => {
          if (err) {
            throw err
          }
          res.should.have.status(200);
          res.should.have.be.a('object');
          res.body.should.have.property('_id').eql(movieId);
          res.body.should.have.property('director_id');
          res.body.should.have.property('title');
          res.body.should.have.property('category');
          res.body.should.have.property('year');
          res.body.should.have.property('country');
          res.body.should.have.property('imdb_score');
          done();
        })
    })
  })

 
  describe('/api/movies/UpdateMovie/:movie_id Being Tested!', () => {
    it('"/api/movies/UpdateMovie/:movie_id" Test Result!', (done) => {
      const movie = {
        director_id: '5e88e6cd9dadd22309339e72',
        title: 'Test2 Mov Up Title',
        category: 'Test2 Mov Up Category',
        year: 2020,
        country: 'Test2 Mov Up Country',
        imdb_score: 9
      };

      chai.request(server)
        .put('/api/movies/UpdateMovie/' + movieId)
        .send(movie)
        .set('x-access-token', token)
        .end((err, res) => {
          if (err) {
            throw err
          }
          res.should.have.status(200);
          res.should.have.be.a('object');

         
          res.body.should.have.property('director_id').eql(movie.director_id);
          res.body.should.have.property('title').eql(movie.title);
          res.body.should.have.property('category').eql(movie.category);
          res.body.should.have.property('year').eql(movie.year);
          res.body.should.have.property('country').eql(movie.country);
          res.body.should.have.property('imdb_score').eql(movie.imdb_score);
          done();
        })
    })
  })
});
