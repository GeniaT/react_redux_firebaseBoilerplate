# React Redux Ordering app
## Used Stack
React library for app composability
Redux for state management

## Tools used

Additional useful libraries:
Bundler: <a href="https://webpack.js.org/">Webpack</a><br>
Testing: <a href="https://facebook.github.io/jest/">Jest</a>

## Main features:


## Assumptions:
- When displaying an item from an order, I calculate the value of the line instead of reading the total. Since I have to use this logic when adding an new item to an order (no total provided), I thought it would make more sense to apply same logic on both sides.
 
## How to use it:
Run the command `git clone https://github.com/GeniaT/react_redux_firebaseBoilerplate.git`, <br>
If you plan to use Firebase for backend, create your app first on <a href="https://console.firebase.google.com/u/0/">Firebase site</a>, get the config info for your app and insert it in `utils/firebase` file. <br>
Run `npm run dev-server` and you are ready to open the boilerplate app and start tuning it!
