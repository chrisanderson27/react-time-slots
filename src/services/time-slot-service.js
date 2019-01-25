export const formatTime = (number) => {
    let numberToConvert = Number(number);
    if (numberToConvert < 12) {
        numberToConvert += ':00am'
    }
    else if (numberToConvert == 12) {
        numberToConvert += ':00pm'
    }
    else {
        numberToConvert = numberToConvert - 12 + ':00pm'
    }

    return numberToConvert;
}