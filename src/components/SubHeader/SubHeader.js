import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import './SubHeader.css';

class SubHeader extends Component {
    render() {
        return (
            <Card>
                En cualquier momento 📱 y en cualquier lugar 🌐,
                    en un formato 💬 bien conocido
            </Card>
        );
    }
}

export default SubHeader;