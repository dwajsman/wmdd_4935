# assignment 03 design an API

## instructions

In your small teams you are going to design an API for a book lending service.
I am leaving the definition of book lending service to be very open ended. This
could be an API for a school or public library, but it could also be for a
service like Airbnb for books or something entirely unique of your own creation.

Before the start of next weeks(june 29) class I would like a member of your team to email
me with a progress report. This should provide broad strokes information about
the API you are designing. This gives me time to make suggestions if you are not
on the right track. you are of course welcome and encouraged to ask questions
before this if you have any.

your API design should include:  

1) planning for all involved parties, the submitted version of this can be as simple as a bullet point list.  

2) resources(URLs), available methods on those resources and
authentication/authorization and possible queries that could be used to get more
specific information. 

how this is documented is up to you but it should be clear, your API design documentation does not need to
look like the example below, but should contain the included information.

It is likely that your API could include considerably more than 10 resources, or
routes, but for the purposes of this assignment 10 is the maximum that you
should include in your submitted design.

### example resource

    /*
    description: student accounts API
    this allows students to view their own grades
    and instructors and senior administrators to view all students information
    and make changes to that information.
    */

    **/students**

    element: /id (get individual student by ID)

    methods: GET POST PUT DElETE

    queries:
        - grades (grades=A, get all students with an average grade of A)
        - term   (term=2, get all term 2 students)

    authentication: a student can get their own information, instructors and
    administrators can get all students as well as add students, delete students
    and update student info

## submission guidelines

Although there are tools that exist to assist in the design of an API there is
not a standardized method. As such I am going to leave the tools that you use up
to you. My only requirements are that all materials be submitted in an easy to
view form ie plain text documents(something that I can open in a text editor), .PDF or .PNG/JPG. If you use word please
export as a .PDF.

include a .txt file with all team members names and email addresses.

If you have questions about this please ask well in advance of the due date.

## Due date

thursday july 6th, before the start of class.

## additional information

as mentioned above there are tools to aide in designing an API including markup
languages and frameworks specifically for this purpose. you do not have to use any new or
specialized tools or markup for this assignment, the below links are included
for the curious students.

[RAML](http://raml.org/)

[swagger](http://swagger.io/)
