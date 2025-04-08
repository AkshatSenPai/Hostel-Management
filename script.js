const hostels = [
    { 
        name: "Zolo Stays", 
        location: "Knowledge Park, Alpha II", 
        amenities: "Fully furnished rooms, Wi-Fi, meals, housekeeping, 24/7 security", 
        rent: "₹8,000 – ₹15,000 per month",
        url: "https://zolostays.com/pgs-in-noida"
        
    },
    { 
        name: "Stanza Living", 
        location: "Knowledge Park, Beta II", 
        amenities: "Meals, housekeeping, laundry, high-speed Wi-Fi, fitness areas", 
        rent: "₹8,000 – ₹18,000 per month",
        url: "https://www.stanzaliving.com" 
    },
    { 
        name: "Your-Space", 
        location: "Near Sharda University, Galgotias University", 
        amenities: "Air-conditioned rooms, study rooms, gym, common lounge, 24/7 security, meals", 
        rent: "₹10,000 – ₹20,000 per month",
        url: "https://www.your-space.in/sharda_university/" 
    },
    { 
        name: "CoHo Living", 
        location: "Knowledge Park, Sector Beta", 
        amenities: "High-speed internet, community lounge, kitchen facilities, cleaning, laundry services", 
        rent: "₹10,000 – ₹18,000 per month",
        url: "" 
    },
    { 
        name: "Nestaway", 
        location: "Knowledge Park, Beta II", 
        amenities: "Furnished rooms, kitchen, housekeeping, Wi-Fi, meals", 
        rent: "₹7,000 – ₹15,000 per month",
        url: "https://www.nestaway.com/greater-noida"
    },
    { 
        name: "PG 99", 
        location: "Knowledge Park III", 
        amenities: "Fully furnished rooms, Wi-Fi, air-conditioning, laundry, housekeeping, meals (optional)", 
        rent: "₹7,500 – ₹14,000 per month" ,
        url: ""
    },
    { 
        name: "Student Homestay", 
        location: "Sector Beta II", 
        amenities: "Wi-Fi, fully furnished rooms, meals, laundry, air-conditioning, 24/7 security, study desks", 
        rent: "₹9,000 – ₹16,000 per month" ,
        url: ""
    },
    { 
        name: "Royal PG for Boys", 
        location: "Knowledge Park II", 
        amenities: "Wi-Fi, meals (veg & non-veg), air-conditioning, laundry services, 24/7 security", 
        rent: "₹6,000 – ₹12,000 per month" ,
        url: "https://www.magicbricks.com/propertyDetail/royal-pg-sector-alpha-2-in-greater-noida&pgid=4d42333030353031677261646532"
    },
    { 
        name: "The Student Inn", 
        location: "Alpha I, near Galgotias University", 
        amenities: "Wi-Fi, 24/7 security, meals, housekeeping, fully furnished rooms", 
        rent: "₹7,000 – ₹13,000 per month" ,
        url: ""
    },
    { 
        name: "Lotus PG", 
        location: "Knowledge Park III", 
        amenities: "Meals, Wi-Fi, air-conditioning, study tables, laundry, 24/7 security", 
        rent: "₹7,500 – ₹12,500 per month" ,
        url: "https://www.justdial.com/Greater-Noida/Lotus-Boys-And-Girls-Hostel-Near-gl-Bajaj-Knowledge-Park-3-Greater-Noida/011PXX11-XX11-160425170200-W9V9_BZDET"
    },
    { 
        name: "Bunkmates PG", 
        location: "Pari Chowk", 
        amenities: "Wi-Fi, community lounge, shared kitchen, air-conditioning, housekeeping, gaming zones", 
        rent: "₹10,000 – ₹18,000 per month" ,
        url: ""
    },
    { 
        name: "Ananda PG for Girls", 
        location: "Knowledge Park V", 
        amenities: "Wi-Fi, meals, laundry, housekeeping, gym access, 24/7 security", 
        rent: "₹8,000 – ₹14,000 per month" ,
        url: "http://www.anandamhostels.com"
        
    },
    { 
        name: "City Boys PG", 
        location: "Alpha II", 
        amenities: "Wi-Fi, study tables, air-conditioning, laundry, meals, common lounge", 
        rent: "₹6,500 – ₹13,000 per month" 
    },
    { 
        name: "Galaxy PG", 
        location: "Knowledge Park II", 
        amenities: "Air-conditioned rooms, Wi-Fi, meals, laundry, parking space, security", 
        rent: "₹8,000 – ₹15,000 per month" 
    },
    { 
        name: "Unique PG", 
        location: "Pari Chowk", 
        amenities: "Fully furnished rooms, high-speed Wi-Fi, meals, laundry, CCTV security, housekeeping", 
        rent: "₹7,500 – ₹13,500 per month" 
    },
    { 
        name: "Amigo PG", 
        location: "Greater Noida, near Sharda University", 
        amenities: "Housekeeping, meals, air-conditioning (premium rooms), 24/7 security, power backup", 
        rent: "₹6,000 – ₹12,000 per month for shared rooms" 
    },
    { 
        name: "The Hive Hostels", 
        location: "Knowledge Park III, near Sharda University", 
        amenities: "Meals, housekeeping, laundry, clean rooms, Wi-Fi, recreational areas, doctor-on-call", 
        rent: "₹13,000+ per month" 
    },
    { 
        name: "KCC Hostels", 
        location: "Knowledge Park III", 
        amenities: "Wi-Fi, meals, air-conditioning, CCTV security, gym, 24/7 power backup", 
        rent: "₹7,000 – ₹12,000 per month" 
    },
    { 
        name: "APJ Abdul Kalam PG for Boys", 
        location: "Knowledge Park III", 
        amenities: "Meals, Wi-Fi, laundry, 24/7 security, housekeeping", 
        rent: "₹10,000 – ₹14,000 per month" 
    },
    { 
        name: "The Millennium PG", 
        location: "Knowledge Park IV", 
        amenities: "Wi-Fi, laundry, meals, air-conditioning, gym", 
        rent: "₹8,000 – ₹15,000 per month" 
    },
    { 
        name: "Rama PG", 
        location: "Knowledge Park I", 
        amenities: "Meals, Wi-Fi, air-conditioning, 24/7 security", 
        rent: "₹7,000 – ₹12,000 per month" 
    },
    { 
        name: "Saraswati Niwas", 
        location: "Knowledge Park III", 
        amenities: "Wi-Fi, laundry, meals, security, power backup", 
        rent: "₹8,000 – ₹12,000 per month" 
    },
    { 
        name: "Fortune by Hive", 
        location: "Knowledge Park III, near Galgotias University", 
        amenities: "Meals, Wi-Fi, laundry, housekeeping, bicycle-on-demand, doctor-on-call", 
        rent: "₹13,000 – ₹20,000 per month" 
    },
    { 
        name: "St. Thomas Girls Hostel", 
        location: "Knowledge Park III", 
        amenities: "Meals, laundry, Wi-Fi, gym, 24/7 security", 
        rent: "₹9,000 – ₹16,000 per month" 
    },
    { 
        name: "Casa Bella PG", 
        location: "Knowledge Park III", 
        amenities: "Wi-Fi, meals, housekeeping, laundry, gym access, 24/7 security", 
        rent: "₹8,000 – ₹16,000 per month" 
    },
    { 
        name: "Kalam Cottage II", 
        location: "Knowledge Park III, near Galgotias University", 
        amenities: "Wi-Fi, meals, air-conditioning, 24/7 security, laundry", 
        rent: "₹10,000 – ₹15,000 per month" 
    },
    { 
        name: "Annapurna Hostels", 
        location: "Near Sharda University", 
        amenities: "Meals, Wi-Fi, laundry, air-conditioning, security", 
        rent: "₹10,000 – ₹14,000 per month" 
    },
    { 
        name: "Parth PG", 
        location: "Knowledge Park III", 
        amenities: "Wi-Fi, meals, housekeeping, 24/7 security, laundry", 
        rent: "₹7,000 – ₹12,000 per month" 
    }
    // Add more hostels from the dataset here
];

