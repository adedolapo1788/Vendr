import Foodnav from './FoodNav'
import Menu from './Menu'
//import Moblie from './MoblieMenu'

 const Foodmenu = () => {
    return( <>
    <div className="bg-height bg-height-nav">
        <div className="nav-adjust">
          <Foodnav/>
        </div>
      </div>
      <Menu/>
      </>
    )
}
export default Foodmenu