import React from 'react';

export default props => 

<div style={{display: "flex"}}>
    <div 
    style={{  display: "list-item", marginLeft: 15, textTransform: "capitalize", fontSize: "30",  marginTop: 20, textDecoration: props.todo.complete ? "line-through" : ""}}
    onClick = {props.toggleComplete}>{props.todo.text}</div> 
    <button onClick={props.onDelete} className="btn waves-effect waves-light #d50000 red accent-4" type="submit" name="action"><i className="far fa-trash-alt"></i></button>
</div>
