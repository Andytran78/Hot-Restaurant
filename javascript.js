
var resInput = [];

$("#submitres").on("click", function() {
	var inputName = $("#resName").val().trim();
	resInput.push(inputName);
	var inputNumber = $("#resNumber").val().trim();
	resInput.push(inputNumber);
	var inputEmail = $("#resEmail").val().trim();
	resInput.push(inputEmail);
	var inputID = $("#resID").val().trim();
	resInput.push(inputID);
});


	$(".friendname").text(friendsArray[friend].name);
	$("#friendphoto").attr("src", friendsArray[friend].photo);