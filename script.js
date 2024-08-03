
 // Function to display members
function displayMembers(membersToShow) {
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = ''; // Clear existing members
    
    membersToShow.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="${member.photo}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        memberList.appendChild(memberCard);
    });
}

// Function to filter members based on search
function searchMembers() {
    if (!members || members.length === 0) {
        console.error('Members data is not available');
        return;
    }

    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredMembers = members.filter(member => 
        (member.name && member.name.toLowerCase().includes(searchTerm)) ||
        (member.role && member.role.toLowerCase().includes(searchTerm))
    );
    
    displayMembers(filteredMembers);
}

// Set up event listeners
function initialize() {
    if (members && members.length > 0) {
        displayMembers(members); // Display all members initially
        
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', searchMembers);
    } else {
        console.error('Members data is not available');
    }
}

// Call initialize when the page loads
window.onload = initialize;