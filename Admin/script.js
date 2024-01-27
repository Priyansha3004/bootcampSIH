document.addEventListener('DOMContentLoaded', function () {
    // Initial load of patient details without any filters
    filterPatients();
  
    // Add event listeners for filter button
    const filterButton = document.getElementById('filter-button');
    if (filterButton) {
      filterButton.addEventListener('click', filterPatients);
    }
  });
  
  // JavaScript for filtering patient details
  function filterPatients() {
    const filterDate = document.getElementById('filter-date').value;
    const filterName = document.getElementById('filter-name').value.toLowerCase();
  
    // Get the patient details table
    const tableBody = document.querySelector('.patient-details-container tbody');
  
    // Remove existing rows
    tableBody.innerHTML = '';
  
    // Fetch patient details based on the filter criteria
    const filteredPatients = getFilteredPatients(filterDate, filterName);
  
    // Update the table with filtered patients
    filteredPatients.forEach(patient => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${patient.name}</td>
        <td>${patient.date}</td>
        <td>${patient.status}</td>
        <td>${patient.bedNumber}</td>
        <td><a href="${patient.detailsLink}">View Details</a></td>
      `;
    });
  }
  
  // Example function to fetch patient details (replace with your data source)
  function getFilteredPatients(filterDate, filterName) {
    const allPatients = [
      { name: 'John Doe', date: '10/01/23', status: 'Recovering', bedNumber: '203', detailsLink: 'patient.html' },
      { name: 'Jane Smith', date: '09/15/23', status: 'In Treatment', bedNumber: '205', detailsLink: 'patient_details/jane_smith.html' },
      // Add more patient details as needed
    ];
  
    return allPatients.filter(patient =>
      (filterDate === '' || patient.date === filterDate) &&
      (filterName === '' || patient.name.toLowerCase().includes(filterName))
    );
  }
  