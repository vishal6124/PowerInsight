// Data for the pie chart with user types
const pie_data_users = {
    labels: ["Residential", "Commercial", "Industrial"],
    datasets: [{
        data: [300, 150, 200], // Sample data for each user type
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)', // Red for Residential
            'rgba(54, 162, 235, 0.8)', // Blue for Commercial
            'rgba(255, 206, 86, 0.8)' // Yellow for Industrial
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration for the pie chart with user types
const pie_config_users = {
    type: 'pie',
    data: pie_data_users,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Pie Chart with User Types'
            },
        },
        cutout: 50 // Adjust the cutout size here (in percentage)
    }
};

// Create the pie chart
const myPieChart = new Chart(document.getElementById('myPieChart'), pie_config_users);