import { addTenant, } from './models/TenantList';

const sampleData = [
  { uuid: 1, name: 'Griffin Smith', address: 'Somewhere', phoneNumber: '555-463-3511', dateTime: '2016-06-06', },
  { uuid: 2, name: 'Joe Smith', address: 'Somewhere else', phoneNumber: '555-468-1111', dateTime: '2016-07-01', },
  { uuid: 3, name: 'Amy Smith', address: 'No where', phoneNumber: '555-418-3213', dateTime: '2016-07-18', },
];

export function prePopulate(dispatch) {
  // prepopulate the table
  sampleData.forEach(
    (datum) => dispatch(addTenant(datum))
  );
}

