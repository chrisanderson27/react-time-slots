import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import TimeSlot from '../TimeSlot';
import Modal from '../UI/Modal/Modal';


let timeSlotList = []


class TimeSlots extends Component {
    state = {
        result: 0
    }

    componentWillMount() {
        this.props.populateTimeSlotData();
    }

    render() {

        let timeSlotItems = null;
        if (this.props.timeSlotData) {
            timeSlotItems = Object.keys(this.props.timeSlotData).map(item => (
                <div key={item}>
                    <TimeSlot details={item} timeSlotData={this.props.timeSlotData} itemClicked={this.props.timeSlotItemPressed}></TimeSlot>
                </div>
            ));

        }
        return (
            <Aux>
                <div className='container-fluid d-flex mx-auto justify-content-center m-10'>
                    <div className='row'>
                        <div className='col'>
                            <div className='text-center'>
                                <h1>Please select a time slot: </h1>
                            </div>

                            {timeSlotList}
                            {timeSlotItems}
                            <Modal onNameChange={this.props.onNameChange} timeSlotData={this.props.timeSlotData} selectedTime={this.props.selected} onPhoneChange={this.props.onPhoneChange}></Modal>

                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        res: state.result,
        endTime: state.endTime,
        timeSlotData: state.timeSlots,
        selected: state.selectedTimeSlot
    }
}

const mapDispathToProps = dispatch => {
    return {
        populateTimeSlotData: () => dispatch({
            type: actionTypes.POPULATE_INITIAL_DATA
        }),
        onSubPressed: (number) => dispatch({
            type: actionTypes.SUB,
            payload: number
        }),
        timeSlotItemPressed: (startTime) => dispatch(
            {
                type: actionTypes.TIME_SLOT_ITEM_PRESSED,
                payload: startTime
            }),
        onNameChange: (text) => dispatch(
            {
                type: actionTypes.ON_NAME_CHANGED,
                payload: {
                    text: text
                }
            }),
        onPhoneChange: (text) => dispatch(
            {
                type: actionTypes.ON_PHONE_CHANGED,
                payload: {
                    text: text,
                }
            })
    }
}

export default connect(mapStateToProps, mapDispathToProps)(TimeSlots);
