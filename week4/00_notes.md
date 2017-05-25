# week 4 May 25 2017

## agenda

this week
- **quiz one**
- setting up a node project
  - package.json
  - npm (node package manager)
- intro to HTTP
  - HTTP methods
  - the node http module
- assignment one, mini CMS/Static Site Generator

next week
- routes
- Content-Type
- creating your first API
  - more HTTP methods
  - REST


## setting up a node project (NPM and package.json)

### NPM
because I haven't already thrown enough confusing new information at you, NPM is
the node package manager, but it is not an acronym for 'node package manager'.
if you go to npmjs.com in the top left corner there is a silly new definition of
npm generated with each visit, 'natural push machine', 'notorious praying mantis'... 
but when i say npm in this class what i am referring to is the node package
manager, it has nothing to do with insects.

npm comes with node, so you don't have to install anything.

if you open up a new terminal and type `npm -h` the general help for npm will be
displayed. npm can be used to do more than this, but it is most commonly used to
manage project dependencies, for now that is what we are going to focus on.

### first steps with npm

to get started with NPM create a new directory for a test project to live in.  
`mkdir new-proj`  
and cd into it  
`cd new-proj`  
now you can use NPM to create a package.json file, this contains some
information about a javascript project, dependencies, git repository,
licensing... you will be taken through a few questions about your new project
after entering  
`npm init`  
just hit enter to accept the defaults for now. you can also enter  
`npm init -y`  
if you use `ls` to see what is in your directory you should have a package.json
file, open it up in a text editor and take a look at it.

### installing dependencies

dependencies have two categories. developer dependencies, tools that you use to
help you test your project ie, linters, a testing server... and dependencies
that your software actually needs.  
`npm install chokidar --save`  
this installs chokidar as a module that we can use in our project.  
`npm install serve --save-dev`  
this installs 'serve' as a developer dependency, take another look at package.json 
both of the modules should have been added to your package.json
file along with a version number.

if you run `ls` again you will notice that a new directory 'node_modules' has
also been created, this is where the modules you have just installed, as
well as any dependencies that they might have live.

if you want to work on this project with another person they only need your
package.json to get set up. they create a directory git clone your package.json
and run  
`npm install`  
from within the directory and they are ready to go.

we won't cover everything that can be done with package.json and NPM in this
class, but NPM is well documented and there are numerous tutorials available for
everything that we don't cover during this term.

[npmjs](https://www.npmjs.com/)  


### yarn

yarn is an alternative package manager created by facebook. when you are looking
at tutorials or projects on github you may encounter yarn, they offer most of
the same functionality with only slightly different commands.  
[yarn](https://yarnpkg.com/en/)

## HTTP methods

before talking about http methods we need to talk about what http is. it stares
you in the face everyday, but most of you probably don't pay much attention to
it. take a look at your browser, specifically the text area where the address(URL) to
this page is. HTTPS (we will talk about the S in a second) is likely right at
the beginning of the address. HTTP is 'Hypertext Transfer Protocol'. It is a
request response protocol that facilitates communication between a client and a
server. the 's' in HTTPS is for 'secure' and indicates that the connection is
encrypted using TLS(Transport Layer Security) or SSL(Secure Socket Layer).

### methods

These are not the only HTTP methods, but we are going to focus on these four for
the remainder of the term. The reason that we are focusing on these four is that
they directly correspond to the actions that we want to perform on some data in
database.

- **GET**    retrieves a resource
- **POST**   creates a resource
- **PUT**    updates a resource
- **DELETE** deletes a resource

For today we are only going to see code examples that make use of the GET
method.

### a note about HTTP/2 HTTP/1.1

HTTP/2 which was standardized in 2015, is the first revision to the standard since 1997 when HTTP/1.1 was
standardized. While this is relatively significant and HTTP/2 introduces a few new features 
that are worth being aware of such as multiplexed streams most of what we are
going to cover in this class is the basics of HTTP, and a lot of that hasn't changed. So
we will rarely have to worry about it.

[intro to HTTP/2](https://kinsta.com/learn/what-is-http2/)

[mdn quick HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

[mdn http guides](https://developer.mozilla.org/en-US/docs/Web/HTTP)

[url or uri?](https://danielmiessler.com/study/url-uri/)

## node http module

the http module is an interface for working with well, http.

there is also an https module, but we are going to look at the http module so
that we don't have to worry about creating TLS/SSL certificates.

### createServer

server essentially listens for requests and then returns a programmed response.
a request is usually given as a URI that specifies a route, and the response is
what is kept at that location, perhaps an HTML document, or a function that
retrieves data from a API and provides you with some json.

### writeHead

Content-Type

we are going to be taking a more detailed look at content-type next week.
for now we are just going to use application/json, which is what we would use if
we were writing an end point for a REST API.

status codes
- 5xx server error
- 4xx client error
- 3xx resource moved
- 2xx success

[status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

### end
the end function tells the recipient of our response that this is the end of the
data being sent. if you don't include the end function, the client waits for more data. 
depending on the client this might result in some sort of time out error.

### listen

in the listen function we supply a number, this is the port number that our
server is listening to. generally you don't enter a port number in a URL, this is
because most pages are served on port 80(http) or port 443(https).
ports with numbers 1024 and lower require root access and many of them are used
for things like ssh(22) because of this you will often specify a higher number
when testing, 3000, 5000, 8080...

[port reference](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)

[node documentation](https://nodejs.org/dist/latest-v7.x/docs/api/http.html)
