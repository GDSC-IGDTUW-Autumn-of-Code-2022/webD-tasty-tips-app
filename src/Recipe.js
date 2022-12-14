import React from "react";

export default function Recipe(props) {
  return (
    <>
      <div className="card my-4 mx-3" style={props.cardStyle}>
        <img
          src={props.img}
          style={props.imageStyle}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title" style={props.myStyle}>
            {props.title}
          </h5>
          <p className="card-text" style={props.myStyle}>
            Calories - {props.calories}
          </p>
          <ol>
            {props.ingredients.map((i) => (
              <li style={props.myStyle}>{i.text}</li>
            ))}
          </ol>
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary see-recipe-btn"
          >
            See the recipe
          </a>
        </div>
      </div>
    </>
  );
}
