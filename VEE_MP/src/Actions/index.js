export const INITAL_DATA = 'INITAL_DATA';
export const USER_LIST_UPDATE = 'USER_LIST_UPDATE';
export const USER_DELETE = 'USER_DELETE';

const userData = [{
  "student_first_name": "Roger",
  "student_last_name": "Federer",
  "marks": 261,
  "standard": 7
}, {
  "student_first_name": "Rafael",
  "student_last_name": "Nadal",
  "marks": 261,
  "standard": 7
}, {
  "student_first_name": "Novak",
  "student_last_name": "Djokovic",
  "marks": 261,
  "standard": 7
}, {
  "student_first_name": "Martin",
  "student_last_name": "Del Potro",
  "marks": 261,
  "standard": 7
}, {
  "student_first_name": "Andy",
  "student_last_name": "Murray",
  "marks": 261,
  "standard": 7
}, {
  "student_first_name": "Stan",
  "student_last_name": "Wawrinka",
  "marks": 261,
  "standard": 7
}, {
  "student_first_name": "Dominic",
  "student_last_name": "Theim",
  "marks": 261,
  "standard": 7
}]


function handleGet() {
  return userData
}

export const getUsers = () => ({
  type: INITAL_DATA,
  data: handleGet()
});

export const updateUserList = (userData) => ({
  type: USER_LIST_UPDATE,
  data: userData
});
