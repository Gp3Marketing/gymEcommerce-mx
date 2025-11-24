"use client";

import TrafficChart from "./components/Charts/TrafficChart";
import SalesChart from "./components/Charts/SalesChart";
import StatsCard from "./components/StatsCard";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <StatsCard title="Usuarios activos" value="412" change="+12%" />
      <StatsCard title="Ventas del mes" value="$12,450" change="+8%" />
      <StatsCard title="Productos vendidos" value="264" change="+5%" />

      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Tráfico del sitio</h2>
        <TrafficChart />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Ventas</h2>
        <SalesChart />
      </div>
    </div>
  );
}
