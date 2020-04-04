
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.post('/AddMovie', (req, res, next) => {
  const movie = new Movie(req.body);

  movie.save((err, data) => {
    err ? res.json(err) : res.json(data);
  })
});

router.get('/AllMovie', (req, res, next) => {
  const promise = Movie.find({ });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

router.get('/SearchMovie/:movie_id', (req, res) => {
  const promise = Movie.findById(req.params.movie_id);

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
})

router.put('/UpdateMovie/:movie_id', (req, res) => {
  const promise = Movie.findByIdAndUpdate(
    req.params.movie_id,
    req.body,
    {
      new: true
    })

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
})

router.delete('/DeleteMovie/:movie_id', (req, res) => {
  const promise = Movie.findByIdAndRemove(req.params.movie_id)

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  })
})

router.get('/top10', (req, res) => {
  const promise = Movie.find({ }).limit(10).sort({ imdb_score: -1 });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err)
  })
})

router.get('/BetweenMovie/:start_year/:end_year', (req, res) => {
  const { start_year, end_year } = req.params;

  const promise = Movie.find(
    {
      year: { '$gte': parseInt(start_year), '$lte': parseInt(end_year) }
    })

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
})

router.get('/AllMovieAndDirector', (req, res) => {
  const promise = Movie.aggregate([
    {
      $lookup: {
        from: 'directors',
        localField: 'director_id',
        foreignField: '_id',
        as: 'Director'
      }
    },
    {
      $unwind: {
        path: '$Director',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          title: '$title',
          category: '$category',
          year: '$year',
          imdb_score: '$imdb_score'
        },
        Director: {
          $push: '$Director'
        }
      }
    },
    {
      $project: {
        _id: '$_id._id',
        title: '$_id.title',
        category: '$_id.category',
        year: '$_id.year',
        imdb_score: '$_id.imdb_score',
        Director: '$Director'
      }
    }
  ])

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  })
})

module.exports = router;
