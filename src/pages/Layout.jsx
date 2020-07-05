import React from "react";
import NavigationBar from "../components/NavigationBar";
import Drawer from "../components/drawer/Drawer";
import { Container, NavLink } from "react-bootstrap";
import { Home } from "@material-ui/icons";
import { withRouter } from "react-router-dom";

const Layout = ({children,match}) => {
console.log(match);

const path=match.path
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
                    <NavLink disabled href="#">
                      {path.split("/")}
                    </NavLink>
                  </div>
                </div>
              </Container>
            </div>
          </header>
          {children}
        </section>
      </div>
    </div>
  );
};

export default withRouter(Layout);
