import React from 'react';
import Select from 'react-select';
import './React-select.css';
import Experiencia_adm from "../../adm_experiencias/Experiencias_adm";
class React_select extends React.Component {
    state = {
        selectedOption: '',
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
        }
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                name="form-field-name"

                value={selectedOption}
                onChange={this.handleChange}
                options={[
                    { value: 'romantico', label: 'Romántico' },
                    { value: 'aventurero', label: 'Aventurero' },
                ]}
            />
        );
    }
}

export default React_select;