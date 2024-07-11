import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesForecastChart = () => {
  const data = {
    labels: ['Right now', '20 days', '40 days', '60 days'],
    datasets: [
      {
        label: 'Sales Forecast',
        data: [200, 250, 100, 50],
        fill: {
          target: 'origin',
          above: 'rgba(255, 99, 132, 0.2)', 
          below: 'rgba(0, 0, 255, 0.2)' 
          
        },
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Sales forecast',
        color: '#ff4500',
        font: {
          size: 20,
        },
        align: 'start'
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          color: 'black',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
        ticks: {
          color: 'black',
          beginAtZero: true,
          stepSize: 50,
        },
        grid: {
          borderColor: 'black',
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesForecastChart;
