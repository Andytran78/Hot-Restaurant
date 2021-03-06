# Hot-Restaurant

Instructions:

- Today you will be building a Node / Express based web applications for handling reservation requests.
- Your application will be made up of two parts: 1) A front-end set of HTML/CSS/JS pages for entering and viewing data and 2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.
- Spend the time necessary to map this application out. Consider the concepts we've covered in class so far:
 - Servers
 - Routing
 - APIs
 - AJAX (GET and POST Requests)
- You should be referencing the code from the previous Star Wars application.
- Feel encouraged to use the following application as a reference: http://hot-restaurant.herokuapp.com/
- Note: We know this is a hard activity. We know you aren't yet comfortable with Node or Express. But push yourself. The best way to learn is to push through the discomfort and BUILD! Ask for help when you need it. We're here to help you through the process.
- Bonus:
 - If by some miracle you finish early, feel encouraged to work on any one of these additional tasks to take your application to the next level.
   - Add code to your server so that it "counts" every time a person visits any of the pages. Display a running count on the website.
   - Add buttons for "checking off" individuals from the reservation list. Once this happens, the next person on the waitlist should be addd to the main reservation list.
   - Add a button for sending emails to individuals on the wait-list letting them know they have a table ready. You will need to use node-mailer or a similar npm package to make this work. (A hard task, but very cool).
   - Add a button for sending text messages to individuals on the wait-list letting them know they have a table ready. You will need to use the Twilio library to make this work. (A hard task, but very cool).

 Phase I: For this first phase, aim to write out the pieces that will need to be programmed to create the functionality of your application. Try to break it into 6-7 pieces.

   Phase II: For this second phase, aim to complete the following:

	- Backend Team: app
	 - Create a basic Express server.
	 - Your server at this point should do the BARE MINIMUM. (Effectively, it should just say: "Listening at PORT 3000" when the command node server.js is run.)
	- Frontend Team:
	 - Create three HTML files one called home.html, another called tables.html, and another called reserve.html. Use dummy data and create pages similar to the one shown to you on the sample Hot Reservation webpage.
	- All: If you finish early, begin thinking about how the Data, API, and Routes should look.

Phase III: For this third phase, aim to complete the following:
   - Backend Team:
     - Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data
     - Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page (i.e. if a user visits localhost:3000/api/tables they should see a JSON of table data).
     
   - Frontend Team:
     - Temporarily join the backend team. Your task will be to create Express routes that display your HTML pages when a user visits the appropriate page. (i.e. if a user visits localhost:3000/tables... they should be shown the table.html page.)
     - If you finish early begin creating the code necessary to convert your form data into JSON objects.