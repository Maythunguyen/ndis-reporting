export const initialState = {
    address: '',
    city: '',
    state: '',
    country: '',
    postcode: '',
};

export const addressReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ADDRESS':
            return { ...state, address:action.payload };
        case 'SET_CITY':
            return { ...state, city:action.payload };
        case 'SET_STATE':
            return { ...state, state:action.payload };
        case 'SET_COUNTRY':
            return { ...state, country:action.payload };
        case 'SET_POSTCODE':
            return { ...state, postcode:action.payload };
        default:
            return state;
    }
}

