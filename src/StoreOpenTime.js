import React from 'react'

const StoreOpenTime = () => {
    const GET_STATUS = {

        TIME: {
            OPEN: 18,
            CLOSE: 7
        },

        COLOR: {
            RED: 'dotRed',
            GREEN: 'dotGreen'
        }
    }
    const getOpeningTime = () => {
        const currentHour = new Date().getHours();
        return currentHour > GET_STATUS.TIME.OPEN && currentHour < GET_STATUS.TIME.CLOSE
    }
    const getColorStatus = () => getOpeningTime() ? GET_STATUS.COLOR.GREEN : GET_STATUS.COLOR.RED

    return (
        <div>
            <div className="Indicator"><span className={`${getColorStatus()}`}></span><span>Store</span></div>
        </div>
    )
}


export default StoreOpenTime;
