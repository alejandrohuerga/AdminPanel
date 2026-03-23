import React from 'react'
import './Dashboard.css'
/**
 * Función que devuelve el componente del dashboard de la aplicación. 
 * Este componente se muestra al hacer clic en el icono de dashboard en la barra de navegación.
 * El dashboard es la página principal de la aplicación donde se pueden mostrar widgets, gráficos y otra información relevante para el usuario.
 * 
 * @returns {JSX.Element} El componente del dashboard.
 * @author Alejandro De la Huerga
 * @version 1.0.0
 * @since 23/03/2026  
 */

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Placeholder — Aquí van los widgets y el contenido */}
      <div className="dashboard-empty">
        <div className="dashboard-empty-icon">📊</div>
        <h2>Bienvenido al Dashboard</h2>
        <p>Selecciona una sección del menú lateral para comenzar.</p>
      </div>
    </div>
  );
}

export default Dashboard