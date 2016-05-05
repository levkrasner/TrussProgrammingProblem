import UUID from 'uuid-js';

// Action Creators
export function setDateTime(dateTime) {
  return {
    type: 'SET_DATETIME',  
    payload: dateTime,
  };
}

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

export function createLease(lease) {
  return {
    type: 'CREATE_LEASE',
    payload: { ...lease }
  }
}

export function blankLease() {
  return {
    uuid: UUID.create().toString(),
    dateTime: '2016-06-06',
    name: '',
    address: '',
    phoneNumber: '',
  };
}
      
// reducers
export const lease = (state, action) => {
  switch (action.type) {
    case 'CREATE_LEASE':
      return {
        uuid: UUID.create().toString(),
        dateTime: action.payload.dateTime,
        name: action.payload.name,
        address: action.payload.address,
        phoneNumber: action.payload.phoneNumber,
      }
    // Setters
    case 'SET_DATETIME':
      return Object.assign({}, state, {
        dateTime: action.payload
      })
    case 'SET_NAME':
      return Object.assign({}, state, {
        name: action.payload
      })
    case 'SET_ADDRESS':
      return Object.assign({}, state, {
        address: action.payload
      })
    case 'SET_PHONENUMBER':
      return Object.assign({}, state, {
        phoneNumber: action.payload
      })
    default:
      return blankLease();
  }
}
    
export const leases = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_LEASE':
      return [
        ...state,
        lease(undefined, action)
      ]
    default:
      return state
  }
}
