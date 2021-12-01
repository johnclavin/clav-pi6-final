import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    
    render(){
        let link1;
        let link2;
        let link3;

        link1 = <Link to="/">Home Page</Link>;
        link2 = <Link to="App">Art Work</Link>;
        link3 = <Link to="Register">Register</Link>;
        
        return(
            <nav id="clavinNavigation">
                <div> {link1} </div>
                <div> {link2} </div>
                <div> {link3} </div>
            </nav>
        )
    }
}

export default Navigation
