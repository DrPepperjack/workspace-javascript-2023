// Hotel Registrations ----- Store in an object
var test = {
    hotelname: "Hotel California (guitar riff plays in distance)",
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
