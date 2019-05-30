# Responsive app (Frontend)

### Introduction 
Simple SPA based off the provided mockup and make a few API calls to a public web API.

### Functionality
The home(default) view fetches data from youtube API and shows the youtube playlist. When clicked on video play icon we go to full mode view.  

This project was bootstrapped with Create React App.

Below you will find some information on how to perform common tasks. You can find the most recent version of this guide here.

Create React App is divided into two packages:

create-react-app is a global command-line utility that you use to create new projects. react-scripts is a development dependency in the generated projects (including this one). You almost never need to update create-react-app itself: it delegates all the setup to react-scripts.

When you run create-react-app, it always creates the project with the latest version of react-scripts so you’ll get all the new features and improvements in newly created apps automatically.

We can run npm test to run tests. testing is still in progress.

For state management we use Mobxjs
 
These files must exist with exact filenames:
 
public/index.html is the page template; src/index.js or if using typescipt index.tsx is the JavaScript entry point. Available Scripts In the project directory, you can run:

npm start Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

npm run deploy Creates build folder.

App is deployed at https://markamenov.github.io/Beyond/ .

The page will reload if you make edits. You will also see any lint errors in the console.

[theYouTubeApi]: <https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw>
