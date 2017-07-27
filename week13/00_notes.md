# week 13 July 27 so long, and thanks for all the fish

## agenda

today:
- go over last weeks quiz
- briefly discuss exam
- a few notes on moving an app or service to production

## logging

logging in a production environment is important because it can often be the
only method of diagnosing crashes, or other errors and it provides a development
team with valuable information into what is going on in a production
environment, how a service is performing...

logs should be time stamped, and be easily readable by humans as well as
machines.

A good rule of thumb when logging in production is that your logs should not be
on the same server as your app, this is something that is very easy to do thanks
to cloud computing.

[good](https://github.com/hapijs/good)  
[pino 'extremely fast nodejs logger'](http://getpino.io/#/)  
[hapi pino plugin](https://github.com/pinojs/hapi-pino)  
[labr, also works with pino](https://github.com/felixheck/laabr)

## caching

As you have noticed by now, your app or service is likely to be making a lot of
database calls, this can be an expensive task, and is often the slowest part of
an app or service, and can create a bottleneck effect slowing down your app or
service. To deal with this problem it is common for developers to implement some
form of caching. 

[hapi caching tutorial](https://hapijs.com/tutorials/caching?lang=en_US)

[catbox plugin](https://github.com/hapijs/catbox)


## good luck on the exam!
