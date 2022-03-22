import Square from "./Square";
import React from "react";
import PropTypes from "prop-types";
import "./Board.css"

export default class Board extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = squareName => {
    this.props.clickHandler(squareName);
  };

  render() {
    return (
      <div className="component-square-panel">
        <div>
          <Square name="h1" clickHandler={this.handleClick} light piece="rook-black"/>
          <Square name="h2" clickHandler={this.handleClick} piece="knight-black"/>
          <Square name="h3" clickHandler={this.handleClick} light piece="bishop-black"/>
          <Square name="h4" clickHandler={this.handleClick} piece="queen-black"/>
          <Square name="h5" clickHandler={this.handleClick} light piece="king-black"/>
          <Square name="h6" clickHandler={this.handleClick} piece="bishop-black"/>
          <Square name="h7" clickHandler={this.handleClick} light piece="knight-black"/>
          <Square name="h8" clickHandler={this.handleClick} piece="rook-black"/>
        </div>
        <div>
          <Square name="g1" clickHandler={this.handleClick} piece="pawn-black"/>
          <Square name="g2" clickHandler={this.handleClick} light piece="pawn-black"/>
          <Square name="g3" clickHandler={this.handleClick} piece="pawn-black"/>
          <Square name="g4" clickHandler={this.handleClick} light piece="pawn-black"/>
          <Square name="g5" clickHandler={this.handleClick} piece="pawn-black"/>
          <Square name="g6" clickHandler={this.handleClick} light piece="pawn-black" />
          <Square name="g7" clickHandler={this.handleClick} piece="pawn-black"/>
          <Square name="g8" clickHandler={this.handleClick} light piece="pawn-black"/>
        </div>
        <div>
          <Square name="f1" clickHandler={this.handleClick} light />
          <Square name="f2" clickHandler={this.handleClick} />
          <Square name="f3" clickHandler={this.handleClick} light />
          <Square name="f4" clickHandler={this.handleClick} />
          <Square name="f5" clickHandler={this.handleClick} light />
          <Square name="f6" clickHandler={this.handleClick} />
          <Square name="f7" clickHandler={this.handleClick} light />
          <Square name="f8" clickHandler={this.handleClick} />
        </div>
        <div>
          <Square name="e1" clickHandler={this.handleClick} />
          <Square name="e2" clickHandler={this.handleClick} light />
          <Square name="e3" clickHandler={this.handleClick} />
          <Square name="e4" clickHandler={this.handleClick} light />
          <Square name="e5" clickHandler={this.handleClick} />
          <Square name="e6" clickHandler={this.handleClick} light />
          <Square name="e7" clickHandler={this.handleClick} />
          <Square name="e8" clickHandler={this.handleClick} light />
        </div>
        <div>
          <Square name="d1" clickHandler={this.handleClick} light />
          <Square name="d2" clickHandler={this.handleClick} />
          <Square name="d3" clickHandler={this.handleClick} light />
          <Square name="d4" clickHandler={this.handleClick} />
          <Square name="d5" clickHandler={this.handleClick} light />
          <Square name="d6" clickHandler={this.handleClick} />
          <Square name="d7" clickHandler={this.handleClick} light />
          <Square name="d8" clickHandler={this.handleClick} />
        </div>
        <div>
          <Square name="c1" clickHandler={this.handleClick} />
          <Square name="c2" clickHandler={this.handleClick} light />
          <Square name="c3" clickHandler={this.handleClick} />
          <Square name="c4" clickHandler={this.handleClick} light />
          <Square name="c5" clickHandler={this.handleClick} />
          <Square name="c6" clickHandler={this.handleClick} light />
          <Square name="c7" clickHandler={this.handleClick} />
          <Square name="c8" clickHandler={this.handleClick} light />
        </div>
        <div>
          <Square name="b1" clickHandler={this.handleClick} light piece="pawn-white" />
          <Square name="b2" clickHandler={this.handleClick} piece="pawn-white" />
          <Square name="b3" clickHandler={this.handleClick} light piece="pawn-white" />
          <Square name="b4" clickHandler={this.handleClick} piece="pawn-white" />
          <Square name="b5" clickHandler={this.handleClick} light piece="pawn-white" />
          <Square name="b6" clickHandler={this.handleClick} piece="pawn-white" />
          <Square name="b7" clickHandler={this.handleClick} light piece="pawn-white" />
          <Square name="b8" clickHandler={this.handleClick} piece="pawn-white" />
        </div>
        <div>
          <Square name="a1" clickHandler={this.handleClick} piece="rook-white"/>
          <Square name="a2" clickHandler={this.handleClick} light piece="knight-white"/>
          <Square name="a3" clickHandler={this.handleClick} piece="bishop-white"/>
          <Square name="a4" clickHandler={this.handleClick} light piece="queen-white"/>
          <Square name="a5" clickHandler={this.handleClick} piece="king-white"/>
          <Square name="a6" clickHandler={this.handleClick} light piece="bishop-white"/>
          <Square name="a7" clickHandler={this.handleClick} piece="knight-white"/>
          <Square name="a8" clickHandler={this.handleClick} light piece="rook-white"/>
        </div>
      </div>
    );
  }
}