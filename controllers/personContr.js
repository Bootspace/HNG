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
    const response = {
      id: newPerson._id,
      name: newPerson.name
    }

    console.log(response);
    return res.status(201).json({
      status: 'success',
      data: {
        response
      }
    })
    
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: error.message
    })
  }
};

exports.getPerson = async(req, res) => {
  try {

    const person = await Person.findById(req.params.id)

    if(!person) {
      return res.status(404).json({
        status:'failed',
        message: 'person not found'
      })
    }

    const response = {
      id: person._id,
      name: person.name
    }

    return res.status(200).json({
      status: 'success',
      data: {
        response
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

    const response = {
      id: person._id,
      name: person.name
    }

    return res.status(200).json({
      status: 'success',
      data: {
        response
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