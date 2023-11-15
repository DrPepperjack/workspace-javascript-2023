// Hotel Registrations ----- Store in an object
var test = {
    hotelname: "Hotel California (guitar riff plays in the far distance)",
    room: 672,
    booked:325,
    display: function() {
        return this.hotelname;
    }
};

// Access the property / change the property
console.log(test.hotelname);
console.log(test.booked);
test.booked = 453;

// Start the Hotel Reservations Program
var guestgroup = [];
function reservation() {
// Get the values from the form. and put it in an object
    // Complete the practive below:
    var guest = {
        name: $('#name').val(),
        numofGuest: $('#num').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        room: $('#room').val(),
        
        //Completed
    };
    guestgroup.push(guest);
    console.log(guest);
    alert("Thank you for checking into Hotel California, now you may never leave!")
}

function displayList() {
    $('#guestlist').html("");
    $('#guestlist').append("<table>");
    for(var i in guestgroup){
        $("guestlist").append("<tr><td>" + guestgroup[i].name+"</td>");
        $("#guestlist").append("<td>"+ guestgroup[i].numofGuest+"</td>")
        $("#guestlist").append("<td>"+ guestgroup[i].checkin+"</td>")
        $("#guestlist").append("<td>"+ guestgroup[i].checkout+"</td>")
        $("#guestlist").append("<td>"+ guestgroup[i].room+"</td></tr>")

    }
    $("#guestlist").append("</table");
}

// Register the event handler

$('#submit').click(reservation);
$("#lists").click(displayList);