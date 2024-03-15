const packages = [{
    name: "Adventure Package",
    description: "Exciting adventures in exotic locations",
    price: "$1000",
    image: "https://res.cloudinary.com/dhwydorji/image/upload/v1710464091/adventure_bgmqro.webp"
},
];

window.onload = function() {
    const packageContainer = document.getElementById('packages-container');

    packages.forEach(package => {
        const card = document.createElement('div');
        card.classList.add('package-card');

        card.innerHTML = `
  <img src="${package.image}" alt="${package.name}">
  <h3>${package.name}</h3>
  <p>${package.description}</p>
  <p><strong>Price:</strong> ${package.price}</p>
`;

        packageContainer.appendChild(card);
    });

    // Flight form submission
    const flightForm = document.getElementById('flight-form');
    flightForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const departure = document.getElementById('departure').value;
        const destination = document.getElementById('destination').value;
        const departureDate = document.getElementById('departure-date').value;
        console.log('Flight Booking Details:');
        console.log('Departure City:', departure);
        console.log('Destination City:', destination);
        console.log('Departure Date:', departureDate);
        // Add code to handle flight booking submission
    });

    // Hotel form submission
    const hotelForm = document.getElementById('hotel-form');
    hotelForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const destination = document.getElementById('destination').value;
        const checkInDate = document.getElementById('check-in').value;
        const checkOutDate = document.getElementById('check-out').value;
        console.log('Hotel Booking Details:');
        console.log('Destination:', destination);
        console.log('Check-in Date:', checkInDate);
        console.log('Check-out Date:', checkOutDate);
        // Add code to handle hotel booking submission
    });
};
