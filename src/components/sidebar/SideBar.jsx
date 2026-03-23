import React,{useState} from 'react';
import './SideBar.css';
import {useApp} from '../../context/AppContext';

// Array de objetos que representan los elementos del menú del sidebar, cada uno con un nombre y un icono svg.
const menuItems = [ 
    {
    id: 'proyectos',
    nombre: 'Proyectos',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="8" height="18" rx="2"/>
        <rect x="14" y="3" width="8" height="10" rx="2"/>
        <rect x="14" y="17" width="8" height="4" rx="1"/>
      </svg>
    ),
  },
  {
    id: 'documentos',
    nombre: 'Documentos',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 'tikets',
    nombre: 'Tikets',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11H3l3-3M3 11l3 3M21 13h-6l3 3M15 13l3-3"/>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
      </svg>
    ),
  },
  {
    id: 'guias',
    nombre: 'Guias ayuda',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="9" y1="7" x2="15" y2="7"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
        <line x1="9" y1="15" x2="12" y2="15"/>
      </svg>
    ),
  },
  {
    id: 'qtienda',
    nombre: 'Qtienda',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
];

/**
 * Componente SideBar.
 * 
 * @returns El componente SideBar, el cual representa la barra lateral izquierda de la aplicación.
 * @author Alejandro De la Huerga.
 * @since 23/03/2026
 * @version 1.0.0
 */

export default function SideBar() {
    // Aqui se obtiene el estado del sidebar y la función para cambiar la página activa desde el contexto de la aplicación.
    const { sidebarOpen, setActivePage } = useApp();
    const [activeItem, setActiveItem] = useState(null);

    /**
     * Función que se ejecuta al hacer clic en un elemento del menú, estableciendo el elemento activo 
     * y cambiando la página activa en el contexto de la aplicación.
     */ 
    const handleClick = (item) => {
        setActiveItem(item.id);
        setActivePage(item.label);
    };

    return (
        /**
         * Creamos un elemento <aside> que representa la barra lateral, con una clase que depende del estado de apertura del sidebar.
         * Dentro del sidebar, si está abierto, se muestra un botón de soporte. Luego se renderiza una lista de botones para cada elemento del menú,
         * donde cada botón muestra el icono y la etiqueta del elemento, y tiene un evento onClick que llama a la función handleClick para actualizar 
         * el estado activo y la página activa.
         */
      <aside className={`sidebar ${sidebarOpen ? "sidebar--open" : "sidebar--collapsed"}`}>
        {sidebarOpen && (
          <div className="sidebar-soporte-btn">
            <button className="soporte-btn">
              <span className="soporte-dots">⠿</span>
              Soporte
              <span className="soporte-dots">⠿</span>
            </button>
          </div>
        )}

        {
        /**
         * Sección de navegación del sidebar, donde se renderizan los botones para cada elemento del menú. 
         * Cada botón muestra el icono y la etiqueta del elemento, y tiene un evento onClick que llama a la función handleClick para actualizar el estado activo 
         * y la página activa en el contexto de la aplicación.    
         */
         }
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button key={item.id} className={`nav-item ${activeItem === item.id ? "nav-item--active" : ""}`} onClick={() => handleClick(item)} title={!sidebarOpen ? item.label : undefined}>
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && (
                <>
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </>
              )}
            </button>
          ))}
        </nav>
      </aside>
    );
}

