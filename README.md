# React Redux Firebase boilerplate
## Used Stack
React library for app composability
Redux for state management
Firebase for Authentication and database.

## Tools used for this boilerplate

Additional useful libraries:
Bundler: <a href="https://webpack.js.org/">Webpack</a><br>
Testing: <a href="https://facebook.github.io/jest/">Jest</a>

## Main features:
The React pattern that is used here is the `Duck pattern`. One Duck is supposed to represent a feature from your app like `fart, friends, payment,...`. Actions and reducers related to a feature will be created under its Duck folder.

## How to use it:
Run the command `git clone https://github.com/GeniaT/react_redux_firebaseBoilerplate.git`, <br>
If you plan to use Firebase for backend, create your app first on <a href="https://console.firebase.google.com/u/0/">Firebase site</a>, get the config info for your app and insert it in `utils/firebase` file. <br>
Run `npm run dev-server` and you are ready to open the boilerplate app and start tuning it!
