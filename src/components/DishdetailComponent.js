import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// Assignment 1 Tasks - Coursera

// DishDetail class that will handle the new display version of my code  (takes props of the dish)
class DishDetail extends Component{

    constructor(props) {
        super(props);
       
        this.state = {
            selectedDishDetail: this.props.dishDetail
        };


    }

// Task 1 & 2 Render dish details when selected 
    renderDish(dish) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }

        else {
            return (
                <div>

                </div>
            );
        }
    }

// Task 3 showing Comments
    renderComments(comments){

        if (comments != null) {
        const theComment = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p> -- {comment.author} &nbsp; , &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                
                <ul className='list-unstyled'>  
                    {theComment}
                </ul>

            </div>
        )
    }

        else {
            return (
                <div>

                </div>
            );
        }
    }


    render(){

        const dish = this.props.dish

 // For debugging 
        console.log(dish);
        
        if (dish == null) {
            return (
            <div>

            </div>
            );
        }
        // display info
        const food = this.renderDish(dish);
        const comment = this.renderComments(dish.comments);

        return (
            <div className='row'>
                {food}
                {comment}
            </div>
        )
    }

}

export default DishDetail;