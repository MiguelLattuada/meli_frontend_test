# Frontend test for MELI
__How to run__
- Install packages `npm install`.
- Run build or dev command `npm run build | npm run dev`, dev will block the current terminal (it'll watch for files changes) so if this is the case, you'll need to open a new terminal to run the next command.
- Run the nodejs server `npm start`.
- It's possible at the time you run `npm install` new minor versions of dependencies came out, so if you're not able to run the application, an instance is running on [heroku](https://meli-frontend-test.herokuapp.com).

__Config__
- Webpack: load jsx, ES6, and sass
- package.json: dependencies, dev build, prod build and server run.

__Local environment versions__
- Node: v6.11.3
- npm: v3.10.10
- OS: macOS Sierra (10.12.3)
