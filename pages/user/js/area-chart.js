// Data for the chart
const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
        label: "Collected Revenue",
        data: [100, 90, 120, 40, 70],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: true,
    }, {
        label: "Expected Revenue",
        data: [120, 130, 190, 150, 100],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: true,
    }]
};

// Configuration for the chart
const config = {
    type: "line",
    data: data,
    options: {
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Rupees in Lakhs', // Add your unit of measurement here
                    font: {
                        size: 16 // Adjust font size as needed
                    }
                }
            }
        }
    }
};

// Create the chart
const stackedAreaChart = new Chart(document.getElementById("myChart"), config);
