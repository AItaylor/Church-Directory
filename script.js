
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
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(searchTerm) ||
        member.role.toLowerCase().includes(searchTerm)
    );
    
    displayMembers(filteredMembers);
}

// Set up event listeners
function initialize() {
    displayMembers(members); // Display all members initially
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchMembers);
}

// Call initialize when the page loads
window.onload = initialize;