import Logo from './Logo';
import './NavBar.css'; 
import { useApp } from '../../context/AppContext';
import NotificationsPanel from '../notificaciones/PanelNotificaciones';
import ChatPanel from '../chat/ChatPanel';

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
        {notificationsOpen && <NotificationsPanel />}
        {chatOpen && <ChatPanel />}
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
      <>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
       </>
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
      <>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </>
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
      <>
        <div style={{ position: 'relative', display: 'inline-block', background:'rgba(254, 99, 78, 0.05)', padding:'14px', borderRadius: '1.25rem', marginRight:'15px'}}>
          {/* Este es el contenedor con la animación */}
          <div className="pulse-css"></div>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8333 5.91732V3.49998C12.8333 2.85598 13.356 2.33331 14 2.33331C14.6428 2.33331 15.1667 2.85598 15.1667 3.49998V5.91732C16.9003 6.16698 18.5208 6.97198 19.7738 8.22498C21.3057 9.75681 22.1667 11.8346 22.1667 14V18.3913L23.1105 20.279C23.562 21.1831 23.5142 22.2565 22.9822 23.1163C22.4513 23.9761 21.5122 24.5 20.5018 24.5H15.1667C15.1667 25.144 14.6428 25.6666 14 25.6666C13.356 25.6666 12.8333 25.144 12.8333 24.5H7.49817C6.48667 24.5 5.54752 23.9761 5.01669 23.1163C4.48469 22.2565 4.43684 21.1831 4.88951 20.279L5.83333 18.3913V14C5.83333 11.8346 6.69319 9.75681 8.22502 8.22498C9.47919 6.97198 11.0985 6.16698 12.8333 5.91732ZM14 8.16664C12.4518 8.16664 10.969 8.78148 9.87469 9.87581C8.78035 10.969 8.16666 12.453 8.16666 14V18.6666C8.16666 18.8475 8.12351 19.026 8.04301 19.1881C8.04301 19.1881 7.52384 20.2265 6.9755 21.322C6.88567 21.5028 6.89501 21.7186 7.00117 21.8901C7.10734 22.0616 7.29517 22.1666 7.49817 22.1666H20.5018C20.7037 22.1666 20.8915 22.0616 20.9977 21.8901C21.1038 21.7186 21.1132 21.5028 21.0234 21.322C20.475 20.2265 19.9558 19.1881 19.9558 19.1881C19.8753 19.026 19.8333 18.8475 19.8333 18.6666V14C19.8333 12.453 19.2185 10.969 18.1242 9.87581C17.0298 8.78148 15.547 8.16664 14 8.16664Z"
              fill="#FE634E"
            ></path>
          </svg>
        </div>
      </>
    );
}

function IconoChat(){
    return (
      <>
        <div style={{ position: 'relative', display: 'inline-block', background:'rgba(254, 99, 78, 0.05)', padding:'14px', borderRadius: '1.25rem', marginRight:'15px'}}>
          {/* El punto pulsante sobre el icono */}
          <div className="pulse-css"></div>
          {/* El icono SVG */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.6666 8.16666C25.6666 5.5895 23.5771 3.5 21 3.5C17.1161 3.5 10.8838 3.5 6.99998 3.5C4.42281 3.5 2.33331 5.5895 2.33331 8.16666V23.3333C2.33331 23.8058 2.61798 24.2305 3.05315 24.4113C3.48948 24.5922 3.99115 24.4918 4.32481 24.1582C4.32481 24.1582 6.59281 21.8902 7.96714 20.517C8.40464 20.0795 8.99733 19.8333 9.61683 19.8333H21C23.5771 19.8333 25.6666 17.7438 25.6666 15.1667V8.16666ZM23.3333 8.16666C23.3333 6.87866 22.2891 5.83333 21 5.83333C17.1161 5.83333 10.8838 5.83333 6.99998 5.83333C5.71198 5.83333 4.66665 6.87866 4.66665 8.16666V20.517L6.31631 18.8673C7.19132 17.9923 8.37899 17.5 9.61683 17.5H21C22.2891 17.5 23.3333 16.4558 23.3333 15.1667V8.16666ZM8.16665 15.1667H17.5C18.144 15.1667 18.6666 14.644 18.6666 14C18.6666 13.356 18.144 12.8333 17.5 12.8333H8.16665C7.52265 12.8333 6.99998 13.356 6.99998 14C6.99998 14.644 7.52265 15.1667 8.16665 15.1667ZM8.16665 10.5H19.8333C20.4773 10.5 21 9.97733 21 9.33333C21 8.68933 20.4773 8.16666 19.8333 8.16666H8.16665C7.52265 8.16666 6.99998 8.68933 6.99998 9.33333C6.99998 9.97733 7.52265 10.5 8.16665 10.5Z"
              fill="#FE634E"
            ></path>
          </svg>
        </div>
      </>
    );
}

export default NavBar