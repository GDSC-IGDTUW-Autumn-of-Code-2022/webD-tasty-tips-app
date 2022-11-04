import React from 'react'

export default function Recipe(props) {
    return (
        <div className="card my-4 mx-3" style={{width: "20rem"}}>
        <img src={props.img} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Calories - {props.calories}</p>
          <ol>
              {props.ingredients.map(i =>(
                      <li>{i.text}</li>
              ))}
          </ol>
          <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">See the recipe</a>
        </div>
      </div>
    )
}
