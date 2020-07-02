# Vote 4 Change

_Vote 4 Change_ is a criminal justice ballot guide that holds politicians accountable.

## Project Structure

```
.
├── public/
│   ├── apiKey
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
|   └── ...
│
├── src/
│   ├── App
│   │   ├── App.js
│   │   └── App.css
│   ├── Components
│   │   └── ...
│   ├── APIs
│   │   └── ...
│   ├── Images
│   │   ├──
│   │   └── ...
│   └── Index
│       ├── Index.js
│       └── App.css
├── README.md
├── package.json
└── ...
```

## Development

_Make sure to familiarize yourself with these tools before contributing._

### 📚 The Stack

- [React](https://reactjs.org/) for our front-end.
- [Axios](https://github.com/axios/axios) for making API calls.
- [Styled Components](https://styled-components.com/) for styling components.
- [D3 Array](https://github.com/d3/d3-array) for manipulating the API response.

### 🏴‍☠️ The Hooks

- This web app uses [Custom Hooks](https://reactjs.org/docs/hooks-custom.html). No classes here! He
  - [usePlacesAutocomplete](https://github.com/wellyshen/use-places-autocomplete) by Welly Shen. Welly's feature rich Hook for the Google Maps API is easy to use and saves money!
  - [SWR](https://github.com/vercel/swr) by Vercel. Short for `stale-while-revalidate`, SWR is the easiest way to fetch data in React.

### Web API's

<!-- TODO: add api instructions -->

## Demployment

<!-- TODO: add deployment instructions -->

Netlify!

## Example component

The general structure of a component in this codebase looks like this:

```jsx
import React from 'react'
// ... more imports ....

const StyledComponent = styled(component)

const functionName = (props go here) => {
  // ... component logic with react hooks ....

  return (
    <div>
      <Styled Component/>
    </div>
  )
}
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
