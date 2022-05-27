import React, { Component } from 'react';
import { Card ,CardImg , CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null

        }
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    render() {

        const menu = this.props.dishes.map((dish) => {

            return (
              <div key={dish.id} className="col-12 col-md-5 mt-1">
                <Card onClick={()=> this.onDishSelect(dish)} >
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
                <DishDetail dish={this.state.selectedDish}/> 
            </div>
          </div>
        );
    }
}

export default Menu;