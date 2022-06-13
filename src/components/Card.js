import React from "react"
import Licon from "../images/Licon.jpg"

export default function Card(props){
    return(
        <div class="container">
            
            <img className="card--img" src={props.imageUrl} alt="mountain"
            ></img>


            <section className="card--description">
                
                <section id="location">
                <img src={Licon} alt="location icon"></img>
                <p>{props.location}</p>
                <a href={props.googleMapsUrl} target="_blank" >view on google maps</a>
                </section>

                

                <h1 id="title">{props.title}</h1>

                <section className="dates">
                    <h5>{props.startDate}-</h5>
                    <h5>{props.endDate}</h5>
                </section>

                <section className="img--desc">{props.description}</section>

            </section>
        </div>
    )
}