import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import { red, green } from './colours';

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
      },
      listHeader: {
        display: 'flex',
        margin: '10px 0'
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
      quantityInput: {
        width: '30px',
        height: '24px',
        margin: '2px 0'
      },
      extraOptionsInputs: {
        display: 'flex',
      },
      radioButtonContainer: {
        flex: 1,
      },
      radioButton: {
        margin: '4px 0',
        textAlign: 'start',
      },
      checkboxContainer: {
        display: 'flex',
      },
      checkbox: {
        textAlign: 'start',
      },
    };

    return (
      <div>
        <div style={styles.addExtras}>Add Extras</div>
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
                <RadioButtonGroup name="floorType" defaultSelected="flatFloor">
                  <RadioButton
                    value="flatFloor"
                    label="Flat Floor pack of 8"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="recessedFloor"
                    label="Recessed Floor pack of 8"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="woodenFlor"
                    label="Wooden Floor"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="noFloor"
                    label="No Floor"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
              </div>
              <div style={styles.quantityInputContainer}>
                <input type='number' style={styles.quantityInput}
                />
                <input type='number' style={styles.quantityInput}
                />
                <input type='number' style={styles.quantityInput}
                />
                <input type='number' style={styles.quantityInput}
                />
              </div>
            </div>
          </div>
          <div style={styles.extrasTypeContainer}>
          <div style={styles.extrasSubHeading}>
              Accessories
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
              <div style={styles.checkboxContainer}>
                <Checkbox style={styles.checkbox} label="Tool Rack"/>
                <input type='number' style={styles.quantityInput}/>
              </div>
              <div style={styles.checkboxContainer}>
                <Checkbox style={styles.checkbox} label="Tool Hook (set of 4)" />
                  <input type='number' style={styles.quantityInput} />
                </div>
              <div style={styles.checkboxContainer}>
                <Checkbox style={styles.checkbox} label="Cabin Hook" />
                <input type='number' style={styles.quantityInput} />
              </div>
              <div style={styles.checkboxContainer}>
                <Checkbox style={styles.checkbox} label="Shelving" />
                <input type='number' style={styles.quantityInput} />
              </div>
              <div style={styles.checkboxContainer}>
                <Checkbox style={styles.checkbox} label="Locking T Handle" />
                <input type='number' style={styles.quantityInput} />
              </div>
              <div style={styles.checkboxContainer}>
                <Checkbox style={styles.checkbox} label="GM Securi-door" />
                <input type='number' style={styles.quantityInput} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtrasPanel;
