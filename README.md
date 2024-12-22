# Authentication System Using API

This project implements a simple authentication system with a login UI and a profile page. The system allows users to authenticate using a username and password, and upon successful authentication, they are redirected to a profile page displaying their information.

## Features

- **Login Page**: A form with fields for the username and password.
- **Authentication**: Sends a POST request to an API to authenticate the user.
- **Profile Page**: Displays user information once authentication is successful.
- **Error Handling**: Provides feedback for invalid login attempts.

## Steps to Complete the Project

### 1. Create the Login UI
- Design a login page with input fields for the username and password.
- Include a login button that will trigger the authentication process.

### 2. Handle Login Request
- On clicking the login button, capture the username and password entered by the user.
- Send a POST request to the following API endpoint with the captured username and password:

