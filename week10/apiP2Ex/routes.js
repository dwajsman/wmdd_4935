const monk = require('monk')
// validate objects with JOI, more on this next week
const Joi = require('joi')
require('dotenv').config()

// get the DBURL value 
const db = monk(process.env.DBURL)
// get or create a collection in mongo
const students = db.get('students')

// schema to test new objects against
// for now think of this like a check list for creating a new student
const studentSchema = Joi.object().keys({
  name: Joi.string(),
  classes: Joi.array().items(Joi.string()),
  grades: Joi.array().items(Joi.string())
}).and('name', 'classes', 'grades')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      return reply('mongodb example')
    }
  },
  {
    method: 'GET',
    path: '/students',
    handler: async (request, reply) => {
      let allStudents = await students.find()
      return reply(allStudents)
    }
  },
  {
    method: 'POST',
    path: '/students',
    config: {
      validate: {
        payload: studentSchema
      }
    },
    handler: createNewStudent
  },
  {
    method: 'PUT',
    path: '/students',
    handler: updateStudent
  },
  {
    method: 'DELETE',
    path: '/students',
    handler: async (request, reply) => {
      try {
        let removed = await students.remove({_id: request.payload['_id']}, {multi: false})
        return reply ().code(204)
      } catch (err) {
        console.error(err)
      }
    }
  }
]

async function createNewStudent (request, reply) {
  try {
    let lastStudentNum = await students.find({}, {limit: 1, sort: {'_id': -1}})
    let newStuObject = request.payload
    newStuObject['_id'] = lastStudentNum[0]['_id'] + 1
    let newStudent = await students.insert(newStuObject)
    return reply(newStudent).code(201)
  } catch (err) {
    console.error(err)
  }
}

async function updateStudent (request, reply) {
  try {
    let studentToUpdate = await students.update({_id: request.payload['_id']}, {$set: request.payload})
    return reply(request.payload).code(200)
  } catch (err) {
    console.error(err)
  }
}