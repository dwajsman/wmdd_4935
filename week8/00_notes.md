# week 08 June 22 2017

## agenda

today:  
- new teams
- quiz 02
- api design

next week:  
- hapi crud, working with hapi and mongodb together

## designing an API, more terminology

### nouns vs verbs

- verbs = HTTP methods and are operations on resources
- nouns = resources URI end points

you will often see this terminology when looking at restful api design
guidelines. The general idea is that a resource(represented by a URL) is a
thing(noun) and you perform actions(verbs) on that thing using HTTP methods. for
example:

`http://school.com/students` is a resource a list of students with info about
each. A user of this API can view the list with `GET` or add a student to the list with `POST` and maybe update a students info 
with `PUT`.


### HATEOAS 'Hypermedia as the engine of application state'

That looks really confusing, but is intended to represent a very simple an
crucial concept in API design. A resource should provide a user with the
information that they need to complete any steps after a resource is retrieved
added up updated.

let's take a simple example, a remote controlled car that a user can control
from anywhere in the world through an API. this car can be on or off, when it is
on the user has options for controlling the speed. these simple
options are the cars state(on off, fast slow) 
speed might be represented by numbers 0-5.

when the car is first turned on a user might receive a representation of the
cars state that looks like this:
`
{
  "on/off": "on",
  "speed": 0,
  "speed options": [ 0, 1, 2, 3, 4, 5]
}
`

a user could then use `PUT` to change the speed to `1`.

Hypermedia, HTTP is being used to control the state of the application.


## additional resources

[api design on the scale of decades](http://nordicapis.com/api-ebooks/api-design-on-the-scale-of-decades/)  
[restful api design](https://restful-api-design.readthedocs.io/en/latest/)  
[api design best practices](https://blog.philipphauer.de/restful-api-design-best-practices/)
