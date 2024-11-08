import { useState } from 'react';
import { FormControl, Select, MenuItem, Tooltip } from '@mui/material';
import { measureOutcomes } from '../data/measureOutcomes';

const MeasureOutcomeDropdown = () => {
    const [selectedOutcome, setSelectedOutcome] = useState('');

    const handleChange = (event) => {
        setSelectedOutcome(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <Select
                value={selectedOutcome}
                onChange={handleChange}
                displayEmpty
                sx={{
                    width: '100%',
                    '& .MuiSelect-select': {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }
                }}
            >
                <MenuItem value="">Select Measure Outcome</MenuItem>
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