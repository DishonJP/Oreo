import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import Drawer from "../components/Drawer";
import { Container, Button, NavLink } from "react-bootstrap";
import { Home } from "@material-ui/icons";
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
            <Button type="button" className="btn btn-outline-light">
              ooh
            </Button>
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
