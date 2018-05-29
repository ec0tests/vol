import React, { Component } from "react";
import './Calendar.css';
import Calendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class App extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        events: this.props.fechas
    };

    render() {
        return (
                <Calendar
                    selectable

                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    style={{ height: "100vh" }}
                   /* onSelectEvent={event => alert(event.title)}
                    onSelectSlot={slotInfo =>
                        alert(
                            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                            `\nend: ${slotInfo.end.toLocaleString()}` +
                            `\naction: ${slotInfo.action}`
                        )
                    }*/
                    onSelectEvent={this.props.onselect_event}
                    onSelectSlot={this.props.onselect_slot}
                />
        );
    }
}

export default App;