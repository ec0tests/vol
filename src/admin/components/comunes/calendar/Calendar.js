import React, { Component } from "react";
import './Calendar.css';
import Calendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class App extends Component {
    state = {
        events: [
            {
                start: new Date('2018-05-10'),
                end: new Date('2018-05-10'),

                title: "Reserva1"
            }
            ,
            {
                start: new Date('2018-06-10'),
                end: new Date('2018-06-10'),

                title: "Reserva2"
            },
            {
                start: new Date('2018-06-12'),
                end: new Date('2018-06-12'),

                title: "Reserva3"
            },
            {
                start: new Date('2018-06-16'),
                end: new Date('2018-06-16'),

                title: "Reserva4"
            },

        ]
    };

    render() {
        return (
                <Calendar
                    selectable

                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    style={{ height: "100vh" }}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={slotInfo =>
                        alert(
                            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                            `\nend: ${slotInfo.end.toLocaleString()}` +
                            `\naction: ${slotInfo.action}`
                        )
                    }
                />
        );
    }
}

export default App;