import React from 'react'

const OpeningHours = () => {
    const GET_STATUS = {
        COLOR: {
            RED: 'dotRed',
            GREEN: 'dotGreen'
        }
    }
    const getTime = time => parseFloat(time.split(":")[0] + "." + (time.split(":")[1] < 10 ? "0" + time.split(":")[1] : time.split(":")[1]));
    const getOpeningTime = () => {
        const open = '12:30'; // Time must me  HH:MM
        const close = '23:00'; // Time must me  HH:MM

        const currentDate = new Date();
        const currentTime = currentDate.getHours() + "." + (currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes());
        return currentTime >= getTime(open) && currentTime <= getTime(close) ? true : false;
    }

    const getColorStatus = () => getOpeningTime() ? GET_STATUS.COLOR.GREEN : GET_STATUS.COLOR.RED

    return (
        <div>
            <div className="Indicator"><span className={`${getColorStatus()}`}></span><span>Opening Hours</span></div>
        </div>
    )
}

export default OpeningHours;
