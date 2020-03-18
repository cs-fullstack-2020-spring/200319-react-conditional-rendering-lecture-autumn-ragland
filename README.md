# 20-03-19 React Conditional Rendering Lecture

## Set Up
- Create a new react app called `conditional-render-lecture-app`
- Create a class based component called `AppContainer` and reference it in the `App` component
- The `AppContainer` component should display an h1 tag with the text `20-03-19 React Conditional Rendering Lecture`
- Create a class based component called `SignUp` and reference it in `AppContainer`
- Create a class based component called `Login` and reference it in `AppContainer`

## Forms
- The `SignUp` component should display a form using controlled components with fields for full name, username, email address and password. When the form is submitted print the response.
- The `Login` component should display a form using controlled components with fields for username, and password. When the form is submitted print the response.

## State
- Add a `Login` button and a `Sign Up` button to the `AppContainer` component
- Define a property of state called `isLoggingIn` with a value of false
- When the `Login` button is clicked update the value of the state property `isLoggingIn` to true
- Define a property of state called `isSigningUp` with a value of true
- When the `Sign Up` button is clicked update the value of the state property `isSigningUp` to true

## Conditional Rendering Child Components
- If the `Login` button has been clicked display the `Login` component
- If the `SignUp` button has been clicked display the `SignUp` component
- Neither component should display if a button has not been clicked
- Only one component should display at a time

## Conditional Rendering HTML
- Define a property of state called `hasBeenSubmitted` in the `SignUp` component
- When the form has been submitted in the `SignUp` component display an h1 tag with the text `You've Signed Up` and an h2 tag with the text `Your Username is [USERNAME FROM FORM]` above the form using the `hasBeenSubmitted` property of state
- Define a property of state called `hasBeenSubmitted` in the `Login` component
- When the form has been submitted in the `Login` component display an h1 tag with the text `You've Logged In` and an h2 tag with the text `Welcome back [USERNAME FROM FORM]` above the form using the `hasBeenSubmitted` property of state

## Extra!
- In the `SignUp` and `Login` components add a button that says `resubmit form` to display after the form has been submitted
- When the `resubmit form` button is clicked display the form again and clear the fields