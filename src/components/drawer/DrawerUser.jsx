import React from "react";
import { Container } from "react-bootstrap";
import Dishon from "../../assets/Dishon.jpg";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { Divider } from "@material-ui/core";

const DrawerUser = (props) => {
  return (
    <Container
      className={props.current ? "user-container display" : "user-container"}
    >
      <a href="/">
        <img className="user-container-image" src={Dishon} alt="D" />
      </a>
      <h2>DishonJP</h2>
      <h4>UI UX Designer</h4>
      <div className="social-network">
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
      <span>73,NadarStreet,Tuticorin TamilNadu-628001</span>
      <div className="flex">
        <div>
          <h2>30</h2>
          <h4>Followers</h4>
        </div>
        <div>
          <h2>30</h2>
          <h4>Following</h4>
        </div>
        <div>
          <h2>3</h2>
          <h4>Posts</h4>
        </div>
      </div>
      <Divider />
      <h5>Email address:</h5>
      <span>Dishonjp11@gmail.com</span>
      <Divider />
      <h5>Phone:</h5>
      <span>739-582-2020</span>
      <Divider />
      <span>Javascript</span>
      <div className="javascript">
        <div></div>
      </div>
      <span>HTML 5</span>
      <div className="html">
        <div></div>
      </div>
      <span>React</span>
      <div className="react">
        <div></div>
      </div>
      <span>Reactnative</span>
      <div className="native">
        <div></div>
      </div>
    </Container>
  );
};

export default DrawerUser;
