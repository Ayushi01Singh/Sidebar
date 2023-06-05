import React from 'react'
import '../pages/Inventory.css'
import HouseIcon from '@mui/icons-material/House';
import Form from '../components/Form'
import { Link } from 'react-router-dom';
let prize=45000
let property_name="4 BHK Independent Floor"
let address="ABC"
let project_name="s"
let furnishing="d"
let area=22


const Inventory = () => {
  return (

    <div className="inventory_page">
        <h3>Home-Inventory</h3>
        <Link to="../Form">
        <button  className='add_inventory'>Add Inventory</button> <br />
    </Link>
        <div className="inventory_box">
            <div className="img">
<img src="" alt="" />            </div>
            <div className="details">
               <div className="prize">₹{prize}</div>
               <div className="property_name">{property_name}</div>
               <div className="address">{address}</div>
               <div className="add_details">
               <div className="A">
               <HouseIcon/>
                  Project name<br></br>
                 {project_name}
                </div>
                <div className="B">
                <HouseIcon/>
                  Furnishing<br></br>
                 {furnishing}
                </div>
                <div className="C">
                <HouseIcon/>
                  Build up area<br></br>
                  {area}
                </div>
               </div>
            </div>
        </div>
        {/* <div className="inventory_box">
            <div className="img">
<img src="" alt="" />            </div>
            <div className="details">
               <div className="prize">₹{prize}</div>
               <div className="property_name">{property_name}</div>
               <div className="address">{address}</div>
               <div className="add_details">
               <div className="A">
               <HouseIcon/>
                  Project name<br></br>
                  Huda Plot Sector 43
                </div>
                <div className="B">
                <HouseIcon/>
                  Furnishing<br></br>
                  Fully Furnished
                </div>
                <div className="C">
                <HouseIcon/>
                  Build up area<br></br>
                  2100 sq.ft
                </div>
               </div>
            </div>
        </div> */}
    </div>
  )
}

export default Inventory
