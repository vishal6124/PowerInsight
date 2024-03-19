// Data for the pie chart
const pie_data = {
    labels: ["Anekal", "Bengaluru East", "Bengaluru North", "Bengaluru South", "Yelahanka"],
    datasets: [{
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

// Configuration for the pie chart
const pie_config = {
    type: 'pie',
    data: pie_data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Pie Chart with Cutout Section'
            },
        },
        cutout: 50 // Adjust the cutout size here (in percentage)
    }
};

// Create the pie chart
const myPieChart = new Chart(document.getElementById('myPieChart'), pie_config);