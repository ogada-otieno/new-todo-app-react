# Items to be covered JAN 19-2023

1. axios as an alternative to fetch API requests
2. setting up .env to enable separation of API links
3. useState method
4. State management
5. createContext


## axios

### installing axios:

```bash
npm install axios
```

### importing axios:

```bash
import axios from 'axios'
```

### applying axios:

Check TodosContext.js

## Setting up .env

- enables storage of API links securely
- enables the project to use variables declared within the environment as if they were declared locally in your JS files 
- You must create custom environment variables beginnning with **REACT_APP_**. Any other format will be ignored.
- point above ensures that there isn't any accidental exposure of private keys.
- reload server anytime you make changes to .env to enable configuration.

### Usage:

Example usage: as a location for API.
- check axios.get method in TodoContext.js

## useState method

Definition: useState is a Hook that lets you add React state to function components.
Used in function components.

What does useState return? It returns a pair of values: the current state and a function that updates it.

### Syntax

```bash
const [name, setName] = useState([])
```

name - name of variable to hold state
setName - name of function to set input value when the state changes. 

Ensure you import useSate hook like so:

```bash
import React, { useState } from 'react';
```

Assume you have your initial state as an empty array, react will remember this value anytime it renders and re-renders. 
In the event that you change the state you will use the function (i.e setName) to update the state (i.e name)

### Example usage:
Check TodosContext.js

## State Management 

React state management is a process for managing the data that React components need in order to render themselves. 
This data is typically stored in the component's state object. 
When the state object changes, the component will re-render itself.

### Variations for use.
- Local: useState method.
- Small scale projects: build-in Context API (createContext method).
- Global large scale projects: Redux is advisable.

## Context (createContext method)
- React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.

- In other words, React context allows us to share data (state) across our components more easily.

- React context is great when you are passing data that can be used in any component in your application.

- Helps avoid props drilling??? (read more on this!) => https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-react-context

**files to look out for: 
1. index.js
2. TodosContext.js 
3. Home.js

### Context.Provider
- The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. 
- One Provider can be connected to many consumers. 
- Providers can be nested to override values deeper within the tree.
- Our consumer in this case is the root component (App.js)

### React.createContext
- Creates a Context object. 
- When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

If we check out TodosContext.js we'll notice that we create Context which will enable us to use the value from our Provider in Home.js through useContext.


