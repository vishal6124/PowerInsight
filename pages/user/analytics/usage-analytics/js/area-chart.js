// Generate random data for peak usage across hours
function generateRandomData() {
    const data = [];
    for (let i = 0; i < 24; i++) {
        data.push(Math.floor(Math.random() * 100)); // Random data (peak usage)
    }
    return data;
}

// Data for the area chart
const areaChartData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), // Labels for each hour
    datasets: [{
        data: generateRandomData(), // Random data for peak usage across hours
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red color with opacity
        borderColor: 'rgba(255, 99, 132, 1)', // Red color for border
        borderWidth: 2,
        label: '', // Empty label to remove it from the legend
    }]
};

// Configuration for the area chart
const areaChartConfig = {
    type: 'line',
    data: areaChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Peak Usage Across Hours of the Day'
            }
        }
    }
};
// Create the area chart
const areaChart = new Chart(document.getElementById('areaChart'), areaChartConfig);