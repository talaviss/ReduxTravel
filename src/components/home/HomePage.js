/**
 * Created by user on 22/04/2017.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <h1> Tal Avissar Administartion</h1>
                <p>some text</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )
    }
};

export default HomePage;