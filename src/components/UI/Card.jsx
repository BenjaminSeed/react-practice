import React from 'react'

import classes from './Card.module.css'; // you have to import "something" from module.css then assign classes below"

const Card = (props) => {
    return <div className={`${classes.card} ${props.className}` }>{props.children}</div>;
};

export default Card;