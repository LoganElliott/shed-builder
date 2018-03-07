import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import { green, grey, red } from './colours';

class ExtrasPanel extends Component {
  render() {
    const styles = {
      addExtras: {
        fontWeight: 'bold',
        fontSize: '40px',
        textAlign: 'start',
        margin: '20px',
      },
      extrasSubHeading: {
        borderStyle: 'none none solid none',
        textAlign: 'start',
        fontWeight: 'bold',
        padding: '20px 0'
      },
      listHeader: {
        display: 'flex',
        margin: '20px 0',
        color: grey,
        fontSize: '13px'
      },
      extrasContainer: {
        display: 'flex',
      },
      extrasTypeContainer: {
        flex: 0.5,
        margin: '0 20px',
      },
      buffer: {
        flex: 1,
      },
      quantityInputContainer: {
        display: 'flex',
        flexDirection: 'column'
      },
      quantity: {
        width: '40px',
        margin: '2px 0',
        textAlign: 'right',
      },
      quantityInput: {
        textAlign: 'right',
      },
      extraOptionsInputs: {
        display: 'flex',
      },
      radioButtonContainer: {
        flex: 1,
      },
      radioButton: {
        margin: '2px 0',
        textAlign: 'start',
        height: '48px',
      },
      checkboxContainer: {
        display: 'flex',
      },
      checkbox: {
        textAlign: 'start',
      },
      iconColour: {
        color: green,
        fill: green,
        alignSelf: 'center'
      },
      underlineColour: {
        borderColor: green,
      },
      radioButtonLabel: {
        fontWeight: 'bold',
        alignSelf: 'center'
      },
      redSquare: {
        backgroundColor: red,
        width: '70px',
        height: '10px',
        margin: '20px'
      }
    };

    return (
      <div>
        <div style={styles.addExtras}>Add Extras</div>
        <div style={styles.redSquare}/>
        <div style={styles.extrasContainer}>
          <div style={styles.extrasTypeContainer}>
            <div style={styles.extrasSubHeading}>
              ADD A FLOOR (OPTIONAL)
            </div>
            <div style={styles.listHeader}>
              <div>
                Floor Type
              </div>
              <div style={styles.buffer}/>
              <div>
                Quantity
              </div>
            </div>
            <div style={styles.extraOptionsInputs}>
              <div style={styles.radioButtonContainer}>
                <RadioButtonGroup name="floorType" defaultSelected="flatFloor" onChange={(event, floorType) => this.props.onRadioButtonChange(event, floorType)}>
                  {Object.keys(this.props.extras.floors).map((key) => {
                    const floor = this.props.extras.floors[key];
                    return <RadioButton
                      key={floor.type}
                      value={floor.type}
                      label={floor.name}
                      style={styles.radioButton}
                      iconStyle={styles.iconColour}
                      labelStyle={styles.radioButtonLabel}
                    />
                  })}
                </RadioButtonGroup>
              </div>
              <div style={styles.quantityInputContainer}>
                {Object.keys(this.props.extras.floors).map((key) => {
                  const floor = this.props.extras.floors[key];

                  return  <TextField
                    key={floor.type}
                    id={floor.type}
                    disabled={this.props.extras.selectedFloor !== floor.type}
                    onChange={(event, quantity) => this.props.onFloorQuantityUpdate(floor.type, quantity)}
                    value={floor.quantity}
                    type='number'
                    style={styles.quantity}
                    inputStyle={styles.quantityInput}
                    min={0}
                    underlineFocusStyle={styles.underlineColour}
                  />
                })}
              </div>
            </div>
          </div>
          <div style={styles.extrasTypeContainer}>
          <div style={styles.extrasSubHeading}>
              ACCESSORIES
            </div>
            <div style={styles.listHeader}>
            <div>
                Accessories
              </div>
              <div style={styles.buffer}/>
              <div>
                Quantity
              </div>
            </div>
            <div>
              {Object.keys(this.props.extras.accessories).map((key) => {
                const accessory = this.props.extras.accessories[key];

                return <div key={accessory.type} style={styles.checkboxContainer}>
                  <Checkbox
                    style={styles.checkbox}
                    label={accessory.label}
                    checked={accessory.include}
                    onCheck={() => this.props.updateCheck(accessory.type)}
                    iconStyle={styles.iconColour}
                  />
                  <TextField
                    id={accessory.type}
                    value={accessory.quantity}
                    onChange={(event, quantity) => this.props.onAccessoriesQuantityUpdate(accessory.type, quantity)}
                    type='number'
                    style={styles.quantity}
                    inputStyle={styles.quantityInput}
                    min={0}
                    underlineFocusStyle={styles.underlineColour}
                  />
                </div>
              })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtrasPanel;
