import React from 'react'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap';

const Drawer = (props) => {
    console.log(props.openDrawer);
    
    return (
        <div className={props.openDrawer?"drawer-container":"drawer-container drawer-close"} >
            <div>
                <ButtonGroup>
                    <Button>Oreo</Button>
                    <Button>User</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        openDrawer:state.openDrawer
    }
}

export default connect(mapStateToProps)(Drawer)
