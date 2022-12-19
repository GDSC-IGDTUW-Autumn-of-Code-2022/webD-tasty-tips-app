import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Recipe(props) {
  const[starStyle1,setStar1]=useState(
    {  display:"inline-block",
    width:20,
    height:20,
    color:"white",
    margin:3
  
    }
  );
  const[starStyle2,setStar2]=useState(
    {  display:"inline-block",
    width:20,
    height:20,
    color:"white",
    margin:3
  
    }
  );
  const[starStyle3,setStar3]=useState(
    {  display:"inline-block",
    width:20,
    height:20,
    color:"white",
    margin:3
  
    }
  );
  const[starStyle4,setStar4]=useState(
    {  display:"inline-block",
    width:20,
    height:20,
    color:"white",
    margin:3
  
    }
  );
  const[starStyle5,setStar5]=useState(
    {  display:"inline-block",
    width:20,
    height:20,
    color:"white",
    margin:3
  
    }
  );
  function StarClicked(e)
  {var target=parseInt(e.currentTarget.id);
    console.log(target);
    if(target===1)
    {
      setStar1(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
    }
    if(e.currentTarget.id==="2")
    {
      setStar1(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      );
      setStar2(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
    }
    if(e.currentTarget.id==="3")
    {
      setStar1(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar2(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar3(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
    }
    if(e.currentTarget.id==="4")
    {
      setStar1(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar2(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar3(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar4(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
    }
    if(e.currentTarget.id==="5")
    {
      setStar1(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar2(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar3(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar4(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
      setStar5(
        {
          display:"inline-block",
          width:20,
          height:20,
          color:"yellow",
          margin:3
        }
      )
    }
  
  }
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
          <div class="stars">
          <FontAwesomeIcon icon={faStar} class="star" onClick={StarClicked} style={starStyle1} id="1"/>
          <FontAwesomeIcon icon={faStar} class="star" onClick={StarClicked} style={starStyle2} id="2"/>
          <FontAwesomeIcon icon={faStar} class="star" onClick={StarClicked} style={starStyle3} id="3"/>
          <FontAwesomeIcon icon={faStar} class="star" onClick={StarClicked} style={starStyle4} id="4"/>
          <FontAwesomeIcon icon={faStar} class="star" onClick={StarClicked} style={starStyle5} id="5"/>
     
          </div>
        </div>
      </div>
    </>
  );
}
