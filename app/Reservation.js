//Logic for creating new reservation & pushing to the appropriate array file

var server = require('./server.js');
var tables = require('./tables.js');
var wailist = require('./waitlist.js');

function Reservation(name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
};

function newRes() {
    if (tables.length < 5) {
        var newTable = new Reservation(input[0]);
        tables.push(newTable);
        alert("Congrats! You've successfully booked a table at Hot-Restaurant!");
    } else {
        alert("I'm sorry, there are no more tables available");
        waitlist.push(newTable);
    }
}
module.exports('Reservation');
module.exports('newRes')