// Load hostel data into the page
window.onload = function() {
    const hostelList = document.getElementById('hostelList');
    hostels.forEach(hostel => {
        const hostelItem = document.createElement('div');
        hostelItem.classList.add('hostel-item');
        hostelItem.innerHTML = `
            <h3>${hostel.name}</h3>
            <p>Location: ${hostel.location}</p>
            <p>Amenities: ${hostel.amenities}</p>
            <p>Rent: ${hostel.rent}</p>
        `;
        hostelList.appendChild(hostelItem);
    });

    // Subscription modal pop-up
const subscribeButton = document.querySelector('.subscribe button');
const modal = document.getElementById('subscribeModal');
const closeModal = document.querySelector('.close');

subscribeButton.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

};

// Search filter
function filterHostels() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const hostelItems = document.querySelectorAll('.hostel-item');
    
    hostelItems.forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        const location = item.querySelector('p').textContent.toLowerCase();
        
        if (name.includes(searchQuery) || location.includes(searchQuery)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const fullContent = document.createElement('p');
        fullContent.textContent = 'Here is the extended blog content. It provides in-depth information about the topic...';
        this.parentElement.appendChild(fullContent);
        this.style.display = 'none';  // Hide the "Read More" link after expanding
    });
});

window.onload = function() {
    const hostelList = document.getElementById('hostelList');
    hostels.forEach(hostel => {
        const hostelItem = document.createElement('a');  // Anchor element for clickable hostel card
        hostelItem.href = hostel.url;  // Use the URL from the hostel data
        hostelItem.target = "_blank";  // Opens in a new tab
        hostelItem.classList.add('hostel-item');
        hostelItem.innerHTML = `
            <h3>${hostel.name}</h3>
            <p>Location: ${hostel.location}</p>
            <p>Amenities: ${hostel.amenities}</p>
            <p>Rent: ${hostel.rent}</p>
        `;
        hostelList.appendChild(hostelItem);
    });
};

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseover', function () {
        updateStarSelection(this.getAttribute('data-value'));
    });
    star.addEventListener('mouseleave', function () {
        updateStarSelection(document.getElementById('rating').value);
    });
});

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let formData = new FormData(this);

    fetch('/submit-feedback', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your feedback!');
        document.getElementById('feedbackForm').reset();
        updateStarSelection(0); // Reset stars
    })
    .catch(error => alert('There was an error submitting your feedback.'));
});
