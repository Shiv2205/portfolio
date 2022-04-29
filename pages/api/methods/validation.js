
function validateInput(inputValue, id){
    const errMessage = "* Invalid " + id + ": ";

    if(id === "title")
    {
        if(inputValue.length === 0)
            document.getElementById("titleErr").innerHTML = errMessage + "Title shouldn't be empty.";
        else
            document.getElementById("titleErr").innerHTML = '';
    }
    else if(id === "description")
    {
        if(inputValue.length === 0)
            document.getElementById("descriptionErr").innerHTML = errMessage + "Description shouldn't be empty.";
        else
            document.getElementById("descriptionErr").innerHTML = '';
    }

    
}

export { validateInput };