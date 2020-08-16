import React from 'react';
import { Link } from "react-router-dom";

function SelectSide() {
    return (
        <div className="selectside">
            <h1 className="title is-1">Select Side</h1>
            <div className="playermode">
                <Link 
                    className="button is-primary is-inverted"
                    to={{
                        pathname: '/singleplayer',
                        state: {
                            selectside: 'X'
                        }
                    }}
                >🐶</Link>
                <Link 
                    className="button is-primary is-inverted"
                    to={{
                        pathname: '/singleplayer',
                        state: {
                            selectside: 'O'
                        }
                    }}
                >🐱</Link>
            </div>
        </div>
    )
}

export default SelectSide;