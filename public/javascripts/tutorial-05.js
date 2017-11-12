const getName = ({name}) => console.log(name);
const getError = (e) => console.log(e);

const send = (resolve) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "/users/1", true);
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr.response);
        }
    };
    xhr.send(null);
};

const promise = new Promise((resolve) => send(resolve));
promise.then(getName, getError);
