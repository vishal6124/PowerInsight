// Data for the horizontal bar chart
const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Months
    datasets: [{
      label: 'Users Units Consumed',
      data: [150, 120, 180, 200, 170], // Users Units Consumed for each month
      backgroundColor: 'rgba(255, 99, 132, 0.8)', // Color for Users Units Consumed
      borderWidth: 1
    },
    {
      label: 'Average Unit Consumption',
      data: [100, 110, 105, 115, 95], // Average Unit Consumption for each month
      backgroundColor: 'rgba(54, 162, 235, 0.8)', // Color for Average Unit Consumption
      borderWidth: 1
    }]
  };

  // Configuration for the horizontal bar chart
  const config = {
    type: 'horizontalBar', // Change type to 'horizontalBar'
    data: barData,
    options: {
      scales: {
        x: {
          stacked: true, // Stack bars horizontally
          title: {
            display: true,
            text: 'Months'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Units'
          }
        }
      }
    }
  };

  // Create the horizontal bar chart
  var myBarChart = new Chart(
    document.getElementById('horizontalBarChart'),
    config
  );