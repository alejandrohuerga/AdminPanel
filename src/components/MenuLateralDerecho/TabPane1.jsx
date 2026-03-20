import Contacts from './Contacts'

function TabPane1() {
  return (
    <div className="tab-pane fade active show" id="chat" role="tabpanel">
      <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
        <div className="card-header chat-list-header text-center">
          <a href="javascript:void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24"version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect fill="#000000" x="4" y="11" width="16" height="2" rx="1"/>
                <rect fill="#000000" opacity="0.3"  transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1"/>
              </g>
            </svg>
          </a>
          <div>
            <h6 class="mb-1">Chat List</h6>
            <p class="mb-0">Show All</p>
          </div>
          <a href="javascript:void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <circle fill="#000000" cx="5" cy="12" r="2" />
                <circle fill="#000000" cx="12" cy="12" r="2" />
                <circle fill="#000000" cx="19" cy="12" r="2" />
              </g>
            </svg>
          </a>
        </div>
        <div  className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
          <Contacts/>
        </div>
      </div>
    </div>
  );
}

export default TabPane1