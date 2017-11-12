const getName = ({name}) => console.log(name);
const getError = (e) => console.log(e);

$.ajax({
    method: "GET",
    url: "/users/1",
    dataType: "json",
    success: getName,
    error: getError
});
