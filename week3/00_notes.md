# week 03 May 18

## agenda

today  
- events
- streams
  -pipe
- buffers

next week  
- quiz 1
- setting up a project with NPM
  - package.json
  - using third party modules
- hello world node
  - http(s) module
- intro to http

## events

we have been talking about nodes event driven architecture since the first week
of class, today we are going to dive into some of these concepts a little
deeper. previously i mentioned that nodejs uses an event driven architecture so
that node can be single threaded and still work with I/O asynchronously. i also
mentioned that the most
common alternative to this solution is using a language that allows you to
create new threads. what i left out is that this is really the only way to handle asynchronous
I/O. Your operating system(OS) is really good working with threads, so node can
be single threaded by handing off some operations to the system kernel. This is
really clever and makes our lives as node developers much easier.

node accomplishes this with the infamous and often misunderstood node event loop.
before next class I would like you to read the documentation on the event loop
provided by node. I would also watch the video before searching for additional
tutorials on the node event loop.

[nodejs.org docs event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)  
[bert belder presentation on the event loop](https://www.youtube.com/watch?v=PNa9OMajw9w)

if you are interested in really diving deep into this the [libuv](http://libuv.org/) docs are a good place to start.

## streams buffers and pipes

you are likely at least somewhat familiar with the concepts of streams and
buffers. you have no doubt encountered streaming media, and you may have seen a
message that reads 'buffering' while watching or listening to something while
streaming media. Essentially the concept of buffering is a way to move smaller
pieces of a larger file blob or datum of some kind. streaming media is an
excellent example of one of the reasons that we may want to do this. by moving a
small pieces of a movie, for example, from a server to your local machine in
chunks you can start watching your movie without waiting for the entire file to
download.

to abstract this concept a little further, and because every programming class should have at least one silly 'real world'
example; imagine you are doing some gardening in your backyard, you need some
manure, more than you can carry in small bags, so you order an appropriate
quantity from your local garden supply store. when your truck load of manure
arrives there isn't room for the whole thing in your backyard, just dumping it
all at once would kill your garden, so you have the delivery people dump your
manure on your driveway(your neighbors love you for this). you then use a wheelbarrow 
to move smaller amounts, amounts of manure you can work with, one load at a
time. 

pipes, or piping is a way to pass a stream of data from one source to another.
passing information from an api into file being written asynchronously for
example, piping a read stream into a write stream.

above i mention read streams and write streams, node has four types of streams.

- Readable - streams from which data can be read (for example fs.createReadStream())
- Writable - streams to which data can be written (for example fs.createWriteStream()).
- Duplex - streams that are both Readable and Writable (for example net.Socket).
- Transform - Duplex streams that can modify or transform the data as it is written and read (for example zlib.createDeflate()).

we are going to look some at first two types a little today.

[node docs on the buffer module](https://nodejs.org/dist/latest-v7.x/docs/api/buffer.html)  
[node docs on the stream module](https://nodejs.org/dist/latest-v7.x/docs/api/stream.html)
