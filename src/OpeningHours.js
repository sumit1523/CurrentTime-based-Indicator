import React from 'react'

const OpeningHours = () => {
    const GET_STATUS = {
        COLOR: {
            RED: 'dotRed',
            GREEN: 'dotGreen'
        }
    }
    const getOpeningTime = () => {
        const open = '08:30'; // Time must me  HH:MM
        const close = '20:10'; // Time must me  HH:MM
        
        const currentDate = new Date();
        let currentTimeHours = currentDate.getHours() < 10 ? "0" + currentDate.getHours() : currentDate.getHours();
        let currentTimeMinutes = currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
        const currentTime = currentTimeHours + "." + currentTimeMinutes;
        console.log("current Time - " + currentTime);

        const openTime = open.split(":")[0] + "." + open.split(":")[1];
        console.log("open Time - " + openTime);

        const closeTime = close.split(":")[0] + "." + close.split(":")[1];
        console.log("close Time - " + closeTime);

        if (currentTime >= openTime && currentTime <= closeTime) {
            console.log("OPEN");
            return true;
        } else {
            console.log("CLOSE");
            return false;
        }
    }
    const getColorStatus = () => getOpeningTime() ? GET_STATUS.COLOR.GREEN : GET_STATUS.COLOR.RED

    return (
        <div>
            <div className="Indicator"><span className={`${getColorStatus()}`}></span><span>Working Hours</span></div>
        </div>
    )
}

export default OpeningHours;
