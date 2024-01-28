
        document.addEventListener('DOMContentLoaded', function() {
            const logoutBtn = document.getElementById('logoutBtn');

            logoutBtn.addEventListener('click', function(event) {
                event.preventDefault();
            });
        });

document.addEventListener("DOMContentLoaded", function() {
    var gender = document.querySelector('.patient-profile strong:nth-of-type(3)').nextSibling.nodeValue.trim(); // Extracting gender from the DOM
    var patientImage = document.getElementById('patientImage');

    // Change image source based on gender
    if (gender.toLowerCase() === 'male') {
        patientImage.src = 'male_img.png';
    } else if (gender.toLowerCase() === 'female') {
        patientImage.src = 'female_img.png';
    } else {
        // If gender is not specified or not recognized, you can set a default image or handle it accordingly
        patientImage.src = 'default_img.png';
    }
});

    const sampleVisitHistory = [
        { date: '2023-01-15', department: 'Cardiology', doctor: 'Dr. Smith' },
        { date: '2023-02-10', department: 'Neurology', doctor: 'Dr. Johnson' }
        // Add more sample visit history data as needed
    ];

    function populateVisitHistory(data) {
        const tbody = document.getElementById('visit-history-body');
        tbody.innerHTML = '';

        data.forEach(visit => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${visit.date}</td>
                <td>${visit.department}</td>
                <td>${visit.doctor}</td>
            `;
            tbody.appendChild(row);
        });
    }

    populateVisitHistory(sampleVisitHistory);


    function fetchAndUpdateVisitHistory() {
        // Simulate fetching data from backend (replace with actual AJAX call)
        setTimeout(() => {
            // Replace this with your actual fetched data from the backend
            const fetchedData = [
                { date: '2023-01-20', department: 'Orthopedics', doctor: 'Dr. Brown' },
                { date: '2023-02-05', department: 'Oncology', doctor: 'Dr. White' }
                // Add more fetched visit history data as needed
            ];

            populateVisitHistory(fetchedData);
        }, 2000); // Simulate a delay of 2 seconds for demonstration
    }

    // Call fetchAndUpdateVisitHistory function to get real-time updates
    setInterval(fetchAndUpdateVisitHistory, 5000); // Update every 5 seconds

    // Initialize datepicker
    $(function() {
        $("#datepicker").datepicker({
            dateFormat: 'yy-mm-dd', // Set date format to match your data format
            changeMonth: true,
            changeYear: true
        });
    });

    // Function to filter visit history based on selected date
    function filterVisits() {
        const selectedDate = document.getElementById('datepicker').value;

        // Filter the visit history data based on selected date
        let filteredData = sampleVisitHistory.filter(visit => visit.date === selectedDate);

        populateVisitHistory(filteredData);
    }


    const sampleMedications = [
        { name: 'Aspirin', dosage: '75mg', schedule: 'Once a day' },
        { name: 'Paracetamol', dosage: '500mg', schedule: 'Every 4 hours' }
        // Add more sample medications as needed
    ];

    function populateMedications() {
        // Clear existing medication data
        document.getElementById('medicationBody').innerHTML = '';

        // Populate the table with sample medication data
        sampleMedications.forEach(medication => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${medication.name}</td>
                <td>${medication.dosage}</td>
                <td>${medication.schedule}</td>
            `;
            document.getElementById('medicationBody').appendChild(row);
        });
    }

    // Populate medications initially
    populateMedications();

    // Set interval to update medications every 5 seconds (for demonstration purposes)
    setInterval(populateMedications, 5000);

    const sampleLabReports = [
        { testName: 'Blood Test', date: '05/15/23', result: 'Normal', downloadLink: 'download/blood_test_report.pdf' },
        { testName: 'Urinalysis', date: '06/02/23', result: 'Abnormal', downloadLink: 'download/urinalysis_report.pdf' }

    ];

    function populateLabReports() {
        document.getElementById('labReportsBody').innerHTML = '';

        sampleLabReports.forEach(report => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${report.testName}</td>
                <td>${report.date}</td>
                <td>${report.result}</td>
                <td><a href="${report.downloadLink}" download>Download</a></td>
            `;
            document.getElementById('labReportsBody').appendChild(row);
        });
    }

    populateLabReports();

    setInterval(populateLabReports, 5000);

        function fetchPatientProfiles() {
                const sampleData = [
                { name: "John Doe", age: 45, condition: "Fever" },
                { name: "Jane Smith", age: 30, condition: "Fractured Leg" },
                { name: "Michael Johnson", age: 55, condition: "Heart Attack" }
                
            ];

            document.getElementById('patientProfiles').innerHTML = '';

            sampleData.forEach(patient => {
                const profileDiv = document.createElement('div');
                profileDiv.innerHTML = `
                    <h3>${patient.name}</h3>
                    <p>Age: ${patient.age}</p>
                    <p>Condition: ${patient.condition}</p>
                    <hr>
                `;
                document.getElementById('patientProfiles').appendChild(profileDiv);
            });
        }

        fetchPatientProfiles();

        setInterval(fetchPatientProfiles, 5000);
        
        document.addEventListener('DOMContentLoaded', function() {
          const form = document.getElementById('contactForm');
    
          form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
    
            // Collect form data
            const formData = new FormData(form);
    
            // Send form data to the backend using AJAX
            fetch('/submit-form', {
              method: 'POST',
              body: formData
            })
            .then(response => {
              if (response.ok) {
                return response.json(); // Assuming the server returns JSON data
              } else {
                throw new Error('Network response was not ok.');
              }
            })
            .then(data => {
              // Handle the response from the server
              console.log('Form submission successful:', data);
              // You can update the UI or show a success message here
            })
            .catch(error => {
              console.error('There was a problem with form submission:', error);
              // Handle errors or display error messages
            });
          });
        });