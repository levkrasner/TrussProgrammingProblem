import UUID from 'uuid-js';


function emptyTenant() {
  return {
    uuid: UUID.create().toString(),
    name: '',
    address: '',
    phoneNumber: '',
    dateTime: '2016-06-06',
  };
}
      
// Reducer
export const tenant = (state, action) => {
  switch (action.type) {
    // Setters
    case 'SET_NAME':
      return Object.assign({}, state, {
        name: action.payload
      });
    case 'SET_ADDRESS':
      return Object.assign({}, state, {
        address: action.payload
      });
    case 'SET_PHONENUMBER':
      return Object.assign({}, state, {
        phoneNumber: action.payload
      });
    case 'SET_DATETIME':
      return Object.assign({}, state, {
        dateTime: action.payload
      });
    case 'SET_TENANT': 
      return state;
    default:
      return emptyTenant();
  }
};
   
// Action Creators
export function setName(name) {
  return {
    type: 'SET_NAME',  
    payload: name,
  };
}
export function setAddress(address) {
  return {
    type: 'SET_ADDRESS',  
    payload: address,
  };
}
export function setPhoneNumber(phoneNumber) {
  return {
    type: 'SET_PHONENUMBER',  
    payload: phoneNumber,
  };
}
export function setDateTime(dateTime) {
  return {
    type: 'SET_DATETIME',  
    payload: dateTime,
  };
}
export function setTenant(state) {
  return {
    type: 'SET_TENANT',
    payload: state,
  };
}
export function blankTenant() {
  return {
    type: 'BLANK_TENANT',
    payload: null,
  };
}
