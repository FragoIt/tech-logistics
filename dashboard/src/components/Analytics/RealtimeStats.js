import React, { useState, useEffect } from 'react';

const RealtimeStats = () => {
  const [stats, setStats] = useState({
    onlineUsers: 847,
    dailySales: 15420000,
    newOrders: 23,
    conversionRate: 3.8
  });

  // Simular actualización en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        onlineUsers: prevStats.onlineUsers + Math.floor(Math.random() * 20) - 10,
        dailySales: prevStats.dailySales + Math.floor(Math.random() * 500000) - 250000,
        newOrders: Math.max(0, prevStats.newOrders + Math.floor(Math.random() * 6) - 3),
        conversionRate: Math.max(0, prevStats.conversionRate + (Math.random() * 0.4 - 0.2)).toFixed(1)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="realtime-stats">
      <div className="stats-header">
        <h3>📊 Estadísticas en Tiempo Real</h3>
        <div className="live-indicator">
          <div className="pulse-dot"></div>
          <span>En vivo</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card online-users">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.onlineUsers.toLocaleString()}</div>
            <div className="stat-label">Usuarios Online</div>
            <div className="stat-change positive">
              <i className="fas fa-arrow-up"></i>
              +12 últimos 5 min
            </div>
          </div>
        </div>

        <div className="stat-card daily-sales">
          <div className="stat-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="stat-content">
            <div className="stat-value">{formatCurrency(stats.dailySales)}</div>
            <div className="stat-label">Ventas del Día</div>
            <div className="stat-change positive">
              <i className="fas fa-arrow-up"></i>
              +5.2% vs ayer
            </div>
          </div>
        </div>

        <div className="stat-card new-orders">
          <div className="stat-icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.newOrders}</div>
            <div className="stat-label">Nuevos Pedidos</div>
            <div className="stat-change neutral">
              <i className="fas fa-clock"></i>
              Última hora
            </div>
          </div>
        </div>

        <div className="stat-card conversion-rate">
          <div className="stat-icon">
            <i className="fas fa-percentage"></i>
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.conversionRate}%</div>
            <div className="stat-label">Tasa de Conversión</div>
            <div className="stat-change positive">
              <i className="fas fa-arrow-up"></i>
              +0.3% esta semana
            </div>
          </div>
        </div>
      </div>

      <div className="quick-insights">
        <h4>🔍 Insights Rápidos</h4>
        <div className="insights-list">
          <div className="insight-item">
            <i className="fas fa-fire"></i>
            <span>Nike Air Jordan 1 es el más vendido hoy (+23 unidades)</span>
          </div>
          <div className="insight-item">
            <i className="fas fa-mobile-alt"></i>
            <span>67% de las compras son desde móvil</span>
          </div>
          <div className="insight-item">
            <i className="fas fa-clock"></i>
            <span>Pico de ventas entre 2-4 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeStats;