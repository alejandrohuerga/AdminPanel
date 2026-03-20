/**
 * Preloader del comienzo
 * @returns div de carga del principio.
 */

function PreloaderStart() {
  return (
    <div id="preloader" style={{display:'none'}}>
        <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
        </div>
    </div>
  )
}

export default PreloaderStart