// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDbJPwGJUK7hv1f8nYjyuT1D9Sid6KjKxA',
    authDomain: 'mobile-attendence-picture-gps.firebaseapp.com',
    databaseURL: 'https://mobile-attendence-picture-gps.firebaseio.com',
    projectId: 'mobile-attendence-picture-gps',
    storageBucket: 'mobile-attendence-picture-gps.appspot.com',
    messagingSenderId: '717567485921'
  }
};
