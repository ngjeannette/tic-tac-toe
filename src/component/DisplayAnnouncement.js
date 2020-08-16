import '../App.scss'

const DisplayAnnouncement = ( {winner} ) => {
    if (winner !== null) {
        switch (winner) {
            case 'O':
                return '🐱 wins';
            case 'X':
                return '🐶 wins';
            case 'draw':
                return 'Draw match';
        }
    } else {
        return ''
    }
}

const CheckWin = (game) => {
    for (let i = 0; i < game.length; i++) {
        let x = '';
        for (let j = 0; j < game[i].length; j++) {
            x += game[i][j];
        }
        if (x.length === 3 && x[0] === x[1] && x[1] === x[2]) {
            return [true, x[0], [[i, 0], [i, 1], [i, 2]], 'addLineHorizontal' ]
        }
    }
    for (let i = 0; i < game.length; i++) {
        let x = '';
        for (let j = 0; j < game[i].length; j++) {
            x += game[j][i];
        }
        if (x.length === 3 && x[0] === x[1] && x[1] === x[2]) {
            return [true, x[0], [[0, i], [1, i], [2, i]], 'addLineVertical']
        }
    }
    if (game[0][0] === game[1][1] && game[1][1] === game[2][2] && (game[0][0] + game[1][1] + game[2][2]).length === 3) {
        return [true, game[0][0], [[0, 0], [1, 1], [2, 2]], 'addLineDiagonalRight' ]

    } else if ((game[2][0] === game[1][1] && game[1][1] === game[0][2]) && (game[2][0] + game[1][1] + game[0][2]).length === 3) {
        return [true, game[2][0], [[2, 0], [1, 1], [0, 2]], 'addLineDiagonalLeft' ]
    } else {
        return [false]
    }
}

export default DisplayAnnouncement;
export {CheckWin};