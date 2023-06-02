import React from 'react'
import '../pages/inventory.css'
let prize=45000
let property_name="4 BHK Independent Floor"
let address="ABC"
const inventory = () => {
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
                    a
                </div>
                <div className="B">
                    b
                </div>
                <div className="C">
                      c
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
                    a
                </div>
                <div className="B">
                    b
                </div>
                <div className="C">
                      c
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default inventory