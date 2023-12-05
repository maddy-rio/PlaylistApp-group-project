import { Link} from 'react-router-dom'

import { getSession } from '../functions/startSession'

const NavBar = () => {
  
  return (
    <div className="d-flex w-100">
      <h4 className="mx-2">VibesVault</h4>
      
      <Link className="mx-2" to={'/'}>
        <button>Log out</button>
      </Link>
     
    </div>
  )
}

export default NavBar
