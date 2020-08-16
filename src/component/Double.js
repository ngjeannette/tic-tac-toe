import React, { useEffect, useState } from 'react';
import '../App.scss';
import Playagain from './Playagain';
import Displayside from './Displayside';
import DisplayAnnouncement, { CheckWin } from './DisplayAnnouncement';

function Double(props) {
    const [side, setSide] = useState(null);
    const [winner, setWinner] = useState(null);
    const [winIndexes, setWinIndexes] = useState([]);
    const [turn, setTurn] = useState(null)
    const [classType, setClassType] = useState(null)
    const [game, setGame] = useState([["", "", ""],
                                      ["", "", ""],
                                      ["", "", ""]]);
    useEffect(() => {
            setSide('O');
            setTurn('O');
    }, []);

    useEffect(() => { }, [turn, game, winner, winIndexes, classType])

    const updateGame = async (index, i) => {
        game[index][i] = side;
        setGame([...game])
        let newIndexArr = [];
        game.forEach((item, index) => {
            item.forEach((el, i) => {
                if (el === '') newIndexArr.push([index, i])
            })
        });
        const [isWin, winner, winIndexes, classType] = CheckWin(game);
        if(!isWin) {
            if(side === 'O'){
                setSide('X');
                setTurn('X');
            }else {
                setSide('O');
                setTurn('O');
            }
            if (newIndexArr.length === 0) {
                winner === undefined && setWinner('draw')
            }
        } else {
            setWinner(winner);
            setWinIndexes(winIndexes);
            setClassType(classType);
        }
    };

    const displayChar = (item) => {
        switch (item) {
            case 'O':
                return '🐱';
            case 'X':
                return '🐶';
            case '':
                return '';
        }
    };

    return (
        <div className="game-page">
            <h3 className="title is-3">Double Mode</h3>
            <Displayside
                side1={'🐱'}
                side2={'🐶'}
                turn={turn !== null ? (turn === 'X' ? '🐶' : '🐱') : null}
            />
            <div className="game">
                {
                    game.map((row, index) => (
                        row.map((item, i) => {
                            if (item === '') {
                                return <div key={i} className="item" onClick={() => { winner === null && updateGame(index, i) }}><span>{displayChar(item)}</span></div>
                            } else {
                                const isWinIndex = winIndexes.filter(([r, c]) => (r === index && c === i)).length > 0;
                                let className = "item";
                                if (isWinIndex) {
                                    className += ` win ${classType}`;
                                }
                                return <div key={i} className={className}>{displayChar(item)}</div>
                            }
                        })
                    ))
                }
            </div>
            <div className="announcement">
                <h3 className="title is-3">
                    <DisplayAnnouncement winner={winner} />
                </h3>
            </div>
            <Playagain />
        </div>
    )
}

export default Double;