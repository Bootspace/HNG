const express = require('express');
const Person = require('../models/Person');
const { validationResult, body } = require('express-validator')

exports.create= async(req, res)=> {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newPerson = await Person.create(req.body);

    console.log(newPerson);

    return res.status(201).json({
      status: 'success',
      data: {
        newPerson
      }
    })
    
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: error.message
    })
  }
};

exports.getPeople = async(req,res) => {
  try {
    const people = await Person.find();
    if(people.length === 0){
      return res.status(200).json({
        status: 'success',
        message: "People list is empty"
      })
    };

    return res.status(200).json({
      status: 'success',
      result: people.length,
      data: {
        people
      }
    })

  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: error.message
    })
  }
}

exports.getPerson = async(req, res) => {
  try {
    const query = req.params.criteria

    const person = await Person.findOne({
      $or: [
        { firstname: new RegExp(query,'i')},
        { lastname: new RegExp(query,'i') }
      ]
     });

    if(!person) {
      return res.status(404).json({
        status:'failed',
        message: 'person not found'
      })
    }

    return res.status(200).json({
      status: 'success',
      data: {
        person
      }
    })

  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: error.message
    })
  }
}

exports.update= async(req, res) => {
  try {
    const { id } = req.params;

    const person = await Person.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if(!person) {
      return res.status(404).json({
        status:'failed',
        message: 'person not found'
      })
    };

    return res.status(200).json({
      status: 'success',
      data: {
        person
      }
    })
    
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: error.message
    })
  }
}

exports.delete= async(req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);

    if(!person) {
      return res.status(404).json({
        status:'failed',
        message: 'person not found'
      })
    };

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: error.message
    })
  }
}