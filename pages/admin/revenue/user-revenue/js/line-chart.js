// Data for the line chart
const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
        label: 'Revenue',
        data: [5000, 5500, 6000, 9000, 7000, 7500, 12000, 5000, 15000, 9000, 8500, 10000], // Arbitrary revenue values
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
    }]
};
// Configuration for the line chart
const lineChartConfig = {
    type: 'line',
    data: lineChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Number of Users Over 12 Months'
            }
        }
    }
};

// Create the line chart
const lineChart = new Chart(document.getElementById('lineChart'), lineChartConfig);