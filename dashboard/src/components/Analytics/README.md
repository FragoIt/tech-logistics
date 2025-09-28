# 📊 Dashboard Analytics Components

Este directorio contiene componentes de análisis de datos en tiempo real para el panel de administración.

## 🚀 Componentes Disponibles

### 1. **SalesChart** 📈

- **Función**: Gráfico de líneas mostrando ventas semanales
- **Datos**: Ventas en pesos colombianos y número de pedidos
- **Actualización**: Datos estáticos con formato de moneda COP
- **Visual**: Líneas azul (ventas) y verde (pedidos)

### 2. **ProductsChart** 🏆

- **Función**: Gráfico de barras con productos más vendidos
- **Datos**: Top 6 productos con unidades vendidas e ingresos
- **Visual**: Barras duales mostrando cantidad y valor monetario
- **Responsive**: Se adapta a diferentes tamaños de pantalla

### 3. **OrdersChart** 📦

- **Función**: Gráfico circular (pie chart) con estados de pedidos
- **Datos**: Entregados, En Proceso, Pendientes, Cancelados
- **Visual**: Colores intuitivos por estado
- **Detalles**: Porcentajes y resumen numérico

### 4. **TrafficChart** 🌐

- **Función**: Gráfico de área con tráfico del sitio web
- **Datos**: Visitantes y páginas vistas por franjas horarias
- **Actualización**: **TIEMPO REAL** - se actualiza cada 5 segundos
- **Visual**: Áreas azul y verde con gradientes

### 5. **RealtimeStats** ⚡

- **Función**: Métricas clave actualizadas en tiempo real
- **Datos**: Usuarios online, ventas diarias, pedidos nuevos, conversión
- **Actualización**: **TIEMPO REAL** - se actualiza cada 3 segundos
- **Extras**: Insights rápidos y indicador de "EN VIVO"

## 🎨 Características Técnicas

### Librerías Utilizadas

- **Recharts**: Gráficos responsivos y modernos
- **Chart.js + React-ChartJS-2**: Alternativa para gráficos complejos
- **CSS personalizado**: Estilos modernos con gradientes y animaciones

### Datos Mock Realistas

- **Precios**: Formato peso colombiano (COP)
- **Productos**: Nike, Adidas, Converse, New Balance, etc.
- **Métricas**: Basadas en un e-commerce real de calzado

### Funcionalidades en Tiempo Real

```javascript
// Ejemplo de actualización automática
useEffect(() => {
  const interval = setInterval(() => {
    setStats(prevStats => ({...})); // Actualiza datos
  }, 3000); // Cada 3 segundos

  return () => clearInterval(interval);
}, []);
```

### Responsive Design

- **Desktop**: Layout completo con todos los gráficos
- **Tablet**: Grid adaptativo 2x2
- **Móvil**: Stack vertical con componentes optimizados

## 🔧 Implementación

### Instalación de Dependencias

```bash
npm install recharts chart.js react-chartjs-2
```

### Importación en Componentes

```javascript
import { SalesChart, RealtimeStats } from "../Analytics";
import "../Analytics/analytics.css";
```

### Uso en JSX

```javascript
<div className="charts-container">
  <RealtimeStats />
  <div className="charts-row">
    <SalesChart />
    <TrafficChart />
  </div>
</div>
```

## 📋 Para Fines de Demostración

### ✅ **Evidencia de Funcionalidad Completa:**

1. **Gráficos Profesionales**: Visualización de datos empresariales
2. **Tiempo Real**: Componentes que se actualizan automáticamente
3. **Responsive**: Funciona en desktop, tablet y móvil
4. **Datos Realistas**: Métricas coherentes con un negocio real
5. **UX Moderna**: Interfaz limpia y profesional

### 🎯 **Casos de Uso Demostrados:**

- Panel de control ejecutivo
- Monitoreo de KPIs en tiempo real
- Análisis de ventas y productos
- Seguimiento de tráfico web
- Dashboard operativo completo

### 💡 **Tecnologías Evidenciadas:**

- React Hooks (useState, useEffect)
- Gestión de estado en tiempo real
- Librerías de visualización de datos
- CSS Grid y Flexbox
- Integración de componentes modulares
- Responsive web design

---

**💯 Resultado**: Dashboard profesional con análisis de datos en tiempo real, perfecto para demostrar capacidades técnicas completas.
