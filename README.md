# datatools-navbar
Common navigation bar for the Conveyal transit data tools suite

## Usage in React Applications

Check the `propTypes` for the options.

```js
import DatatoolsNavbar from 'datatools-navbar'
render(
  <DatatoolsNavbar
    title='Transit Data Manager'
    username='foo@bar.com'
    managerUrl='http://localhost:9000'
    editorUrl='http://localhost:9001'
    userAdminUrl='http://localhost:9002'
    loginHandler={() => console.log('login')}
    logoutHandler={() => console.log('logout')}
    resetPasswordHandler={() => console.log('change pw')}
  />
  , div
)
```

## Usage in Legacy (pre-React/ES6) Applications

Run `webpack -p` to package the legacy.js file and include it in the legacy webapp.

Use the global RenderDatatoolsNavbar function to render the navbar to a specified element:

```js
window.RenderDatatoolsNavbar({
  elementId: 'target',
  title : 'Conveyal GTFS Data Tools',
  managerUrl: 'http://localhost:9000',
  editorUrl: 'http://localhost:9001',
  userAdminUrl: '#',
  username: 'you',
  loginHandler: function() {
    console.log('login!');
  },
  logoutHandler: function() {
    console.log('logout!');
  },
  resetPasswordHandler: function() {
    console.log('reset!');
  }
});
```
