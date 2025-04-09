// Function to render team members to the page
function renderTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    
    // Clear existing content
    teamGrid.innerHTML = '';
    
    // Add each team member to the grid
    teamMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member';
        
        memberElement.innerHTML = `
            <img src="images/team/${member.image}" alt="Photo of ${member.name}">
            <h3>${member.name}</h3>
            <p>${member.title}</p>
            <div class="member-bio">
                <p>${member.bio || "Team member at Thrasher & Chambers Wealth Management."}</p>
            </div>
        `;
        
        teamGrid.appendChild(memberElement);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderTeamMembers);