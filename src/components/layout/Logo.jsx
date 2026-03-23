import React from 'react'

/**
 * Componente el cual abarca en un div las dos partes del logo el cual se expande
 * y se contrae apareciendo y desapareciendo la mitad del logo en cada función.
 * 
 * @returns Componente div , el cual tiene el logo del header a la izquierda.
 * 
 * @author Alejandro De la Huerga.
 * @since 23/03/2026
 * @version 1.0.0
 */

function Logo({ collapsed = false }) {
  return (
    <div style={{display: 'flex', alignItems:'center', gap:8}}>
        {/* Logo Q de qinamical */}
        <img src="/public/images/Qlogo.png" alt="QLogo"  style={{height: '50px', width: '50px', marginRight: '0px', marginBottom: '4px'}}/>
        
        {/* Inamical cuando se abre el menú */}
        {!collapsed && (
            <img src="/public/images/inamicalLogo.png" alt='letraLogo'  style={{height: '40px', width: '120px',marginBottom: '0px'}}/>
        )}
    </div>
  )
}

export default Logo