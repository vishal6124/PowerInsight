// Data for the pie chart
const units_data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
        data: [300, 50, 100, 40, 200, 150, 90, 120, 180, 250, 300, 280],
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(106, 90, 205, 0.8)',
            'rgba(34, 139, 34, 0.8)',
            'rgba(238, 130, 238, 0.8)',
            'rgba(255, 215, 0, 0.8)',
            'rgba(70, 130, 180, 0.8)',
            'rgba(210, 105, 30, 0.8)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(106, 90, 205, 1)',
            'rgba(34, 139, 34, 1)',
            'rgba(238, 130, 238, 1)',
            'rgba(255, 215, 0, 1)',
            'rgba(70, 130, 180, 1)',
            'rgba(210, 105, 30, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration for the pie chart
const units_config = {
    type: 'pie',
    data: units_data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Units Consumption Across 12 Months'
            },
        },
        cutout: 50, // Adjust the cutout size here (in percentage)
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    let label = data.labels[tooltipItem.index];
                    let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return label + ': ' + value + ' units';
                }
            }
        }
    }
};

// Create the pie chart
const myPieChart = new Chart(document.getElementById('myPieChart'), units_config);