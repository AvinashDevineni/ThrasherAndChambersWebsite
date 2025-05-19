initializeInfoMeetings();

function initializeInfoMeetings() {
    const meetings = [
        // EXAMPLE MEETINGS:
        // {
        //     title: "Learn About Tariffs",
        //     date: "5/12/2025",
        //     time: "10:00 AM",
        //     meetingLink: "",
        //     image: "public/meetings/tariffs.jpg"
        // },
        // {
        //     title: "Understanding Trade Agreements",
        //     date: "5/19/2025",
        //     time: "2:00 PM",
        //     meetingLink: "",
        //     image: "public/meetings/trade-agreements.png"
        // }
    ];

    if (meetings.length === 0) {
        const noMeetingsMessage = document.createElement("p");
        noMeetingsMessage.textContent = "No meetings scheduled at this time.";
        document.getElementById("meetings-list").appendChild(noMeetingsMessage);
        return;
    }

    const meetingsList = document.getElementById("meetings-list");
    for (const meeting of meetings) {
        const meetingItem = document.createElement("a");
        meetingItem.classList.add("meeting", "card-hover");
        meetingItem.href = meeting.meetingLink;
        meetingItem.innerHTML = `
            <img src="${meeting.image}" alt="${meeting.title}">
            <div class="meeting-details">
                <h3>${meeting.title}</h3>
                <p>Date: ${meeting.date}</p>
                <p>Time: ${meeting.time}</p>
            </div>
        `;

        meetingsList.appendChild(meetingItem);
    }
}
