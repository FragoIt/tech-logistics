import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrdersChart = () => {
  const ordersData = [
    { name: 'Entregados', value: 156, color: '#10b981' },
    { name: 'En Proceso', value: 43, color: '#f59e0b' },
    { name: 'Pendientes', value: 28, color: '#3b82f6' },
    { name: 'Cancelados', value: 12, color: '#ef4444' }
  ];

  const total = ordersData.reduce((sum, item) => sum + item.value, 0);

  const data = {
    labels: ordersData.map(item => item.name),
    datasets: [
      {
        data: ordersData.map(item => item.value),
        backgroundColor: ordersData.map(item => item.color),
        borderColor: ordersData.map(item => item.color),
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 13,
            family: "'Inter', sans-serif",
          },
          generateLabels: function(chart) {
            const data = chart.data;
            return data.labels.map((label, index) => {
              const value = data.datasets[0].data[index];
              const percentage = ((value / total) * 100).toFixed(0);
              return {
                text: `${label}: ${value} (${percentage}%)`,
                fillStyle: data.datasets[0].backgroundColor[index],
                strokeStyle: data.datasets[0].borderColor[index],
                pointStyle: 'circle',
                hidden: false,
                index: index
              };
            });
          }
        },
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
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed} pedidos (${percentage}%)`;
          }
        }
      },
    },
    cutout: '60%',
  };

  return (
    <div className="analytics-card">
      <div className="card-header">
        <h3>📦 Estado de Pedidos</h3>
        <div className="card-stats">
          <span className="stat-item">
            <strong>{total} pedidos totales</strong>
          </span>
          <span className="stat-item success">
            {((ordersData[0].value / total) * 100).toFixed(0)}% completados
          </span>
        </div>
      </div>
      
      <div className="pie-chart-container">
        <div style={{ height: '300px', padding: '1rem' }}>
          <Doughnut data={data} options={options} />
        </div>
        
        <div className="orders-summary">
          {ordersData.map((item, index) => (
            <div key={index} className="summary-item">
              <div 
                className="summary-color" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="summary-label">{item.name}</span>
              <span className="summary-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersChart;