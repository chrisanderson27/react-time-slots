import React, { Component } from 'react';
import styles from './Modal.module.css';
import Aux from '../../hoc/ReactAux';
let selected = "";
let phone = null;
let name = null;
let timeSlotInfo = null;
class Modal extends Component {

    handleNameChange = (event) => {
        this.props.onNameChange(event.target.value);
    }
    handlePhoneChange = (event) => {
        this.props.onPhoneChange(event.target.value);
    }

    formatTime(number) {
        let numberToConvert = Number(number);
        if (numberToConvert < 12) {
            numberToConvert += ':00 am'
        }
        else if (numberToConvert == 12) {
            numberToConvert += ':00 pm'
        }
        else {
            numberToConvert = numberToConvert - 12 + ':00 pm'
        }

        return numberToConvert;
    }

    render() {
        if (this.props.selectedTime) {
            selected = this.props.selectedTime;
            let selectedStartTime = (Object.keys(selected)[0]) + '';
            let endTime = +selectedStartTime + 1;
            timeSlotInfo = this.formatTime(selectedStartTime) + ' to ' + this.formatTime(endTime);
            name = <input id="nameField"
                onChange={this.handleNameChange}
                onBlur={this.handleNameChange}
                type='text' value={this.props.timeSlotData[selectedStartTime].person.name} />
            phone = <input id="phoneField"
                onChange={this.handlePhoneChange}
                onBlur={this.handlePhoneChange}
                type='number' value={this.props.timeSlotData[selectedStartTime].person.phone} />
        }
        return (
            <Aux>
                <div className="modal fade" id="timeSlotModal" tabIndex="-1" role="dialog" aria-labelledby="timeSlotModalLabel" aria-hidden="true" data-backdrop="static">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center mx-auto ">
                                <h4 className="modal-title mx-auto" id="timeSlotModalLabel">You've selected the time slot from <strong>{timeSlotInfo}</strong></h4>
                            </div>
                            <div className="modal-body d-flex align-items-center flex-column bd-highlight mb-3">
                                <div className='row'>
                                    <div className='col mx-auto text-center'>
                                        <h3 className='mb-4 mx-auto'>To reserve your apointment, please enter your contact information:</h3>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>

                                        <div className={styles.ModalInputFields}>
                                            <label> Name:</label > {name}
                                            <br />
                                            <br />
                                            <label>Phone:</label>  {phone}
                                        </div>
                                        <br />
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <i>*If BOTH your name and phone are not entered, this time slot will not be marked as reserved.</i>
                                <button type="button" className="btn btn-success" onClick={() => this.close()} data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }

    close = () => {
        document.getElementById("phoneField").value = '';
        document.getElementById("nameField").value = '';
    }
}


export default Modal;