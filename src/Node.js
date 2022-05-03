import React from 'react';
import './Node.css'; 
const Node=({isStart, isEnd, row, col, isWall, isWeight,isVisited})=>{
    const classes= isStart 
    ? 'node-start' 
    : isWall 
    ? 'iswall' 
    : isWeight
    ? 'isweight'
    // : isVisited
    // ? 'isvisited'
    :isVisited
    ?'node-isvisited'
    : isEnd 
    ? 'node-end' 
    : '';
    return(
        <div className={`node ${classes}`} id={`node-${row}-${col}`}></div>   
    )
}

export default Node;