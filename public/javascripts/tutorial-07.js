const toJson = (data) => data.json();
const getName = ({name}) => console.log(name);
const getError = (e) => console.log(e);

const asyncFunction = async () => {
    try {
        const response = await fetch("/users/1");
        const data = await toJson(response);
        getName(data);
    }
    catch (e) {
        getError(e);
    }
};
