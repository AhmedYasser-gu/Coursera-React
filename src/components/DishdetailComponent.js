import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// Assignment 1 Tasks - Coursera


// Task 1 & 2 Render dish details when selected 
function RenderDish({ dish }) {

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
function RenderComments({ comments }) {

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


const DishDetail = (props) => {

    const dish = props.dish

    // For debugging 
    console.log(dish);

    if (dish == null) {
        return (
            <div>

            </div>
        );
    }
    return (
        <div className='row'>
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.dish.comments} />
        </div>
    )
}

export default DishDetail;