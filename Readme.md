>What is Redux?

Redux is a predictable state management library for JavaScript applications. It can be used with any front-end JavaScript framework or library, such as React, Angular, or Vue.js.

Redux is designed to help manage the state of an application by providing a single, centralized store for all of the application's data. It uses a unidirectional data flow and a set of strict rules to ensure that the state of the application can only be modified in a predictable way. This makes it easier to understand and debug the application, as well as to implement features such as time travel debugging and hot reloading.

Redux is often used in conjunction with React because it works well with the declarative nature of React components. However, it is not limited to React and can be used with any front-end framework or library.

>How Redux Work?

The core idea behind Redux is that the state of an application should be managed in a single, immutable store. This store can only be modified through the use of specific actions, which are dispatched to the store and processed by reducer functions. These reducer functions update the state of the store in a predictable, deterministic way, based on the type of action that was dispatched.

![state change]("https://github.com/AbhilashMadi/Learn-Redux/blob/main/assets/working.png");

