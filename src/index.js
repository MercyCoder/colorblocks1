import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
class Square extends React.Component {
    state = {
        color: 'red'
      }
      onChange = (event) => {
          let color1 = Math.floor(Math.random() * 255);
          let color2 = Math.floor(Math.random() * 255);
          let color3 = Math.floor(Math.random() * 255);
          let output = `RGB(${color1},${color2},${color3})`;
          event.target.backgroundColor= output;
         this.setState({ color: output });
      }
    
    render() {
      return (
        <button className="square" onClick='backgroundColor: output'>
          {this.state}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
}
  
  
  // ========================================
  class SampleApp extends React.Component {
    state = {
      color: 'red'
    }
    onChange = (event) => {
        let color1 = Math.floor(Math.random() * 255);
        let color2 = Math.floor(Math.random() * 255);
        let color3 = Math.floor(Math.random() * 255);
        let output = `RGB(${color1},${color2},${color3})`;
        event.target.backgroundColor= output;
       this.setState({ color: output });
    }
    renderSquare(i) {
      return (
        <div >
        <div class='square' id='one' style={{ backgroundColor: this.state.color }} 
         onMouseOver={this.onChange}>{this.state.color}</div>
        <div class='square' id='two' style={{ backgroundColor: this.state.color }} 
         onMouseOver={this.onChange}></div>
        </div>
      );
    }
     
    render() {
        const status = '';
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="container">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
              {this.renderSquare(10)}
              {this.renderSquare(11)}
              {this.renderSquare(12)}
              {this.renderSquare(13)}
              {this.renderSquare(14)}
              {this.renderSquare(15)}
              {this.renderSquare(16)}
              {this.renderSquare(17)}
              {this.renderSquare(18)}
              {this.renderSquare(19)}
              {this.renderSquare(20)}
              {this.renderSquare(21)}
              {this.renderSquare(22)}
              {this.renderSquare(23)}
              {this.renderSquare(24)}
              {this.renderSquare(25)}
              {this.renderSquare(26)}
              {this.renderSquare(27)}
              {this.renderSquare(28)}
              {this.renderSquare(29)}
              {this.renderSquare(30)}
              {this.renderSquare(31)}
            </div>
          </div>
        );
      }
  }
  ReactDOM.render(
    <SampleApp />,
    document.getElementById('root')
  );
  