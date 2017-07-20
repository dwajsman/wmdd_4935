# week 09 June 29 2017

## agenda

today:

- go over last weeks quiz
- more info about API design assignment
- dotenv
- hapi and mongoDB

next week:

- more hapi and mongoDB
- hapi plugins vision and inert
- API design assignment due

## mongoDB and Node

to make working with mongoDB(or any database) a little easier there are a
variety of node modules that range from basic drivers, to full blown ODMs(object
document mapper) or ORMs(object relational mapper). hapi has a mongoDB [plugin](https://github.com/Marsup/hapi-mongodb)
and [mongoDB makes their own drivers](https://docs.mongodb.com/ecosystem/drivers/) for node (as well as PHP, Java, Python and
several other languages). But currently I think that the two most popular tools
for using mongoDB with node are [mongoosejs](http://mongoosejs.com/) and [monk](https://github.com/Automattic/monk). 
I encourage you to look at all of these and decide what seems like the best fit
for you, but for today we are going to be using monk. I believe that of these
four options monk is the easiest to get started with. It also does everything
you need to use in production.

as always the first place you should visit is the [documentation](https://automattic.github.io/monk/)

[async await tutorial](https://tutorialzine.com/2017/07/javascript-async-await-explained)

## dotenv

[dotenv](https://www.npmjs.com/package/dotenv) is a module that allows you to
store environment variables in a separate .env file. this is a good practice for
isolating more sensitive data from your application code.

