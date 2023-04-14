import React from "react";
import classes from './KarticaCard.module.css';

function KarticaCard(props) {
    return <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
}

export default KarticaCard;