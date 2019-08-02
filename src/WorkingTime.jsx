import React from 'react'

const OpeningHours = () => {
    const GET_STATUS = {
        COLOR: {
            RED: 'dotRed',
            GREEN: 'dotGreen'
        },
    }
    const TIME = {
        OPENINGHOURS: {
            HOURS: 1,
            MINUTES: 30
        },
        CLOSINGHOURS: {
            HOURS: 12,
            MINUTES: 0
        }
    }

    const getActiveTime = (time, baseTime) => {
        let workingTime = new Date(baseTime.getTime());
        workingTime.setHours(time.HOURS);
        workingTime.setMinutes(time.MINUTES);
        return workingTime;
    };

    const getOpeningTime = () => {
        const currentTime = new Date();
        return currentTime >= getActiveTime(TIME.OPENINGHOURS, currentTime) && currentTime <= getActiveTime(TIME.CLOSINGHOURS, currentTime);
    }
    const getColorStatus = () => getOpeningTime() ? GET_STATUS.COLOR.GREEN : GET_STATUS.COLOR.RED

    return (
        <div>
            <div className="Indicator"><span className={`${getColorStatus()}`}></span><span>Working Hours</span></div>
        </div>
    )
}

export default OpeningHours;
