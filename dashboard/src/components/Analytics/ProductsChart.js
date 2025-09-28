import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProductsChart = () => {
  const data = {
    labels: ['Nike Jordan', 'Adidas Boost', 'Converse', 'New Balance', 'Vans Skool', 'Puma Suede'],
    datasets: [
      {
        label: 'Unidades Vendidas',
        data: [45, 38, 52, 29, 41, 33],
        backgroundColor: 'rgba(139, 92, 246, 0.8)',
        borderColor: '#8b5cf6',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
        yAxisID: 'y',
      },
      {
        label: 'Ingresos (Millones COP)',
        data: [11.25, 12.16, 7.8, 8.12, 6.77, 5.94],
        backgroundColor: 'rgba(6, 182, 212, 0.8)',
        borderColor: '#06b6d4',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 13,
            family: "'Inter', sans-serif",
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1f2937',
        bodyColor: '#374151',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          size: 14,
          weight: 600,
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
        callbacks: {
          label: function(context) {
            if (context.dataset.label.includes('Ingresos')) {
              return context.dataset.label + ': $' + context.parsed.y + 'M COP';
            }
            return context.dataset.label + ': ' + context.parsed.y + ' unidades';
          }
        }
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: '#f3f4f6',
          drawBorder: false,
        },
        ticks: {
          color: '#6b7280',
          font: {
            size: 11,
            family: "'Inter', sans-serif",
          },
          maxRotation: 45,
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: {
          color: '#f3f4f6',
          drawBorder: false,
        },
        ticks: {
          color: '#6b7280',
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
        title: {
          display: true,
          text: 'Unidades',
          color: '#374151',
          font: {
            size: 12,
            weight: 600,
          },
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: '#6b7280',
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          callback: function(value) {
            return '$' + value + 'M';
          }
        },
        title: {
          display: true,
          text: 'Ingresos (M COP)',
          color: '#374151',
          font: {
            size: 12,
            weight: 600,
          },
        },
      },
    },
  };

  return (
    <div className="analytics-card">
      <div className="card-header">
        <h3>🏆 Productos Más Vendidos</h3>
        <div className="card-stats">
          <span className="stat-item">
            <strong>238 unidades vendidas</strong>
          </span>
          <span className="stat-item success">
            Top 6 productos
          </span>
        </div>
      </div>
      
      <div style={{ padding: '1rem', height: '350px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProductsChart;