import React from 'react'
import '../pages/Inventory.css'
import HouseIcon from '@mui/icons-material/House';

let prize=45000
let property_name="4 BHK Independent Floor"
let address="ABC"
const Inventory = () => {
  return (
    <div className="inventory_page">
        <h3>Home-Inventory</h3>
        <button className='add_inventory'>Add Inventory</button> <br />
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
        </div>
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
        </div>
    </div>
  )
}

export default Inventory
