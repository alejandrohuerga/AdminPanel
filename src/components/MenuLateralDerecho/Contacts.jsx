/**
 * Este Contacts va importado en el componente TabPane1
 * @returns 
 */

function Contacts() {
  return (
    <ul className="contacts">
        <li className="name-first-letter">A</li>
            <li className="active dz-chat-user">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src="../../assets/1.jpg" class="rounded-circle user_img" alt=""/>
                  <span className="online_icon"></span>
                </div>
                <div className="user_info">
                  <span>Archie Parker</span>
                  <p>Kalid is online</p>
                </div>
              </div>
        </li>    
    </ul>
  )
}

export default Contacts