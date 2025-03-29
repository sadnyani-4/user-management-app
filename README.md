# User Management Application

A React application that integrates with the Reqres API to perform basic user management functions including user authentication, listing users, and editing or deleting user details.

## Table of Contents
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Demo
[Live Demo Link](#) (Make sure to replace this with a link to your hosted application if available)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sadnyani-4/user-management-app.git
   cd your-repo-name
   ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the application**:
    ```bash
    npm start
    ```
    This will start the development server, and you can access the application at `http://localhost:3000 in your web browser.
    Alternatively, you can use `npm run build` to create a production build.

4. **Log in** using the following credentials:

    - **Email**: eve.holt@reqres.in
    - **Password**: cityslicka

5. After logging in, you will see the user list where you can:

    - **Edit** user details.
    - **Delete** user entries.
    - Navigate between pages using pagination.

## Features

- **User Authentication**: Log in to access the application.
- **User List**: View a paginated list of users fetched from the Reqres API.
- **Edit User**: Update the first name, last name, and email of a user.
- **Delete User**: Permanently remove a user from the list.
- **Responsive Design**: The application is designed to work well on both desktop and mobile devices.
- **Error Handling**: Displays appropriate error messages for failed API requests.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Axios**: Library for making HTTP requests.
- **React Router**: For navigating between different pages.
- **Bootstrap**: CSS framework for responsive design.
- **HTML/CSS**: Standard technologies for structuring and styling the application.

## API Endpoints
The application integrates with the following Reqres API endpoints:

- **Authentication**:
    - ```POST /api/login``` - To log in and retrieve a token.
- Fetch Users:
    - ```GET /api/users?page=<page_number>``` - To get a paginated list of users.
- Update User:
    - ```PUT /api/users/{id}``` - To update user details.
- Delete User:
    - ```DELETE /api/users/{id}``` - To delete a user.