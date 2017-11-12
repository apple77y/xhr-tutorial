const getName = ({name}) => console.log(name);
const getError = (e) => console.log(e);

const xhr = new XMLHttpRequest();

xhr.open("GET", "/users/1", true);
xhr.responseType = "json";
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        getName(xhr.response);
    } else {
        getError(xhr);
    }
};
xhr.send(null);
