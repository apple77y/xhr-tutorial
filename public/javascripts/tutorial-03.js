const getName = ({name}) => console.log(name);
const getError = (e) => console.log(e);

// jquery 1.5 Deferred
const req = $.ajax({
    method: "GET",
    url: "/users/1",
    dataType: "json"
});

req.done(getName);
req.fail(getError);