import React, { createContext, useContext, useState } from 'react';

// Creación del contexto de la aplicación. Inicialmente se establece como null, pero será proporcionado por el AppProvider.
const AppContext = createContext(null);

/**
 * Componente el cual es el proveedor del contexto de la aplicación, 
 * el cual maneja el estado global de la aplicación, como el estado del sidebar, 
 * el panel de notificaciones, el panel de chat, la página activa y el panel activo.
 * Indica el estado cuando abrimos la aplicacion por primera vez, y proporciona funciones para modificar ese estado.
 * 
 * @param {React.ReactNode} children
 * @returns Componente AppContext.Provider, el cual envuelve a los componentes hijos 
 * y les proporciona acceso al estado global de la aplicación.
 * @author Alejandro De la Huerga.
 * @since 23/03/2026
 * @version 1.0.0
 */

export function AppProvider({ children }) {
    // Controla el estado del sidebar (falso).
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Controla el estado del panel de notificaciones (falso).
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    // Controla el estado del panel de chat (falso).
    const [chatOpen, setChatOpen] = useState(false);
    // Controla la página activa (Dashboard).
    const [activePage, setActivePage] = useState('Dashboard');
    // Controla el panel activo (CHAT).
    const [activePanel, setActivePanel] = useState('CHAT'); 

    // Función para abrir/cerrar el sidebar.
    const toggleSidebar = () => setSidebarOpen(v => !v);

    // Función para abrir el panel de notificaciones, cerrando el panel de chat si está abierto.
    const openNotifications = () => {
        setChatOpen(false);
        setNotificationsOpen(v => !v);
    };

    // Función para abrir el panel de chat, cerrando el panel de notificaciones si está abierto.
    const openChat = () => {
        setNotificationsOpen(false);
        setChatOpen(v => !v);
    };

    // Función para cerrar ambos paneles (notificaciones y chat).
    const closeAll = () => {
        setNotificationsOpen(false);
        setChatOpen(false);
    };

    // Return del proveedor del contexto, proporcionando el estado y las funciones a los componentes hijos.
    return (
        <AppContext.Provider value={{
        sidebarOpen, toggleSidebar,
        notificationsOpen, openNotifications,
        chatOpen, openChat,
        closeAll,
        activePage, setActivePage,
        activePanel, setActivePanel,
        }}>
        {children}
        </AppContext.Provider>
    );
}

export function useApp() {
  return useContext(AppContext);
}