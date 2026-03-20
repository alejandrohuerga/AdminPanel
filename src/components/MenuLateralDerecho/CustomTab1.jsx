
/**
 * Este componente se va a usar dentro del componente chatBox.
 * 
 * @author Alejandro De la Huerga
 */

import NavTabs from "./NavTabs"
import TabContent from "./TabContent"

function CustomTab1() {
  return (
    <div className="custom-tab-1">
        <NavTabs/>
        <TabContent/>
    </div>
  )
}

export default CustomTab1