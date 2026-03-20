/**
 * Este componente va dentro de CustomNav ya que son los elementos del menu.
 * @returns ul
 */

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
		<li className="nav-item">
			<a className="nav-link" data-toggle="tab" href="#notes">Notes</a>
		</li>
		<li className="nav-item">
			<a className="nav-link" data-toggle="tab" href="#alerts">Alerts</a>
		</li>
		<li className="nav-item">
			<a className="nav-link active" data-toggle="tab" href="#chat">Chat</a>
		</li>
	</ul>
  )
}

export default NavTabs