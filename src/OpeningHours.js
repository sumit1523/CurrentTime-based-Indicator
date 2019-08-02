import React from 'react'

const OpeningHours = () => {
    const GET_STATUS = {
        COLOR: {
            RED: 'dotRed',
            GREEN: 'dotGreen'
        }
    }
    const getOpeningTime = () => {
        const open = '12:30'; // Time must me  HH:MM
        const close = '23:00'; // Time must me  HH:MM

        const currentDate = new Date();
        let currentTimeHours = currentDate.getHours() < 10 ? "0" + currentDate.getHours() : currentDate.getHours();
        let currentTimeMinutes = currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
        const currentTime = currentTimeHours + "." + currentTimeMinutes;

        const openTime = open.split(":")[0] + "." + open.split(":")[1];

        const closeTime = close.split(":")[0] + "." + close.split(":")[1];

        return currentTime >= openTime && currentTime <= closeTime ? true : false;
    }
    const getColorStatus = () => getOpeningTime() ? GET_STATUS.COLOR.GREEN : GET_STATUS.COLOR.RED

    return (
        <div>
            <div className="Indicator"><span className={`${getColorStatus()}`}></span><span>Opening Hours</span></div>
        </div>
    )
}

export default OpeningHours;
