>What is Redux?

Redux is a predictable state management library for JavaScript applications. It can be used with any front-end JavaScript framework or library, such as React, Angular, or Vue.js.

Redux is designed to help manage the state of an application by providing a single, centralized store for all of the application's data. It uses a unidirectional data flow and a set of strict rules to ensure that the state of the application can only be modified in a predictable way. This makes it easier to understand and debug the application, as well as to implement features such as time travel debugging and hot reloading.

Redux is often used in conjunction with React because it works well with the declarative nature of React components. However, it is not limited to React and can be used with any front-end framework or library.

<hr/>

>How Redux Work?

The core idea behind Redux is that the state of an application should be managed in a single, immutable store. This store can only be modified through the use of specific actions, which are dispatched to the store and processed by reducer functions. These reducer functions update the state of the store in a predictable, deterministic way, based on the type of action that was dispatched.

![state change](https://iili.io/HIMHU7I.png)

<hr/>

>We can use useContext and useReducer in React instead of Redux!

You are correct that both useReducer and useContext can be used as alternatives to Redux in some cases. useReducer is a hook that allows you to manage state in a React component, and useContext allows you to pass data down the component tree without the need for props drilling.

However, there are still a few reasons why you might want to consider using Redux in your application:

Centralized state management: Redux allows you to store all your application's state in a single, immutable store, which can make it easier to manage complex state, especially in larger applications.

- Predictable state updates: Redux uses a strict unidirectional data flow, which means that state updates only happen in a predictable way. This can make it easier to debug and test your application.

- Easy to implement undo/redo: Because all state updates in Redux are stored in an array of previous states, it is easy to implement undo/redo functionality.

- Community support: Redux is a widely-used library, and as such has a large community of developers who can provide support and resources.

That being said, it's important to choose the right tool for the job. In some cases, using useReducer or useContext may be sufficient for your needs, and using Redux may be unnecessary. It's always a good idea to carefully consider the trade-offs of each approach before making a decision.

<hr/>

> What are the three principles of Redux?

<details><summary>Single source of truth:</summary>The state of your entire application is stored in a single object, called the "store." This makes it easier to understand the state of your application and debug problems.</details>

<details><summary>State is read-only</summary>The only way to change the state of your application is to dispatch an action, an object that describes a change to the state. This makes it easier to understand how the state of your application is being modified and allows you to implement logic to handle different types of actions.</details>

<details><summary>Changes are made with pure functions</summary> In Redux, you define "reducers" to handle the logic for updating the state based on an action. Reducers are pure functions, which means they do not have side effects and always return the same output for a given input. This helps to ensure that the state of your application is predictable and easy to test.</details>