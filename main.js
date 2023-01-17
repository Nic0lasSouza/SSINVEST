const ctx = document.getElementById("chart").getContext('2d');

// create a new chart instance
const chartGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out', 'Nov'],
    datasets: [
      {
        label: 'BTC',
        data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
        borderColor: 'red',
        borderWidth: 2
      },
      {

        label: 'ETH',
        data: [31500, 41000, 88800, 26000, 46000, 32698, 50000, 3000, 18656, 24832, 36844],
        borderColor: 'blue',
        borderWidth: 2
      }
      ]
    },
     options: {
      responsive: true
     }
 })
