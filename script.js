document.addEventListener('DOMContentLoaded', () => {
    const timetable = [
        { time: "5:30 AM", activity: "Wake up" },
        { time: "6:00 AM - 7:00 AM", activity: "Gym" },
        { time: "7:00 AM - 8:00 AM", activity: "Freshen up and Breakfast" },
        { time: "8:00 AM - 8:30 AM", activity: "Prepare for college" },
        { time: "8:30 AM", activity: "Leave for college" },
        { time: "9:00 AM - 3:00 PM", activity: "College" },
        { time: "3:00 PM - 3:40 PM", activity: "Return home and Lunch" },
        { time: "4:00 PM - 5:00 PM", activity: "English speaking practice" },
        { time: "5:00 PM - 5:30 PM", activity: "Break/Relax" },
        { time: "5:30 PM - 7:00 PM", activity: "English speaking coaching" },
        { time: "7:00 PM - 7:40 PM", activity: "Return home and Dinner" },
        { time: "7:40 PM - 8:40 PM", activity: "Java programming" },
        { time: "8:40 PM - 9:40 PM", activity: "React and JavaScript" },
        { time: "9:40 PM - 10:40 PM", activity: "DSA" },
        { time: "10:40 PM - 11:00 PM", activity: "Break/Relax" },
        { time: "11:00 PM - 12:00 AM", activity: "College assignments" },
        { time: "12:00 AM - 12:30 AM", activity: "Wind down and relax" }
    ];

    const timetableDiv = document.getElementById('timetable');
    timetable.forEach(({ time, activity }) => {
        timetableDiv.innerHTML += `
            <div>
                <input type="checkbox" id="${time}" />
                <label for="${time}">
                    <span class="time">${time}</span>
                    <span class="activity">${activity}</span>
                    <input type="number" id="timeSpent-${time}" placeholder="Hours" min="0" step="0.1" />
                    <input type="text" id="delay-${time}" placeholder="Delay (minutes)" />
                </label>
            </div>
        `;
    });
});

// Add Note Function with Time and Different Colors
function addNote() {
    const notesList = document.getElementById('notesList');
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    
    if (noteText === "") return;

    const timestamp = new Date().toLocaleString();

    const noteDiv = document.createElement('div');
    noteDiv.className = 'sticky-note';
    noteDiv.innerHTML = `
        <p>${noteText}</p>
        <small>Added on: ${timestamp}</small>
        <button class="delete-btn" onclick="deleteNote(this)">X</button>
    `;
    notesList.appendChild(noteDiv);

    noteInput.value = ""; // Clear the input field
}

// Delete Note Function
function deleteNote(button) {
    const noteDiv = button.parentElement;
    noteDiv.remove();
}
