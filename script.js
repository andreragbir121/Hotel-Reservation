const rooms = [
    { type: "Basic", totalRooms: 12, price: 800 },
    { type: "Deluxe", totalRooms: 7, price: 1200 },
    { type: "Penthouse", totalRooms: 1, price: 2000 }
];
let bookings = [];

function menu() {
    showSection('main-menu');
}
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    
    if (sectionId === 'checkin') {
        document.getElementById('roomOptions').innerHTML = rooms.map((room, index) =>
            `<div>
                <input type="radio" name="roomChoice" value="${index}">
                ${room.type} - $${room.price} - Available: ${room.totalRooms}
            </div>`
        )
    }
    
    if (sectionId === 'bookedRooms') {
        const bookingsListElement = document.getElementById('bookingsList');
        
        if (bookings.length > 0) {
            bookingsListElement.innerHTML = bookings.map((booking, index) =>
                `<p>${index + 1}. Name: <strong>${booking.name}</strong> - Room Type: <strong>${booking.roomType}</strong> - Check-in Date: <strong>${booking.checkinDate.toLocaleDateString()}</strong></p>`
        );
    } else {
        bookingsListElement.innerHTML = '<p>No bookings yet.</p>';
    }
}
}

function CheckIn() {
    let guestName = document.getElementById('guestName').value;
    let roomChoice = document.querySelector('input[name="roomChoice"]:checked');

    if (!guestName || !roomChoice) {
        alert('Please enter your name and select a room.');
        return;
    }

    let selectedRoom = rooms[roomChoice.value];
    if (selectedRoom.totalRooms <= 0) {
        alert(`Sorry, no ${selectedRoom.type} rooms available.`);
        return;
    }

    bookings.push({
        name: guestName,
        roomType: selectedRoom.type,
        checkinDate: new Date()
    });

    selectedRoom.totalRooms--;
    alert(`Thank you ${guestName}, for choosing BookIt, your ${selectedRoom.type} room is now booked.\n Enjoy your stay with us`);
    goBack();
}

function checkout() {
    let guestName = document.getElementById('checkoutName').value;
    let bookingIndex = bookings.findIndex(booking => booking.name.toLowerCase() === guestName.toLowerCase());

    if (bookingIndex !== -1) {
        let booking = bookings[bookingIndex];
        let checkoutDate = new Date();
        let diffDays = Math.ceil((checkoutDate - booking.checkinDate) / (1000 * 60 * 60 * 24));
        if (diffDays < 1) diffDays = 1;

        let room = rooms.find(room => room.type === booking.roomType);
        let totalCost = diffDays * room.price;

        bookings.splice(bookingIndex, 1);
        room.totalRooms++;

        alert(`Checkout completed,\n Thank you ${guestName} for staying with us for ${diffDays} day(s), your total cost is $${totalCost}`);
        menu();
    } else {
        alert('No booked rooms found for this person.');
    }
}

function exit() {
    alert('Thank you for using BookIt');
    menu();
}