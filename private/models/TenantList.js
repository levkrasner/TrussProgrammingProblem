
// Action Creators
export function addTenant(tenant) {
  return {
    type: 'ADD_TENANT',
    payload: tenant,
  };
}

export function removeTenant(index) {
  return {
    type: 'REMOVE_TENANT',
    payload: index,
  };
}

// Reducer
export const tenantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TENANT':
      return [
        ...state,
        action.payload,
      ];
    case 'REMOVE_TENANT':
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
};

