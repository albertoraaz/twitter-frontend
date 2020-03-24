import React, { Component } from 'react'
import {
    Card, Media, CardBody,
} from 'reactstrap'

class DataTable extends Component {
    render() {
        const todoItems = this.props.items;
        return (
            <ol>
                {todoItems.map((item, index) => (
                    <li key={index}>
                        <div className="container">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <Card>
                                        <CardBody>
                                            <Media>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col"><img src={item.user_profile_image_url} alt="twitter"></img></div>
                                                            <div className="col twitter-screen_name_color"><b>@{item.user_screen_name}</b></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col twitter-text">
                                                        {item.text}
                                                    </div>
                                                </div>
                                            </Media>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        );
    }
}

export default DataTable