import React from "react";

const ImgCard = (props) => {
    return (
        <>
            <img src={props.url} alt={props.name} />
            <p style={{ "color": "orange", "fontWeight": "bold" }}>{props.name}</p>
            <p>Rank : {props.rank}</p>
            <p>Price in $ : {props.price}</p>
            <p>MarketCap : {props.marketCap}</p>


        </>
    )
}
export default ImgCard;
