import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class helpJumbotron extends Component {

    render() {
        return (
            <Jumbotron>
                <h1>Help!</h1>
                <p>
                    Struggling to use the application? Let us know by submitting a ticket and someone will respond to you as soon as possible
            </p>
                <p>
                    <Button bsStyle="primary">Yes Please</Button>
                </p>
            </Jumbotron>

        );
    }

}

export default helpJumbotron;
