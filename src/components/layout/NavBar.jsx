import Logo from './Logo';
import './NavBar.css'; 
import { useApp } from '../../context/AppContext';

export function NavBar() {
    /**
     * Uso del contexto.
     * Vamos a extraer funciones y estado del contexto.
     * Variables:
        - sidebarOpen → boolean (sidebar abierto/cerrado)
        - activePage → string (nombre de la página actual)
        - notificationsOpen → boolean
        - chatOpen → boolean.
     * Funciones: 
        - toggleSidebar() → abre/cierra sidebar
        - openNotifications() → abre panel notificaciones
        - openChat() → abre chat
     */
    const { sidebarOpen, toggleSidebar, activePage, notificationsOpen, openNotifications, chatOpen, openChat } = useApp();
    return (
      <>
        <header className="navbar">
          <div className="navbar-izquierda">
            {/* Componente de logo con collapse */}
            <Logo collapsed={!sidebarOpen} />
            <button
              className="boton-hamburguesa"
              onClick={toggleSidebar}
              aria-label="Toggle Menu"
            >
              {sidebarOpen ? <IconoFlecha /> : <IconoHamburguesa />}
            </button>
            <h1 className="titulo-navbar">{activePage}</h1>
          </div>
          {/* Sección derecha del navbar con notificaciones, chat y perfil */}
          <div className="navbar-derecha">
            {/* Botón de notificaciones con badge */}
            <button className={`boton-icon ${notificationsOpen ? "active" : ""}`} onClick={openNotifications} aria-label="Notifications">
              <IconoNotificaciones/>
              <span className="badge badge-naranja" />
            </button>

            {/* Botón de chat con badge */}
            <button className={`boton-icon ${chatOpen ? "active" : ""}`} onClick={openChat} aria-label="Messages">
              <IconoChat/>
              <span className="badge badge-naranja" />
            </button>

            {/* Chip de usuario con avatar y nombre */}
            <div className="perfil-usuario">
              <div className="avatar-usuario">D</div>
              <span className="nombre-usuario">David</span>
            </div>
          </div>
        </header>
      </>
    );
}

/**
 * Componente que representa el icono de hamburguesa para el botón de toggle del menú lateral izquierdo.
 * Su función es abrir y cerrar el menú lateral izquierdo al hacer clic en él. 
 * El icono se compone de tres líneas horizontales que simbolizan un menú desplegable.
 * 
 */

function IconoHamburguesa() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    );
}

/**
 * Componente que representa el icono de flecha para el botón de toggle del menú lateral izquierdo.
 * Su función es abrir y cerrar el menú lateral izquierdo al hacer clic en él. 
 * El icono se compone de una flecha que apunta hacia la derecha, simbolizando la acción de abrir el menú lateral.
 * Cuando el menú está abierto, el icono puede cambiar a una flecha que apunta hacia la izquierda para indicar la acción de cerrar el menú.
 * 
 */

function IconoFlecha(){
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
    );
}

/**
 * Componente que representa el icono de notificaciones para el botón de abrir el panel de notificaciones.
 * Su función es abrir el panel de notificaciones al hacer clic en él.
 * El icono se compone de una campana que simboliza las notificaciones.
 * 
 */

function IconoNotificaciones() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
    );
}

function IconoChat(){
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
    );
}

export default NavBar