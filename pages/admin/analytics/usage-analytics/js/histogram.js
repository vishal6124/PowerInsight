// Data for the histogram
const histogram_data = {
    labels: ["Anekal", "Bengaluru East", "Bengaluru North", "Bengaluru South", "Yelahanka"],
    datasets: [{
        label: 'Energy Usage',
        data: [300, 50, 100, 40, 200],
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration for the histogram
const histogram_config = {
    type: 'bar',
    data: histogram_data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Energy Usage by Subdivision'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Create the histogram
const myHistogram = new Chart(document.getElementById('myHistogram'), histogram_config);
