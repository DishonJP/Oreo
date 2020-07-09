import React from 'react'
import ProductLayout from './ProductLayout'
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { Divider } from '@material-ui/core';
import Customer from './Customer';

const CustomerProfile = () => {
    return (
        <div className="profile-container">
            <ProductLayout name="New" surname="Customer Rating" width="57%">
                <div style={{padding:"20px"}}>
                <Customer name="HOSSEIN SHAMS" model="IPhone 8" image="../assets/sans.jpg" />
                <Divider />
                <Customer name="TIM HANK" model="Nokia 8" image="../assets/tim.jpg" />
                <Divider />
                <Customer name="MARYAM AMIRI" model="HTC U11" image="../assets/hos.jpg" />
                </div>
            </ProductLayout>
            <div className="users-container">
                <div className="users-container-header">
                    <h2>Matthew Deo</h2>
                </div>
                <div className="users-container-image">
                    <img src="../assets/mathew.jpg" alt="m" />
                    <div className='users-container-icon'>
                        <i>
                            <Facebook />
                        </i>
                        <i>
                            <Twitter />
                        </i>
                        <i>
                            <Instagram />
                        </i>
                    </div>
                    <span className="users-span">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</span>
                    <Divider />
                    <div className="users-container-text">
                        <div>
                            <h4>98</h4>
                            <span>Item Buy</span>
                        </div>
                        <div>
                            <h4>78</h4>
                            <span>Mobile</span>
                        </div>
                        <div>
                            <h4>2,046$</h4>
                            <span>Spent</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerProfile
