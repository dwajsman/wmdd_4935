# week 06 June 07 2017

## agenda

today

- intro to mongodb
  - atlas
  - monk & mongose
- CRUD
- mongodb shell

next week

- intro to python

## mongodb

why mongodb? why not firebase or mysql or redis or ...?

there are numerous available online resources for mongodb, as well as examples that
combine mongodb and javascript,  these makes it a good fit for this class. mongodb
is well documented, and mongodb atlas has an easy to setup free tier database as
a service. a database as a service, or DBaaS is just a fancy way of saying that
someone else is doing a lot of the hard work involved in setting up a database
for us.

the term NoSQL as it is used today was first used in 2009, but NoSQL databases
have been around since the 1960s. NoSQL(not only SQL) is a general term that
includes databases such as key value stores and document databases. mongodb is a
document database that has been around since 2007.

A document database, as the name implies, stores data in documents, mongodb documents resemble JSON.
This is one of the reasons that the mongodb javascript combination is so
popular, the data resembles javascript objects, this makes working with mongodb
documents feel very natural to most javascript programmers.

a document for a user contact might look like this:

```JSON
{
  "name": "nathan",
  "email": ["nmcninch@email.com". "nmcninch@email2.com"],
  "phone": {
    "work": 555.555.5555,
    "home": 555.555.5556
  }
}
```

### mongodb atlas docs

atlas is well documented, as always if you get stuck the first place you should
look is the documentation.

[mongodb atlas docs](https://docs.atlas.mongodb.com/)

## mongodb and nodejs

as of writing this there are three mongodb drivers for javascript currently
being actively developed that i am aware of:  
[the official mongodb](http://mongodb.github.io/node-mongodb-native/2.2/)  
[mongoose](http://mongoosejs.com/) and  
[monk](https://github.com/Automattic/monk)

mongoose makes use of a schema, this useful in validating data when entering it
into a database. later in the class we are going to look at 'joi' a plugin for
hapi that in my opinion offers more powerful data validation tools.

monk and mongoose both make use of the mongodb drivers and make it a
little easier to work with a mongodb database from a nodejs app.

there are also several mongodb plugins for hapijs. as is always the case with
javascript your best bet is to search npm, look for something that has been
updated recently and is well documented.

## CRUD

previously I mentioned that we would be primarily focusing on four HTTP methods:
POST, DELETE, GET and PUT. I also mentioned that this is because these are the
most commonly used methods, corresponding with the actions commonly associated
with moving data to and from a database. CRUD, is an acronym for the four basic
functions of persistent storage, four functions that correspond to the four HTTP
methods that we will be focusing on.

`
CREATE  |  POST  
READ    |  GET  
UPDATE  |  PUT  
DELETE  |  DELETE  
`

### crud operations in mongodb

for all of the below examples assume that we are using a 'user' collection.

#### create

`db.user.insert({name: 'Richard'})`

#### read

`db.user.find({name: 'Richard'})`

#### update

`db.user.update({name: 'Richard'}, {$set: {email: 'richard@email.com'}})`

#### delete

`db.user.remove({name: 'Richard'})`

the above examples are just very simple examples, mongodb has a very powerful
compliment of queries builtin.

**this documentation will help with the assignment for this week**
[query docs](https://docs.mongodb.com/getting-started/shell/query/)

## mongodb shell

to use the mongo shell you need mongodb installed locally.
[to install mongodb with c9](https://community.c9.io/t/setting-up-mongodb/1717),
otherwise use your package manager for your OS or take a look at the [mongodb install docs](https://docs.mongodb.com/manual/installation/)

once you have mongodb installed have a look at the atlas docs to connect to your
hosted mongodb cluster. they provide a command that you can copy and paste into
your terminal, just change the password.

if all goes well you should see something like this: `Cluster0-shard-0:PRIMARY>`  
this `>` is your shell prompt where you can enter commands and alter your
database, this is handy for testing queries.

[mongo shell docs](https://docs.mongodb.com/manual/mongo/)
