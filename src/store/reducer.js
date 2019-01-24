import * as actionTypes from './actions';

const initialState = {
    result: 5,
    startTime: 9,
    endTime: 17,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POPULATE_INITIAL_DATA:
            {
                console.log('popInitialData')
                let timeSlots = {};
                let i = state.startTime
                while (i < state.endTime) {
                    timeSlots = {
                        ...timeSlots,
                        [i]: {
                            reserved: false,
                            person: {
                                phone: null,
                                name: null
                            }
                        }
                    }
                    i++;
                }
                console.log('ignore: ' + timeSlots)

                return {
                    ...state,
                    timeSlots: timeSlots
                }
            }

        case actionTypes.ON_NAME_CHANGED:
            // console.log(action.payload)

            var reservedBoolean;
            if (action.payload.text == "") {
                reservedBoolean = false;
                console.log('false')
            }
            else {reservedBoolean = true;}



            var index = Object.keys(state.selectedTimeSlot)[0];

            var timeSlots =
            {
                ...state.timeSlots
            };
            timeSlots[index].person = {
                ...timeSlots[index].person,
                name: action.payload.text,
            }
            timeSlots[index] = {
                ...timeSlots[index],
                reserved: reservedBoolean,
            }

            // newPhone = action.text;
            return {
                ...state,
                timeSlots
            };

        case actionTypes.ON_PHONE_CHANGED:
            // console.log('PHONE');
            console.log(state);
            var reservedBoolean;
            if (action.payload.text === "") {
                reservedBoolean = false;
            }
            else {reservedBoolean = true;}

            var index = Object.keys(state.selectedTimeSlot)[0];

            var timeSlots =
            {
                ...state.timeSlots
            };

            timeSlots[index].person = {
                ...timeSlots[index].person,
                phone: action.payload.text,

            }
            timeSlots[index] = {
                ...timeSlots[index],
                reserved: reservedBoolean,
            }

            // newPhone = action.text;
            return {
                ...state,
                timeSlots
            }
        case actionTypes.TIME_SLOT_ITEM_PRESSED:

            return {
                ...state,
                selectedTimeSlot: {
                    [action.payload]: state.timeSlots[action.payload]
                }
            };
    }

    return state;
}

export default reducer;