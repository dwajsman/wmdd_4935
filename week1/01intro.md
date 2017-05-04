# intro to server side scripting week 1 May 04 2017

## agenda 
This week  
- introductions:
    - take a look at what you need to install
    - go over course outline
- preliminary terminology

Next week:
- proper intro to NodeJS

## what is server side scripting?

## what is a scripting language?

"I think to most people, scripting is like obscenity. I can't define it, but
I'll know it when I see it"
> Larry Wall

## NodeJS

in the class the language that we will be using is JavaScript and JavaScript can
be run a server(or on your local machine (without a browser)) using NodeJS.

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
>> [nodejs.org](https://nodejs.org/en/)

the above description on the NodeJS site is pretty brief, but there are still a few things that we need to unpack in this description.

### v8 JavaScript engine

the description above specifically says 'Chrome's V8 JavaScript engine.' As you
may have guessed NodeJS uses the same JavaScript engine as Chrome. If you google
JavaScript engine you will quickly discover that there are a few of them. But
what is a JavaScript engine?

In simplest terms a JavaScript engine converts JavaScript, a language that
humans can read and understand relatively easily into a language that computers
can understand, machine code. There are a few reasons for this: One is that
machine code is really hard for humans to understand and it would take a lot
longer to write the same code in machine language as it would to write in
JavaScript, this is why modern programming languages were invented. Another good
reason for this is that all computers don't speak the same language, machine
code that works on your Android phone probably won't work on your MacBook Pro,
but JavaScript running on a server can be accessed from those devices as well as
many others. There are JavaScript engines that make it possible to run
JavaScript on many devices now, from powerful servers, to inexpensive
microcontrollers, we will of course be focusing on the server and therefor
NodeJS and the V8 engine.

The V8 engine is an open source project and if you are comfortable with C++ you
can take a look at the source code, or even incorporate it into your own
project. [V8 github repo](https://github.com/v8/v8)

### event-driven, non-blocking

We are going to come back to these two concepts throughout the course, but for
now we will continue with introductory or broad strokes definitions.

You may have heard that JavaScript is *asynchronous* simply put this means that
JavaScript can start a second task without waiting for the first task to be
complete, or more accurately that it doesn't have to wait and perform tasks
synchronously, or in order, starting with the first task and waiting for it to
be finished before moving on to the next task. This is non-blocking. If for example
we are retrieving a resource from another server JavaScript can move on
to perform another task before it finishes retrieving the resource.

There are generally speaking two common ways of accomplishing this. One is to
use multiple threads. So when our program encounters a time consuming process
we can create a new thread for this process and the rest of the code continues
to execute in parallel with this new thread. Threads require processing resources and introduce significant complexity in development.

The other way to accomplish this is by using an *event-driven architecture*.
This is the method used by JavaScript. You have actually already encountered
event-driven programming in JavaScript. addEventListener(), only events
aren't limited to user interactions (clicks...) a change in state, retrieving an
item from a database for example is an event. JavaScript does this with the
*event-loop*; we are going to come back to this in the future, understanding this
is an important part of understanding NodeJS. But because I don't want to
overload you on the first day of class, for now the important take away is that
NodeJS is non-blocking, it can move on to a new task while completing the
previous task. This makes NodeJS fast, which is yet another reason for its
popularity.

### NPM

we will come back to this very soon, for now NPM is the *Node Package Manager* and
it is a handy tool for installing modules, or packages (programs, functions...)
that other developers have written that make writing software much faster. It
likely comes as no surprise that there are many tasks that need to be done
often, like getting a resource from another server, for many of these tasks there is a package that makes
writing the code that performs these tasks easier and faster. We will talk about installing packages and
look at several popular packages that help in working with a database, deploying
code to a server and a few other things that you are likely to encounter as a
NodeJS developer.

>
