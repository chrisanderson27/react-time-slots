import styles from './TimeSlot.module.css'
import Aux from './hoc/ReactAux';
import React from 'react';

const formatTime = (number) => {
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

const TimeSlot = (props) => {
    let id = props.details;
    let hasAppointment = false;
    let reserved = <div> Available</div>;

    if (props.timeSlotData[id].reserved) {
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
                                Time slot from <strong>{props.details}:00 </strong>to <strong>{+props.details + 1}:00</strong>
                                <br />
                                <br />
                                <h5>{reserved}</h5>
                            </div>
                        </div>

                        <div className='col align-self-center'>
                            <button
                                onClick={() => props.itemClicked(props.details)}
                                type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#timeSlotModal">
                                Select
                                </button>
                        </div>
                    </div>

                </li>
            </div>
        </Aux>
    );
};

export default TimeSlot;