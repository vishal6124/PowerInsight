// Data for the line chart
const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
        label: 'Number of Users',
        data: [100, 120, 130, 150, 160, 180, 200, 220, 240, 260, 280, 300],
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