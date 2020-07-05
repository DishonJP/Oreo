import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import Drawer from "../components/drawer/Drawer";
import { Container, Button, NavLink } from "react-bootstrap";
import { Home } from "@material-ui/icons";
import product from '../assets/product.json'
import bag from '../assets/bag.png'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Drawer />
        <div className="body">
          <NavigationBar />
          <section className="body-session">
            <header className="body-session-header">
              <div className="body-session-header-content">
                <Container>
                  <div className="flex">
                    <div>
                      <h2>Product</h2>
                      <span>Welcome to Oreo</span>
                    </div>
                    <div className="body-session-header-navigation">
                      <Home />
                      <NavLink href="#">Oreo</NavLink>
                      <span>/</span>
                      <NavLink href="#">eCommerce</NavLink>
                      <span>/</span>
                      <NavLink disabled href="#">Product</NavLink>
                    </div>
                  </div>
                </Container>
              </div>
            </header>
            {/* <img src={bag} alt=""/> */}
            <img src={bag} alt=""/>
            {product.map(el=>{
              return <img src={el.image} />
            })}
            <img src={product[0].image} alt=""/>
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
