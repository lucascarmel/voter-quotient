# Don't Wait — Vote

_Don't Wait — Vote_ is a criminal justice ballot guide that holds politicians accountable.

## Project Structure

```
.
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── apiKeys.js
│   ├── manifest.json
│   ├── robots.txt
|   └── ...
├── src/
│   ├── Components
│   │   └── ...
│   ├── Hooks
│   │   └── ...
│   ├── Icons
│   │   └── ...
│   ├── Utils
│   │   └── ...
|   ├── App
│   │   ├── App.js
│   │   └── App.css
│   ├── Index.js
│   └── Index.css
├── README.md
├── package.json
└── ...
```

## Development

### [Prototyping Notebook](https://observablehq.com/@elibenton/ballotready-api)

_Please check this [Observable Notebook](https://observablehq.com/@elibenton/ballotready-api) before going any further! It contains everything you need to know about how this web app is going to work!_

### Getting Started

1. Clone the repo

`git clone _________`

2. Add all the dependencies

`cd voter-quotient`

then

`yarn` or `npm install -g`

3. Run the development server

`yarn start`

_**Note:** I use VSCode because of it's wonderful web dev autocomplete and Git integration. I also recommend a few super helpful plugins!_

- **Prettier** to "format on save" and keep my code looking consistent
- **Git Graph** because I need to visualize git branches
- **Emmet** for powerful snippets and smart code wrapping
- **[FiraCode](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)** for it's font ligature support

### 📚 Tools & ⚓️ Hooks

_This web app uses [Custom Hooks](https://reactjs.org/docs/hooks-custom.html). No classes here!_

- [React](https://reactjs.org/) for declarative and functional UI.
- [SWR](https://swr.vercel.app/) for automatic and reactive data fetching.
- [Grommet.io](https://v2.grommet.io/components) for painless responsive layout and global theming.
- [Reach Router](https://reach.tech/router) for lightweight and simple routing.
- [usePlacesAutocomplete](https://github.com/wellyshen/use-places-autocomplete) by Welly Shen. Welly's Hook for the Google Maps API is easy to use and saves money!
- [usePosition](https://github.com/trekhleb/use-position) by Oleksii Trekhleb. Oleksii's Hook is simple to use and allows for high accuracy geolocation!
- _useLocalStorage_

### 🗄 The Data

#### BallotReady API

[Their documenation](https://developers.civicengine.com/docs/api)

#### Google Civic Info API

[Their reference](https://developers.google.com/civic-information/docs/v2)

#### MIT Election Lab

[Their data](https://electionlab.mit.edu/data)

## Demployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/e8e24797-a3f1-4190-9ea1-03f3ecf72326/deploy-status)](https://app.netlify.com/sites/vote4change/deploys)

This web app is deployed with [Netlify](https://www.netlify.com/) and utilizes some of their best features.

- [Continuous Deployment](https://www.netlify.com/products/build/)
- [Edge CDN](https://www.netlify.com/products/edge/)
- [Server-Side Analytics](https://www.netlify.com/products/analytics/)
- [Automatic TLS by Let’s Encrypt](https://docs.netlify.com/domains-https/https-ssl/)

## Example Component

The general structure of a component in this codebase looks like this.

```jsx
import React, {useContext } from 'react'
// ... more imports ...

export default (props go here) => {
  // ... component logic with react hooks ...

  return (
    <Box>
      <StyledComponent/>
    </Box>
  )
}

// often there is no need for styled components
const StyledComponent = styled(component)`
  font-size: 1em;
`

```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [documentation](https://facebook.github.io/create-react-app/docs/getting-started).

#### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note:** _This is a one-way operation. Once you `eject`, you can’t go back!_

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
