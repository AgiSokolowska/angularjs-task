# angularjs-task

This is an application for recruitment purposes.

Instruction: Prepare an application that will download from an external file users.json data and displays them in a table on the screen.

Buttons: "edit" and "delete" respectively edit and delete specific users. It should also be possible to edit multiple users at once (by selecting specific checkboxes and press the "Edit selected" button.

Use angularJS 1.5.11 and jasmine test framework,
mock/stub the database,
concentrate on proper design and clean code, rather than UI design.


Prerequisites:
*Git to clone repository
*Node.JS (with npm)

Installing:
Enter project directory and run *npm install* to install dependencies.
This command reads angularjs-task's package.json file and downloads the following tools into the node_modules directory:
*Bower - client-side code package manager
*Http-Server - simple local static web server
*Karma - unit test runner
*Protractor - end-to-end (E2E) test runner
Running *npm install* will also automatically use bower to download the AngularJS framework into the app/bower_components directory.

Running
*npm start* to start the application.This will create a local web server that is listening to port 8000 on your local machine. You can now browse to the application at http://localhost:8000/index.html.

Testing
Running *npm run protractor* will run the End to End tests.
Since Protractor works by interacting with a running application, we need to start our web server:*npm start*,
Then, in a separate terminal/command line window, we can run the Protractor test scripts against the application by running:
*npm run protractor*
