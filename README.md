# Internations

This app is for testing purposes and it is intended to show how to work with react and redux with a professional architecture structure, the base setup is using [Rect Starter Kit][1] but with a few changes in the rendering, in the redux store management that wasn't described or implemented in the kit, it is using [Redux][2] so we have folders for the actions, reducers and the store itself.

I worked in this architecture setting up the models and the services necessaries to create the full coverage of the application, also creating a method to work from the actions and the redux store.

### Why react and redux?
Because I wanted to show the capabilities of this technologies working together with [GraphQL][3], also I think that redux is a very power tool and allows you to create very complex applications with easy manageable components and workflows, it has an initial invest of time but its results are amazing.

### Technologies

* Reactjs
* Redux
* Webpack
* Universal Routing
* GraphQL
* React Toolbox (Materials components for react)

### Features

* Server side rendering
* Redux Thunk to perform asynchronous calls
* ES16
* Compiling and Deploying to Heroku or Local build
* Currently, Events, Groups and Users are being displayed Dynamically using Actions and Reducers

### Notes

* Development time 6 hours.
* I used this Starter kit because I'm not that experienced in React and wanted to show that I can work with new technologies.
* Developed and Tested on Google Chrome v59, Mac OS Sierra.

### How to run it.  

```
$ git clone https://github.com/fvalencia/internations.git
$ cd internations
$ npm install
```

**Development**
```
$ npm start
```
Note: This will compile the code using webpack and display the website.

[1]:https://github.com/kriasoft/react-starter-kit
[2]:https://github.com/reactjs/redux
[3]:http://graphql.org/learn/
