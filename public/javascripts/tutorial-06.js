const toJson = (data) => data.json();
const getName = ({name}) => console.log(name);
const getError = (e) => console.log(e);

const promise = fetch("/users/1");

promise
    .then(res => toJson(res), getError)
    .then(data => getName(data), getError);