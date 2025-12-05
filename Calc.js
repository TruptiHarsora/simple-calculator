let txt1 =document.getElementById("txt1");

function append(value) {
  txt1.value += value;
}

function clr_display() {
  txt1.value = "";
}

function delete_char() {
  txt1.value = txt1.value.slice(0, -1);
}

function calculate() {

    if(txt1.value === "" || txt1.value === 0){
        txt1.value = 0;
    }
    else{
        txt1.value = eval(txt1.value);
    }
}

window.onload = function () {
    txt1.focus();
};

txt1.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        calculate();
    }
});

txt1.addEventListener("keypress", function (e) {
    if (/[a-zA-Z]/.test(e.key)) {
        e.preventDefault();
    }
});
