import React, { Component } from 'react';
import Shed from './Shed'
import ExtrasPanel from './ExtrasPanel';
import { red } from './colours';

class ShedBuilder extends Component {
  constructor(props) {
   super(props);
    this.state = {
      sheds: [
        {
          id: 'GM3838',
          width: 3770,
          depth: 3770,
          height: 1830,
        },
        {
          id: 'GM3830',
          width: 3770,
          depth: 3030,
          height: 1830,
        },
        {
          id: 'GM3823',
          width: 3770,
          depth: 2280,
          height: 1830,
        },
        {
          id: 'GM3818',
          width: 3770,
          depth: 1830,
          height: 1980,
        },
        {
          id: 'GM3815',
          width: 3770,
          depth: 1530,
          height: 1980,
        },
        {
          id: 'GM3033',
          width: 3030,
          depth: 3330,
          height: 1830,
        },
        {
          id: 'GM3030',
          width: 3030,
          depth: 3030,
          height: 1830,
        },
        {
          id: 'GM3023',
          width: 3030,
          depth: 2280,
          height: 1830,
        }
      ]
    }
  }

  render() {

    const container = {
      margin: '60px 180px'
    };

    const shedsStyle = {
      display: 'flex',
      flexWrap: 'wrap'
    };

    const selectModelText = {
      display: 'flex',
      fontWeight: 'bold',
      fontSize: '40px',
      marginBottom: "15px"
    };

    const infoText = {
      textAlign: 'start',
      marginBottom: '40px'
    };

    const submitButton = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: red,
      width: '300px',
      height: '50px',
      fontWeight: 'bold',
      fontSize: '20px',
      color: 'white',
    };

    const onSelect = (selectedId) => {
      this.setState({selectedId})
    };

    const sheds = this.state.sheds.map(shed => <Shed key={shed.id} isSelected={shed.id === this.state.selectedId} shed={shed} onSelect={onSelect}/>);

    return (
      <div style={container}>
        <div style={selectModelText}>
          Select Model & Size
        </div>
        <div style={infoText}>
          Garden Master sheds come in a range of convenient pre-made sizes or can be <br/>
          customised to almost any size you need. Please start by selecting a size to suit you.
        </div>
        <div style={shedsStyle}>
          {sheds}
        </div>
        <div>
          <ExtrasPanel/>
        </div>
        <div>
          <div style={submitButton}>
            SUBMIT
          </div>
        </div>
      </div>
    );
  }
}

export default ShedBuilder;
