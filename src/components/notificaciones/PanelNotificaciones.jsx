import React, { useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import './PanelNotificaciones.css';

// Array de objetos que representan las notificaciones, cada uno con un id, icono, etiqueta, fecha, color y una propiedad opcional para indicar si el icono es un emoji.
const notifications = [
  { id: 1, icon: 'img', label: 'Dr sultads Send you Photo', date: '29 July 2020 - 02:26 PM', color: '#9CA3AF' },
  { id: 2, icon: 'KG', label: 'Resport created successfully', date: '29 July 2020 - 02:26 PM', color: '#6366F1' },
  { id: 3, icon: '🏠', label: 'Reminder : Treatment Time!', date: '29 July 2020 - 02:26 PM', color: '#10B981', isEmoji: true },
  { id: 4, icon: 'img', label: 'Dr sultads Send you Photo', date: '20 July 2020 - 02:26 PM', color: '#9CA3AF' },
  { id: 5, icon: 'KG', label: 'Resport created successfully', date: '29 July 2020 - 02:26 PM', color: '#EF4444' },
];


/**
 * Componente que representa el panel de notificaciones, el cual muestra una lista de notificaciones con su icono, etiqueta y fecha.
 * El componente utiliza un array de objetos para representar las notificaciones, y cada notificación se renderiza con su icono, etiqueta y fecha.
 * El componente también utiliza estilos CSS para dar formato a las notificaciones y diferenciar entre ellas mediante colores.
 * 
 * @returns Devuelve el Panel derecho de notificaciones.
 * 
 * @author Alejandro De la Huerga.  
 * @since 23/03/2026
 * @version 1.0.0
 */

export default function PanelNotificaciones() {
  // Se obtiene la función closeAll del contexto de la aplicación para cerrar el panel de notificaciones al hacer clic fuera de él.
  const { closeAll } = useApp();
  const panelRef = useRef(null);
  
  /**
   * useEffect que agrega un event listener para detectar clics fuera del panel de notificaciones. 
   * Si se detecta un clic fuera del panel, se llama a la función closeAll para cerrar el panel.
   * El event listener se limpia al desmontar el componente para evitar fugas de memoria.
   * 
   * @dependencies closeAll: La función closeAll del contexto de la aplicación, que se utiliza para cerrar el panel de notificaciones cuando se hace clic fuera de él.
   * 
   */
  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        if (!e.target.closest('.icon-btn')) closeAll();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeAll]);

  /**
   * Renderiza el panel de notificaciones, que consiste en un contenedor principal con una lista de notificaciones y un botón para ver todas las notificaciones.
   * Cada notificación se muestra con un icono (que puede ser una imagen o un emoji), una etiqueta y una fecha. 
   * El botón "See all notifications" incluye un ícono de flecha para indicar que se pueden ver más notificaciones.
   */
  return (
    <div className="notif-panel" ref={panelRef}>
      <div className="notif-list">
        {notifications.map((n) => (
          <div key={n.id} className="notif-item">
            <div className="notif-avatar" style={{ background: n.isEmoji ? '#D1FAE5' : n.color }}>
              {n.isEmoji ? n.icon : (
                <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>
                  {n.icon === 'img' ? 'IMG' : n.icon}
                </span>
              )}
            </div>
            <div className="notif-body">
              <p className="notif-label">{n.label}</p>
              <span className="notif-date">{n.date}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="notif-see-all">
        See all notifications
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </button>
    </div>
  );
}

