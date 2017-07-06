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
const schema = Joi.object().keys({
  _id: Joi.number().min(3).required(),
  name: Joi.string(),
  classes: Joi.array().items(Joi.string()),
  grades: Joi.array().items(Joi.string())
})

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
      let removed = await students.remove({_id: request.payload['_id']}, {multi: false})
      return reply ().code(204)
    }
  }
]

async function createNewStudent (request, reply) {
  let lastStudentNum = await students.find({}, {limit: 1, sort: {'_id': -1}})
  let newStuObject = request.payload
  newStuObject['_id'] = lastStudentNum[0]['_id'] + 1
  let results = Joi.validate(newStuObject, schema)
  if (results.error === null) {
    let newStudent = await students.insert(newStuObject)
    return reply(newStudent).code(201)
  } else {
    return reply('error').code(400)
  }
}

async function updateStudent (request, reply) {
  let studentToUpdate = await students.update({_id: request.payload['_id']}, {$set: request.payload})
  return reply(request.payload).code(200)
}