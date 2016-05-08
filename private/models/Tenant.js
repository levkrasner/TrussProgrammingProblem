import UUID from 'uuid-js';


export function blankTenant() {
  return {
    uuid: UUID.create().toString(),
    dateTime: '2016-06-06',
    name: '',
    address: '',
    phoneNumber: '',
  };
}
      
// reducers
export const tenant = (state, action) => {
  switch (action.type) {
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
      return blankTenant();
  }
}
    
export const tenants = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TENANT':
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}
