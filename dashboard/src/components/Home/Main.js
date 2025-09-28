import React from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import SaleStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";
import { useSelector } from "react-redux";

// Nuevos componentes de analytics
import SalesChart from "../Analytics/SalesChart";
import ProductsChart from "../Analytics/ProductsChart";
import OrdersChart from "../Analytics/OrdersChart";
import TrafficChart from "../Analytics/TrafficChart";
import RealtimeStats from "../Analytics/RealtimeStats";
import "../Analytics/analytics.css";

const Main = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard Analytics </h2>
          <small className="text-muted">Panel de control con métricas en tiempo real</small>
        </div>

        {/* Top Total - Stats existentes */}
        <TopTotal orders={orders} products={products} />

        {/* Estadísticas en Tiempo Real */}
        <RealtimeStats />

        {/* Gráficos de Analytics */}
        <div className="charts-container">
          {/* Primera fila - Gráfico de ventas y tráfico */}
          <div className="charts-row">
            <SalesChart />
            <TrafficChart />
          </div>

          {/* Segunda fila - Productos y Pedidos */}
          <div className="charts-row">
            <ProductsChart />
            <OrdersChart />
          </div>
        </div>

        {/* Estadísticas Clásicas (comentadas por ahora) */}
        <div className="row" style={{ display: 'none' }}>
          <SaleStatistics />
          <ProductsStatistics />
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default Main;
