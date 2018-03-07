import React, { Component } from 'react';
import { red, green } from './colours';
import indicator from './indicator.svg';

class Shed extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const shedStyle = {
      display: 'flex',
      flexDirection: 'column',
    };

    const indicatorStyle = {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: green,
      padding: '10px'
    };

    const selectButtonStyle = {
      padding: '5px',
      margin: '10px 50px',
      color: 'white',
      backgroundColor: `${this.props.isSelected ? green : red}`
    };

    return (
      <div style={shedStyle}>
        <div>
          { this.props.isSelected ?
            <div style={indicatorStyle}>
              <img src={indicator}/>
            </div>
            : null
          }
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/' + this.props.shed.id + '.png '} alt={this.props.shed.id}/>
        </div>
        <div>
          {this.props.shed.id}
        </div>
        <div>
          {this.props.shed.width} (w) x {this.props.shed.depth} (d) x {this.props.shed.height} (h)
        </div>
        <div style={selectButtonStyle} onClick={() => this.props.onSelect(this.props.shed.id)}>
          { this.props.isSelected ? 'Selected' : 'Select' }
        </div>
      </div>
    );
  }
}

export default Shed;
