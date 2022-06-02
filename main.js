function buttonClick(btn) {
    let result = document.getElementById("result");
    let obj_value = btn.innerHTML;


    if (obj_value === "AC") {
        result.innerHTML = "0";
    } else if (obj_value === "=") {
        result.innerHTML = eval(result.innerHTML);
    } else {
        if (result.innerHTML === "0"){
            result.innerHTML = obj_value
        } else {
            result.innerHTML += obj_value
        }
    }
}