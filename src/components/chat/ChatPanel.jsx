import React, { useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import './ChatPanel.css';

// Datos de ejemplo para contactos de chat (Array de objetos con id, nombre, estado, usuario relacionado, tiempo desde última conexión y letra inicial).
const chatContacts = [
  { id: 1, name: 'Archie Parker', status: 'online', statusUser: 'Kalid', letter: 'A' },
  { id: 2, name: 'Alfie Mason', status: 'offline', statusUser: 'Taherah', timeAgo: '7 mins ago', letter: 'A' },
  { id: 3, name: 'AharlieKane', status: 'online', statusUser: 'Sami', letter: 'A' },
  { id: 4, name: 'Athan Jacoby', status: 'offline', statusUser: 'Nargis', timeAgo: '30 mins ago', letter: 'A' },
  { id: 5, name: 'Bashid Samim', status: 'offline', statusUser: 'Rashid', timeAgo: '50 mins ago', letter: 'B' },
  { id: 6, name: 'Breddie Ronan', status: 'online', statusUser: 'Kalid', letter: 'B' },
  { id: 7, name: 'Ceorge Carson', status: 'offline', statusUser: 'Taherah', timeAgo: '7 mins ago', letter: 'C' },
  { id: 8, name: 'Darry Parker', status: 'online', statusUser: 'Sami', letter: 'D' },
  { id: 9, name: 'Denry Hunter', status: 'offline', statusUser: 'Nargis', timeAgo: '30 mins ago', letter: 'D' },
  { id: 10, name: 'Jack Ronan', status: 'offline', statusUser: 'Rashid', timeAgo: '50 mins ago', letter: 'J' },
  { id: 11, name: 'Jacob Tucker', status: 'online', statusUser: 'Kalid', letter: 'J' },
  { id: 12, name: 'James Logan', status: 'offline', statusUser: 'Taherah', timeAgo: '7 mins ago', letter: 'J' },
  { id: 13, name: 'Joshua Weston', status: 'online', statusUser: 'Sami', letter: 'J' },
];

/**
 * Agrupa los contactos de chat por la letra inicial de su nombre para facilitar la visualización en el panel de chat.
 * El resultado es un objeto donde cada clave es una letra y su valor es un array de contactos que comienzan con esa letra.
 * Esto permite mostrar los contactos organizados alfabéticamente en el panel de chat, mejorando la experiencia del usuario al buscar contactos específicos.
 */
const groupedContacts = chatContacts.reduce((acc, c) => {
  const key = c.letter;
  if (!acc[key]) acc[key] = [];
  acc[key].push(c);
  return acc;
}, {});

/**
 * Componente que representa el panel de chat en la aplicación. Este panel se muestra al hacer clic en el icono de chat en la barra de navegación.
 * El panel de chat tiene tres pestañas: "NOTES", "ALERTS" y "CHAT". La pestaña "CHAT" muestra una lista de contactos de chat agrupados por la letra inicial de su nombre.
 * Cada contacto muestra su nombre, estado (en línea o fuera de línea) y un mensaje que indica si el usuario está en línea o cuándo se desconectó.
 * El panel también se cierra automáticamente al hacer clic fuera de él, gracias a un event listener que detecta clics fuera del panel.
 * Este componente utiliza el contexto de la aplicación para gestionar el estado del panel activo y las funciones para abrir y cerrar los paneles.
 * 
 * @author Alejandro De la Huerga  
 * @version 1.0.0
 * @since 23/03/2026
 * @returns {JSX.Element} El componente del panel de chat.
 */
export default function ChatPanel() {
  // Se obtiene el estado del panel activo y las funciones para cambiarlo y cerrar todos los paneles desde el contexto de la aplicación.
  const { activePanel, setActivePanel, closeAll } = useApp();
  const panelRef = useRef(null);

  // Se utiliza un efecto para agregar un event listener que detecta clics fuera del panel de chat. Si se hace clic fuera del panel, se cierra el panel.
  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        if (!e.target.closest('.icon-btn')) closeAll();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeAll]);

  /** Renderiza el panel de chat con sus pestañas y la lista de contactos. La pestaña activa se resalta y muestra su contenido correspondiente.
   * Si la pestaña activa es "CHAT", se muestra la lista de contactos agrupados por letra. Si es "NOTES" o "ALERTS", 
   * se muestra un mensaje indicando que no hay notas o alertas.
   */
  return (
    <div className="chat-panel" ref={panelRef}>
      <div className="chat-tabs">
        {['NOTES', 'ALERTS', 'CHAT'].map(tab => (
          <button
            key={tab}
            className={`chat-tab ${activePanel === tab ? 'chat-tab--active' : ''}`}
            onClick={() => setActivePanel(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activePanel === 'CHAT' && (
        <>
          <div className="chat-header">
            <button className="chat-add-btn">+</button>
            <div>
              <p className="chat-list-title">Chat List</p>
              <p className="chat-list-sub">Show All</p>
            </div>
            <button className="chat-more-btn">···</button>
          </div>

          <div className="chat-contacts">
            {Object.entries(groupedContacts).map(([letter, contacts]) => (
              <div key={letter}>
                <div className="contact-group-label">{letter}</div>
                {contacts.map(c => (
                  <div key={c.id} className="contact-item">
                    <div className="contact-avatar">
                      <span>{c.letter}</span>
                      <div className={`contact-status ${c.status === 'online' ? 'status-online' : 'status-offline'}`} />
                    </div>
                    <div className="contact-info">
                      <p className="contact-name" style={{fontSize:'20px'}}>{c.name}</p>
                      <p className="contact-sub" style={{fontSize:'14px'}}>
                        {c.status === 'online'
                          ? `${c.statusUser} is online`
                          : `${c.statusUser} left ${c.timeAgo}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}

      {activePanel === 'NOTES' && (
        <div className="chat-empty">
          <p>📝 No notes yet</p>
        </div>
      )}

      {activePanel === 'ALERTS' && (
        <div className="chat-empty">
          <p>🔔 No alerts</p>
        </div>
      )}
    </div>
  );
}