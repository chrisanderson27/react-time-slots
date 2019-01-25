import styles from './TimeSlot.module.css'
import Aux from './hoc/ReactAux';
import React, { Component } from 'react';

class TimeSlot extends Component {

    render() {

        let id = this.props.details;
        let hasAppointment = false;
        let reserved = <div> Available</div>;

        if (this.props.timeSlotData[id].reserved) {
            reserved = <div> Reserved </div>;
            hasAppointment = true;
        }
        return (
            <Aux>

                <div className="animated fallDown">
                    <li className={hasAppointment ? styles.Reserved : styles.Open}>

                        <div className='container d-flex'>

                            <div className='row'>
                                <div className='col'>
                                    Time slot from <strong>{this.props.details}:00 </strong>to <strong>{+this.props.details + 1}:00</strong>
                                    <br />
                                    <br />
                                    <h5>{reserved}</h5>
                                </div>
                            </div>


                            <div className='col align-self-center'>
                                <button
                                    onClick={() => this.props.itemClicked(this.props.details)}
                                    type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#timeSlotModal">
                                    Select
                                </button>
                            </div>
                        </div>

                    </li>
                </div>
            </Aux>
        );
    }
}
export default TimeSlot;