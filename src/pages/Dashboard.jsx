import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import Drawer from "../components/Drawer";
class Dashboard extends Component {
  render() {
    return (
        <div className="dashboard-container">
            <Drawer/>
            <div className="body">
            <NavigationBar/>
            </div>
        </div>
    )
  }
}

export default Dashboard;
