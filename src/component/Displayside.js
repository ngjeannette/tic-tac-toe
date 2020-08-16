import React from 'react';
import '../App.scss'

const Displayside = ({side1, side2, turn}) => (
    <div className="side-info">
        <div className="player1Side">
            <h2 className="title is-2">{side1}</h2>
            <p>{turn === side1 ? "Your Turn" : ''}</p>
        </div>
        <div className="CPUSide">
            <h2 className="title is-2">{side2}</h2>
            <p>{turn === side2 ? "Your Turn" : ''}</p>
        </div>
    </div>
)

export default Displayside;