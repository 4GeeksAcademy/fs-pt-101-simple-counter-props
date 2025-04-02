import React from "react";


export const MyCard = (props) => {
    return (
            <div class="card myCard" >
                <img src={props.imgUrl} class="card-img-top" alt={props.title} />
                <div class="card-body">
                    <h5 class="card-title">{props.title || 'title'}</h5>
                    <p class="card-text">{props.text}</p>
                    <a href="#" class="btn btn-primary">{props.btn}</a>
                </div>
            </div>
 
    )
}