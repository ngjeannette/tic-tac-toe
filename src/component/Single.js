import React, { useEffect, useState } from 'react';
import '../App.scss';
import Playagain from './Playagain';
import Displayside from './Displayside';
import DisplayAnnouncement, { CheckWin} from './DisplayAnnouncement';

function Single(props) {
    const [side, setSide] = useState(null);
    const [winner, setWinner] = useState(null);
    const [winIndexes, setWinIndexes] = useState([]);
    const [turn, setTurn] = useState(null)
    const [classType, setClassType] = useState(null)
    const [game, setGame] = useState([ ["","",""],
                                       ["","",""],
                                       ["","",""]]);

    useEffect(()=>{
        if (String(props.location.state)) {
            setSide(props.location.state.selectside);
            setTurn(props.location.state.selectside);
        }
    },[]);

    useEffect(()=>{},[turn, game, winner, winIndexes, classType]);

    const updateGame = (index, i) => {
        game[index][i] = side;
        setGame([...game])
        const [isWin, winner, winIndexes, classType] = CheckWin(game);
        if (!isWin) {
            setTimeout(function () { CPUTurn() }, 500);
            setTurn(findCPUSide())
            setTimeout(function () { setTurn(side)}, 1000);
        } else {
            setWinner(winner);
            setWinIndexes(winIndexes);
            setClassType(classType);
        }
    };

    const findCPUSide = () => {
        if (side === 'O') {
            return('X')
        } else {
            return('O')
        }
    }

    const CPUTurn = () => {
        let newIndexArr = [];
        game.forEach((item,index) => {
            item.forEach((el,i) => {
                if (el === '') newIndexArr.push([index,i])
            })
        });
        // randon number with the array length
        if (newIndexArr.length > 0) {
            let randomNum = Math.floor(Math.random() * Math.floor(newIndexArr.length));
            let CPUSelect = newIndexArr[randomNum];
            game[CPUSelect[0]][CPUSelect[1]] = findCPUSide();
            setGame([...game]);
            const [isWin, winner, winIndexes, classType] = CheckWin(game);
            if(isWin){
                setWinner(winner);
                setWinIndexes(winIndexes);
                setClassType(classType);
            }
        } else {
            winner === null && setWinner('draw');
        }
    }

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
        <h3 className="title is-3">Single Mode</h3>
        <Displayside 
            side1={side !== null && displayChar(side)} 
            side2={side !== null && displayChar(findCPUSide())}
            turn={turn !== null ? (turn === 'X' ? '🐶' : '🐱') : null}
        />
         <div className="game">
                {
                    game.map((row, index) => (
                        row.map((item, i) => {
                            if(item === '') {
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

export default Single;