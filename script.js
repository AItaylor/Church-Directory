document.addEventListener('DOMContentLoaded', () => {
    const memberList = document.getElementById('memberList');
    const memberDetails = document.getElementById('memberDetails');
    const searchInput = document.getElementById('searchInput');

    function displayMembers(membersToDisplay) {
        memberList.innerHTML = membersToDisplay.map(member => `
            <div class="member-card" onclick="showMemberDetails(${member.id})">
                <img src="${member.photo}" alt="${member.name}">
                <h3>${member.name}</h3>
            </div>
        `).join('');
    }

    function showMemberDetails(id) {
        const member = members.find(m => m.id === id);
        memberDetails.innerHTML = `
            <h2>${member.name}</h2>
            <img src="${member.photo}" alt="${member.name}">
            <p>Contact: ${member.contact}</p>
            <p>Role: ${member.role}</p>
            <p>Family: ${member.family}</p>
        `;
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMembers = members.filter(member => 
            member.name.toLowerCase().includes(searchTerm) ||
            member.role.toLowerCase().includes(searchTerm) ||
            member.family.toLowerCase().includes(searchTerm)
        );
        displayMembers(filteredMembers);
    });

    displayMembers(members);
});

function showMemberDetails(id) {
    const member = members.find(m => m.id === id);
    const memberDetails = document.getElementById('memberDetails');
    memberDetails.innerHTML = `
        <h2>${member.name}</h2>
        <img src="${member.photo}" alt="${member.name}">
        <p>Contact: ${member.contact}</p>
        <p>Role: ${member.role}</p>
        <p>Family: ${member.family}</p>
    `;
}
