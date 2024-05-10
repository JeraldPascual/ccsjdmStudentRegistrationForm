# CCSJDM Student Registration Form App Documentation

https://jeraldpascual.github.io/ccsjdmStudentRegistrationForm/

## Overview
The Registration App is a web application designed to facilitate CCSJDM student registration for educational institutions. It allows students to fill out a registration form with their personal details and submit the information securely. The application is built using HTML, CSS, JavaScript, and integrates with Firebase for data storage.

### Description

This application utilizes the POST method for form submissions. When a user fills out the registration form and submits it, the data is sent to the Firebase Realtime Database using the POST method. This method is used to send data to the server to create or update a resource, in this case, registering a new student.

<img src="https://github.com/JeraldPascual/ccsjdmStudentRegistrationForm/blob/d45f25e1fdaeeb09b997bd0599a737902824b613/firebaseDesc.png" alt="firebaseDesc">


--- 

## Features
- **Student Registration Form**: Users can fill out a comprehensive form with their personal details including name, contact information, address, and more.
- **Dynamic Form Fields**: The form dynamically adjusts based on the user's selection of the program applying for (college or senior high school).
- **Firebase Integration**: User registration data is securely stored in Firebase Realtime Database.
- **File Upload**: Users can upload 2x2 picture and proof of disability, which is stored in Firebase Storage.
- **Success Message**: Upon successful registration, users receive a confirmation message.

## Installation
To run the Registration App locally, follow these steps:
1. Clone the repository: `git clone https://github.com/JeraldPascual/ccsjdmStudentRegistrationForm.git`
2. Navigate to the project directory: `cd registration-app`
3. Open the `index.html` file in your preferred web browser.

## Usage
1. Open the Registration App in your web browser.
2. Fill out the registration form with your personal details.
3. Optionally upload proof of disability.
4. Submit the form.
5. Upon successful registration, a confirmation message will be displayed.

## Dependencies
- **Tailwind CSS**: Used for styling the user interface.
- **Bootstrap**: Used for styling the user interface.
- **GSAP (GreenSock Animation Platform)**: Used for animations.
- **Firebase**: Used for backend services including Realtime Database and Storage.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License
This project is licensed under the [MIT License](https://github.com/JeraldPascual/ccsjdmStudentRegistrationForm/blob/main/LICENSE.txt).

## Contact
For questions or support, please contact [Jerald Pascual on Facebook](mailto: jpascual.ccsjdmshs@gmail.com).
