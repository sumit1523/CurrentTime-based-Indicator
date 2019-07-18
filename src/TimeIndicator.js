import React, { Component } from 'react'

export default class TimeIndicator extends Component {
    state = {
        greeting: ''
    };

    times = {
        noon: 12,
        evening: 18
    };

    setMessage = () => {
        const messageMorning = <div className="Indicator"><span className="dotBlue"></span><span>Good Morning</span></div>;
        const messageAfternoon = <div className="Indicator"><span className="dotGrey"></span><span>Good Afternoon</span></div>;
        const messageEvening = <div className="Indicator"><span className="dotGreen"></span><span>Good Evening</span></div>;
        const currentHour = new Date().getHours();
        console.log(new Date());
        this.setState({
            greeting: currentHour < this.times.noon ?
                messageMorning :
                (currentHour < this.times.evening ?
                    messageAfternoon :
                    messageEvening)
        })

    };

    componentDidMount() {
        this.setMessage();
    }

    render() {
        const { greeting } = this.state;

        return (
            <div >
                {greeting}
            </div>
        )
    }
}
