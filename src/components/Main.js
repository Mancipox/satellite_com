import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Main extends Component {


    render() {

        return (
            <div>
                <NavLink to="/doppler" > <Button variant="outline-primary" type="button">
                Calculate Doppler</Button>
                </NavLink>
                <NavLink to="/distance" > <Button variant="outline-primary" type="button">
                Calculate distance</Button>
                </NavLink>
            </div>
        )
    }

}
export default Main;