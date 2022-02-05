import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className={props.winner ? "square-winner" : "square"} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i, isWinner) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                winner={isWinner}
            />
        );
    }

    render() {
        let boardSquares = [];
        let winningSquares = this.props.winnerInfo ? this.props.winnerInfo.winningSquares : [];
        for(let row = 0; row < 3; row++){
            let boardRow = [];
            for(let col = 0; col < 3; col++){
                boardRow.push(<span key={(row * 3) + col}>{this.renderSquare((row * 3) + col, winningSquares.includes((row * 3) + col))}</span>);
            }
            boardSquares.push(<div className="board-row" key={row}>{boardRow}</div>);
        }

        return (
        <div>
            {boardSquares}
        </div>
        );
    }
}

class Game extends React.Component {

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (this.state.winnerInfo || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        const winnerInfo = calculateWinner(squares);
        this.setState({ 
            history: history.concat([{squares: squares, lastSquare: i}]),
            stepNumber: history.length, 
            xIsNext: !this.state.xIsNext,
            winnerInfo: winnerInfo,
        });
    }

    handleSortClick() {
        this.setState({sortAsc: !this.state.sortAsc,})
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                lastSquare: null
            }],
            stepNumber: 0,
            xIsNext: true,
            sortAsc: true,
            winnerInfo: null,
        };
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
          
        let sortedHistory = this.state.sortAsc ? history :  history.slice(0).reverse();
        const moves = sortedHistory.map((step, move) => {
            let adjustedMove = this.state.sortAsc ? move : Math.abs(move - sortedHistory.length +1)
            let desc = adjustedMove ?
                `Go to move # ${adjustedMove} (${(step.lastSquare % 3) + 1 },${Math.floor(step.lastSquare / 3) + 1})` 
                :
                'Go to game start';
            if (adjustedMove === this.state.stepNumber)
                desc = <b>{desc}</b>
            return (
                <li key={adjustedMove}>
                    <button onClick={() => this.jumpTo(adjustedMove)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (this.state.winnerInfo) {
            status = 'Winner: ' + this.state.winnerInfo.winner;
        }
        else if (current.squares.every(v => v !== null)) {
            status = "DRAW!"
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O') 
            + ' Step number: ' + this.state.stepNumber;
        };
        
        return (
            <div className="game">
                <div className="game-board">
                    <Board winnerInfo={this.state.winnerInfo} squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div><span>{status}</span><span><button onClick={() => this.handleSortClick()}>sort</button></span></div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {winningSquares: lines[i], winner: squares[a]};
        }
    }
    return null;
}
