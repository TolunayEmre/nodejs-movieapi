const express = require('express');
const router = express.Router();
const Director = require('../models/Director.js');
const mongoose = require('mongoose');

router.post('/AddDirector', (req, res) => {
  const director = new Director(req.body);

  const promise = director.save()

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
})

router.get('/AllDirector', (req, res) => {
  const promise = Director.aggregate([
    {
      $lookup: {
        from: 'movies',
        localField: '_id',
        foreignField: 'director_id',
        as: 'Movies'
      }
    },
    {
      $unwind: {
        path: '$Movies',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          name: '$name',
          surname: '$surname',
          bio: '$bio'
        },
        Movies: {
          $push: '$Movies'
        }
      }
    },
    {
      $project: {
        _id: '$_id._id',
        name: '$_id.name',
        surname: '$_id.surname',
        bio: '$_id.bio',
        Movies: '$Movies'
      }
    }
  ])

  promise.then((data) => {
    res.json(data[0])
  }).catch((err) => {
    res.json(err)
  })
})

router.get('/SearchDirector/:director_id', (req, res) => {
  const promise = Director.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(req.params.director_id)
      }
    },
    {
      $lookup: {
        from: 'movies',
        localField: '_id',
        foreignField: 'director_id',
        as: 'Movies'
      }
    },
    {
      $unwind: {
        path: '$Movies',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          name: '$name',
          surname: '$surname',
          bio: '$bio'
        },
        Movies: {
          $push: '$Movies'
        }
      }
    },
    {
      $project: {
        _id: '$_id._id',
        name: '$_id.name',
        surname: '$_id.surname',
        bio: '$_id.bio',
        Movies: '$Movies'
      }
    }
  ])

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  })
})

router.put('/UpdateDirector/:director_id', (req, res) => {
  const promise = Director.findByIdAndUpdate(
    req.params.director_id,
    req.body,
    {
      new: true
    }
  )

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err)
  })
})

router.delete('/DeleteDirector/:director_id', (req, res) => {
  const promise = Director.findByIdAndRemove(req.params.director_id)

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
})

module.exports = router;
