# week 2 May 11

## agenda

### this week
- new weekly breakdown
- setup c9
- intro to nodejs
  - modules
  - file system
  - callbacks
    - error first callbacks

### next week
events, streams and buffers (oh my!)

## notes on setting up c9

create a new workspace, make it public give it a name and use the blank
template.

the blank template comes with nodejs(although a very old version) fortunately it
also comes with [nvm](https://github.com/creationix/nvm) this is a handy tool
for installing and easily switching between different versions of node.

we are going to use this to install a newer version of node, for this class
version 6.9 or greater is required.

we will go through this pretty quickly in class, both c9 and nvm are well
documented, so if you get stuck you should be able to find the solution to your
problem with google, if not let me know.

## javascript modules

modules, or the idea of breaking your code up into smaller pieces(multiple files) is not 
something new to you if you are coming from just about any other programming
language. Yet they are something relatively new to javascript. This has to do
with the origins of javascript and how it was originally intended to be used. In
the early days of javascript you may have had one small script in script tags in
your html, if you had a larger script your script tag included the file path to
your script. one of the new features of es6 is the *es6 module pattern*.
eventually this is supposed to be the module pattern for javascript. right now
you can't use this without a transpiler, or bundler and nodejs has had a way to
handle modules for some time already, the *commonjs module pattern*. because the
es6 pattern will one day soon be the default method for handling modules in the
browser and node i encourage you to look into. but commonjs works now, and it
isn't going to disappear overnight, so for now i am going to show you commonjs.

importing a module  
`const fs = require('fs')`  
import a core module

`const myMod = require('./mymod')`  
import a module that you have written in a file named mymod.js that is in the
same directory as the file you are importing into. notice that we can leave '.js' off.

exporting a module  
in your mymod.js file if you have 
`exports.myfunc = function() {}`  
this will allow you to export a single function  

`module.exports = {}`  
creating an object that contains multiple functions is a common method for exporting modules

using a module  
after importing with require your module is treated as an object, no matter
which method you used to export. you can therefor call a function from a module
the way you would access a function that belongs to any object, `mymod.myfunc()`.

[nodejs module documentation](https://nodejs.org/docs/latest/api/modules.html)

## callbacks

we are going to look at actually using some modules, but before that we need to
talk about callback functions. callback functions are still the most common way
of dealing with asynchronous programming in javascript, they can get messy, but
if used responsibly they aren't too bad, and you have already been using them.
because we are going to start exploring events, and all things asynchronous in
more detail next week i won't go into too much detail regarding how they work now. for now think of a
callback function as a way of telling your code to perform a task, and when that
task is finished do something else, for example: put all of these invitations in envelopes,
and when you are done putting them in envelopes take them to the post office and
mail them. while this is happening your code can continue doing other useful
things. you have seen these in event handlers, where you call a function when a
certain event is triggered, like clicking a button. as i said in week one, this is essentially how
event-driven programming works. only in this case instead of waiting for an
event that is direct user input, maybe the event is reading a file. when your
file is read into memory, do something.

when we look at the fs module in a moment we are going to talk about an error
first callback, where our first parameter passed to our callback is our error
handling.

(for the more advanced students we will look at promises, and async/await later
in the class **node version warning, you need node 7.6 or greater to actually use
async/await**)

## filesystem module

nodejs comes with many useful core modules. among them is the fs(short for filesystem) 
module. the fs module allows you to read and write files, create and remove
directories, watch a file or directory for changes... the fs module allows you
to perform these interactions with a machine's filesystem on any operating system that node runs
on, so most of the time code that works in c9 will work on your windows machine at
home too.

like many of the core node modules fs has asynchronous and synchronous methods.
we are going to look at the asynchronous methods, using callbacks, for
performing a few common tasks today.

[fs module docs](https://nodejs.org/dist/latest-v7.x/docs/api/fs.html)
