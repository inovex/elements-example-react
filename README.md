# Example Inovex Elements React Application

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Integration of inovex-elements (stencil components)

This project demonstrates the usage of [stencil-components](https://gitlab.inovex.de/inovex-elements/stencil-components) in React. Since the components are currently not published to npm, it is recommended to use npm linking to integrate them:

1. Make sure that you already ran `npm link` in the directory of [stencil-components](https://gitlab.inovex.de/inovex-elements/stencil-components).

2. Afterwards, run in this project and `npm link stencil-components` to link the components to this project.


## Project setup

To log into the private inovex elements registry, run the following script (username inovex, password inovex)

```bash
npm set registry https://registry.elements.inovex.io
npm adduser --registry https://registry.elements.inovex.io
npm config set always-auth true
```

Run `yarn install`. The `postinstall`-Script in `package.json` copies the inovex-elements from the `node_modules`-Folder to the public directory. 

> Hint: [Stencil doc](https://stenciljs.com/docs/framework-integration) provides information about integration in react environments.

> Hint: In this simple configuration, whenever you want to integrate a new version of `stencil-components`, run `yarn install` again to copy the web components again.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
