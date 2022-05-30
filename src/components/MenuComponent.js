import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    render() {

        const menu = this.props.dishes.map((dish) => {

            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.props.onClick(dish.id)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><i>{dish.name}</i></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
            
                </div>
            </div>
        );
    }
}

export default Menu;