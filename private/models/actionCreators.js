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

export function addTenant(tenant) {
  return {
    type: 'ADD_TENANT',
    payload: { ...tenant }
  }
}
