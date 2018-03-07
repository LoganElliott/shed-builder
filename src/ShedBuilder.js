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
      ],
      selectedShed: null,
      extras: {
        selectedFloor: 'flatFloor',
        floors: {
          flatFloor: {
            type: 'flatFloor',
            quantity: 1,
            name: 'Flat Floor pack of 8'
          },
          recessedFloor: {
            type: 'recessedFloor',
            quantity: 0,
            name: 'Recessed Floor pack of 8'
          },
          woodenFloor: {
            type: 'woodenFloor',
            quantity: 0,
            name: 'Wooden Floor'
          },
          noFloor: {
            type: 'noFloor',
            quantity: 0,
            name: 'No Floor'
          },
        },
        accessories: {
          toolRack: {
            type: 'toolRack',
            include: false,
            quantity: 0,
            label: 'Tool Rack'
          },
          toolHook: {
            type: 'toolHook',
            include: false,
            quantity: 0,
            label: 'Tool Hook',
          },
          cabinHook: {
            type: 'cabinHook',
            include: false,
            quantity: 0,
            label: 'Cabin Hook',
          },
          shelving: {
            type: 'shelving',
            include: false,
            quantity: 0,
            label: 'Shelving',
          },
          lockingTHandle: {
            type: 'lockingTHandle',
            include: false,
            quantity: 0,
            label: 'Locking T Handle',
          },
          gmSecuridoor: {
            type: 'gmSecuridoor',
            include: false,
            quantity: 0,
            label: 'GM Securi-door',
          },
        }
      }
    };

    this.sendShed.bind(this);
    this.selectShed.bind(this);

    this.onRadioButtonChange.bind(this);
    this.updateCheck.bind(this);
    this.onFloorQuantityUpdate.bind(this);
    this.onAccessoriesQuantityUpdate.bind(this);
  }

  selectShed(shedId) {
    this.setState({selectedShed: shedId});
  }

  onRadioButtonChange(floorType) {
    this.setState((oldState) => {
      return {
        extras: {
          ...oldState.extras,
          selectedFloor: floorType,
        }
      };
    }, () => {
      console.log('radio change', this.state.extras.selectedFloor)

    });

  };

  updateCheck(checkboxId) {
    this.setState((oldState) => {
      return {
        extras:{
          ...oldState.extras,
          accessories: {
            ...oldState.extras.accessories,
            [checkboxId]: {
              ...oldState.extras.accessories[checkboxId],
              include: !oldState.extras.accessories[checkboxId].include,
            }
          }
        }
      }
    } , () => {


    });
  }

  onFloorQuantityUpdate (floorId, quantity) {
    this.setState((oldState) => {

      return {
        extras : {
          ...oldState.extras,
          floors: {
            ...oldState.extras.floors,
            [floorId]: {
              ...oldState.extras.floors[floorId],
              quantity: quantity,
            }
          }
        }
      };
    }, () => {
      console.log('quantity change',floorId, quantity)

    });
  }

  onAccessoriesQuantityUpdate (accessoryId, quantity) {
    this.setState((oldState) => {

      return {
        extras : {
          ...oldState.extras,
          accessories: {
            ...oldState.extras.accessories,
            [accessoryId]: {
              ...oldState.extras.accessories[accessoryId],
              quantity: quantity
            }
          }
        }
      };
    }, () => {
      console.log('quantity change accessory',accessoryId, quantity)

    });
  }

  async sendShed() {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append('Content-Type', 'application/json');

      const dataToSend = {extras: {}};
      dataToSend.extras.floors = this.state.extras.floors[this.state.extras.selectedFloor];
      dataToSend.extras.accessories = Object.keys(this.state.extras.accessories).reduce((accumulator, accessoryKey) => {
        const accessory = this.state.extras.accessories[accessoryKey];
        if(accessory.include && accessory.quantity > 0){
          accumulator.push(accessory);
          return accumulator;
        }
        return accumulator;
      }, []);
      dataToSend.selectedShed = this.state.selectedShed;

      const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({data: dataToSend})
      };
      const myRequest = new Request(`http://localhost:3001/shed-order`, myInit);
      await fetch(myRequest);
    } catch(e) {
      console.log('Unable to submit order', e)
    }

  };

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

    const redSquare = {
      backgroundColor: red,
      width: '70px',
      height: '10px',
      margin: '20px 0'
    };

    const sheds = this.state.sheds.map(shed => <Shed key={shed.id} isSelected={shed.id === this.state.selectedShed} shed={shed} onSelect={(shedId) => this.selectShed(shedId)}/>);

    return (
      <div style={container}>
        <div style={selectModelText}>
          Select Model & Size
        </div>
        <div style={redSquare}/>
        <div style={infoText}>
          Garden Master sheds come in a range of convenient pre-made sizes or can be <br/>
          customised to almost any size you need. Please start by selecting a size to suit you.
        </div>
        <div style={shedsStyle}>
          {sheds}
        </div>
        <div>
          <ExtrasPanel
            extras={this.state.extras}
            onRadioButtonChange={(event, floorType) => this.onRadioButtonChange(floorType)}
            updateCheck={(checkboxId) => this.updateCheck(checkboxId)}
            onFloorQuantityUpdate={(floorId, quantity) => this.onFloorQuantityUpdate(floorId, quantity)}
            onAccessoriesQuantityUpdate={(accessoryId, quantity) => this.onAccessoriesQuantityUpdate(accessoryId, quantity)}
          />
        </div>
        <div>
          <div style={submitButton} onClick={() => this.sendShed()}>
            SUBMIT
          </div>
        </div>
      </div>
    );
  }
}

export default ShedBuilder;
