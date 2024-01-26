document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', function () {
        // Implement logout functionality here
        alert('Logout button clicked.');
    });

    const visitHistoryData = [
        { date: '2022-01-15', department: 'Cardiology', doctor: 'Dr. Smith' },
        { date: '2022-02-20', department: 'Orthopedics', doctor: 'Dr. Johnson' },
        { date: '2022-03-10', department: 'Dermatology', doctor: 'Dr. Williams' },
        { date: '2023-05-18', department: 'Neurology', doctor: 'Dr. Davis' },
        { date: '2023-08-22', department: 'Gastroenterology', doctor: 'Dr. Miller' },
        // Add more visit history data as needed
    ];

    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    const visitTableBody = document.querySelector('#visit-history-table tbody');

    // Initialize table with all visits
    displayVisits(visitHistoryData);

    function displayVisits(visits) {
        visitTableBody.innerHTML = ''; // Clear existing rows

        visits.forEach(visit => {
            const row = visitTableBody.insertRow();
            row.insertCell().textContent = visit.date;
            row.insertCell().textContent = visit.department;
            row.insertCell().textContent = visit.doctor;
        });
    }

    function filterVisits() {
        const selectedMonth = monthSelect.value;
        const selectedYear = yearSelect.value;

        if (selectedMonth === 'all' && selectedYear === 'all') {
            // Display all visits if no filter selected
            displayVisits(visitHistoryData);
        } else {
            // Filter visits based on selected month and year
            const filteredVisits = visitHistoryData.filter(visit => {
                const visitDate = new Date(visit.date);
                const visitMonth = (visitDate.getMonth() + 1).toString().padStart(2, '0');
                const visitYear = visitDate.getFullYear().toString();

                return (selectedMonth === 'all' || visitMonth === selectedMonth) &&
                       (selectedYear === 'all' || visitYear === selectedYear);
            });

            displayVisits(filteredVisits);
        }
    }

});
