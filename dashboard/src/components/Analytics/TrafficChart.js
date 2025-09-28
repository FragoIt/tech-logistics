import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const TrafficChart = () => {
  const [trafficData, setTrafficData] = useState({
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    visitors: [120, 85, 420, 650, 890, 560, 280],
    pageViews: [340, 220, 890, 1240, 1680, 1120, 650]
  });

  // Actualización automática cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData(prevData => ({
        ...prevData,
        visitors: prevData.visitors.map(val => Math.max(50, val + Math.floor(Math.random() * 100) - 50)),
        pageViews: prevData.pageViews.map(val => Math.max(100, val + Math.floor(Math.random() * 200) - 100))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: trafficData.labels,
    datasets: [
      {
        label: 'Visitantes',
        data: trafficData.visitors,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Páginas Vistas',
        data: trafficData.pageViews,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
      },
      y: {
        display: true,
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
          text: 'Cantidad',
          color: '#374151',
          font: {
            size: 12,
            weight: 600,
          },
        },
      },
    },
    elements: {
      line: {
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
      },
    },
  };

  return (
    <div className="analytics-card">
      <div className="card-header">
        <h3>🌐 Tráfico del Sitio Web</h3>
        <div className="card-stats">
          <span className="stat-item">
            <strong>Tiempo real</strong>
          </span>
          <span className="stat-item success">
            ↗️ +15% hoy
          </span>
        </div>
      </div>
      
      <div style={{ padding: '1rem', height: '280px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TrafficChart;