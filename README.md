##ARTICLES:

Articles is a Free Article posting application based on MEAN technology.

It is the application which can be used to help people who wish to start putting their thoughts.
And also for startup users a video is provided on the home page of this appication which may help them i.e. the newbies in which way to begin their writing.

## Prerequisites to use Articles
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```bash
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install grunt globally using npm:

```bash
$ npm install -g grunt-cli
```

## Downloading Articles
There are several ways you can get the MEAN.JS boilerplate:

### Cloning The GitHub Repository
You can also use Git to directly clone the Articles repository:
```bash
$ git clone https://github.com/akhiltambi/articles.git articles
```
This will clone the latest version of the Articles repository to a **articles** folder.

### Downloading The Repository Zip File
Another way to use the Articles is to download a zip copy.

## Quick Install
Once you've downloaded the Articles repository and installed all the prerequisites, you're just a few steps away from starting to modify your Articles application the way you wish.

The first thing you should do is install the Node.js dependencies. 
To install Node.js dependencies you're going to use npm again. In the application folder run this in the command-line:

```bash
$ npm install
```

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* Finally, when the install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application.

## Running Your Application
After the install process is over, you'll be able to run your application using Grunt. Just run grunt default task:

```bash
$ grunt
```

Your application should run on port 3000, so in your browser just go to [http://localhost:3000](http://localhost:3000)

That's it! Your application should be running. 

## Getting Started With Articles
Articles application is based on the MVC provided by MEAN.JS. So there is a lot of stuff to understand. Hence We recommend you go over the [Official Documentation](http://meanjs.org/docs.html).

## Live Example
Browse the live MEAN.JS example on [http://meanjs.herokuapp.com](http://meanjs.herokuapp.com).

## Credits
Inspired by the service provided by [MEAN.JS](http://meanjs.org)

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
