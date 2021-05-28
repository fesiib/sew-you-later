# Sew you later!

## Implementation Details

### Code Structure
Since we are using React as our framework, most of our codes reside inside [`src`](https://github.com/fesiib/sew-you-later/tree/main/src) folder. Inside the folder, there are files that are used for setting ups the project. Here, we want to note that [`index.css`](https://github.com/fesiib/sew-you-later/blob/main/src/index.css) is imported to most of our templates. [`Routes.js`](https://github.com/fesiib/sew-you-later/blob/main/src/Routes.js) is powered by `react-router-dom` library to support routing between pages.

Inside [`src`](https://github.com/fesiib/sew-you-later/tree/main/src), there are three folders that we heavily put effort into.

- `src/components`: Implementations of base components can be found here, for example, the navigation bar, the progress bar, image placeholder, measurement canvas, and etc. These components will be combined later in pages. Basically, after we have been through the process of lo-fi prototyping, we jump into this in the early stages.
- `src/pages`: After we finished implementing base components, we start to arrange things into pages. Most of the interaction supports are implemented here. These pages are also routed between each other.
- `src/reducers`: We decide to store a copy of the database of one user when the session is established. This way, we do not have to frequently update the database which it might reduce the speed performance via saving since we do support drafting feature (when a user adds a note). Our solution is to use the reducers, which will store states and will be accessible across all pages.

### Prototype URL
Our prototype is now live at [link](https://sew-you-later.web.app/).

## Simulating End-to-End Scenario
This is our additional section for those who wants to try out our website.

Since our system focuses on the producers' side (those who make handmade cloth products), we are not supporting the interfaces for the customers' side. For example, to have a discussion in real scenario, there might be a feature that supports live video call and screen sharing as well. In this case, we assume that the video call and the screen sharing are already settled up. 

There are totally two steps that require an action from the customer's side: **creating a new order** and **sending the measurement**.

### Creating a New Order

To begin the entire process, you have to first create a new order which will appear in the "New Orders" tab in the main page. 

1. Go to `[BASE_URL]/test/new-orders`
2. Click "+1" button to add *one* new order
3. Click "Go to New Orders" to come back to the main pages

### Sending the Measurements

Since the producers need the measurements from the customers, we provide an extra page that one can simulate the measurement records sending. 

After the producer has sent a measurement form, to proceed, you have to simulate sending the measurements to the producer. 

1. Send the measurement form as a user
2. Go to `[BASE_URL]/test/new-orders`
3. Click "Receive Measurements"
4. Click "Go to New Orders" to come back to the main pages

This will respond to the measurement form automatically. Note that it will update the most recent sent form only.

### Resetting the Environment

If you want to start over (erasing all orders), do the following.

1. Go to `[BASE_URL]/test/new-orders`
2. Click "Reset" to get a clean start

****

## Development Notes

`redux-state-sync` requires to pass payloads for actions in reducers to be `JSON.stringify`-able. **Do not pass functions as payloads**

## Dependencies
Install all the dependencies running the following command in the project directory.
```
npm install
```

****

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
