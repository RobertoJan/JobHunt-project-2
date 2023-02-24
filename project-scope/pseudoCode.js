// Job Hunt App

// ---------------MVP SECTION-------------

// DESCRIPTION---------
// is an app that helps you stay accountable when job searching by helping you stay organized on your job applications

// MVP-------------
// 1. User can input potential job applications to review at a later time
// 2. User is able to see which job applications he/she has submitted or looking to submit.
//3. Our app will hold key information such as url, skills, and contact and sort out the applications

// STRETCH GOALS 
// 1. The app is able to recommend the user of potential suitable companies base on the user interest
// 2. The user is able to add in notes on a specific job application for interviews he/she has completed such as interview questions or technical questions.
//3. Add in error handling for duplicated submission
//4. update existing application information


//  ------- PSEUDO-CODE SECTION ----------

// setup firebase 
    // initialize and exporting our firebase database into our script.js
    // import firebase modules (getDatabase, ref, (add more as you need)) into our script .js

// Use document.querySelector() to get  JS objects:
    // one JS object that points towards the user job application information that includes: company name, field, skills, url, contact name, key information 

// Use onValue() module to listen to updates to our db and add/move/change existing job applications on the page anytime a change is hear within our database.
    // clear all content on the page whenever it gets updated
    // loop through the snapshot object.
    //create a card that holds the user inputs and display it on the page (updated database)

// add an eventListener to the form to listen for user submission:
    //add a .preventDefault() method to prevent the page form refreshing
    //retrieve the input value of the user submission using the .value property
    // add an eventListener to checkoff or sort out the job applications that have been submitted


