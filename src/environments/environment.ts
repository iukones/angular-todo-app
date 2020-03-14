// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var firebaseConfig = {
  apiKey: "AIzaSyCCYhK-mMklelK6JD4o2iWVn4vjuSlE2DE",
  authDomain: "angular-todo-app-e54cb.firebaseapp.com",
  databaseURL: "https://angular-todo-app-e54cb.firebaseio.com",
  projectId: "angular-todo-app-e54cb",
  storageBucket: "angular-todo-app-e54cb.appspot.com",
  messagingSenderId: "428207634758",
  appId: "1:428207634758:web:9b86ec3b7122b9e6d54d47",
  measurementId: "G-7ZVQL6N01E"
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
