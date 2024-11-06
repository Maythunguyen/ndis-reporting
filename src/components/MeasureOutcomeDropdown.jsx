import { useState } from 'react';
import { Tooltip, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { measureOutcomes } from '../data/measureOutcomes';

const MeasureOutcomeDropdown = () => {
    const [selectedOutcome, setSelectedOutcome] = useState('');

    const handleChange = (event) => {
        setSelectedOutcome(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="measure-outcome-label">Select Measure Outcome</InputLabel>
            <Select
                labelId="measure-outcome-label"
                id="measure-outcome-select"
                value={selectedOutcome}
                onChange={handleChange}
                label="Select Measure Outcome"
            >
                {measureOutcomes.map((outcome) => (
                    <MenuItem
                        key={outcome.name}
                        value={outcome.name}
                    >
                        <Tooltip title={outcome.definition} placement="right" arrow>
                            <span>{outcome.name}</span> 
                        </Tooltip>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MeasureOutcomeDropdown;
