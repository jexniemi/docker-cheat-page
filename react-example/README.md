## Instructions

Clone project and use following commands:

Install dependencies:

```$ npm install```

Run in development mode:

```$ npm start```

Create production build and serve it:

```$ npm run build```
```$ serve -s build```

Install serve if you do not have it, or use any other server to host the app

## Docker instructions

Build a docker image from the app:

```$ docker build . -t react-sample```

Run the image in container:

```$ docker run -d --rm --name reactsample -p 5050:5050 react-sample```

This will map your host machines port 5050 to the container's port 5050, so the application running in the container should be now available at http://localhost:5050/