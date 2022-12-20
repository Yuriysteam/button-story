import $, { each } from "jquery";

const ready = function() {
  var myArray = [
    "Господи, спасибо. Теперь-то я стала полезной.",
    "УРА, и на моей улице перевернулся грузовичек с пряниками",
    "Да алелуя же, здоровья всем вам, вашим детям, кошакм и собакам"
  ];
  var myIndex = 1;
  var print = document.getElementById("output");

  // print.innerHTML = myArray[0]; //Print first value of array right away.

  function nextElement() {
    print.innerHTML = myArray[myIndex];
    myIndex = (myIndex + 1) % myArray.length;
  }

  document.getElementById("switch").onclick = nextElement;
};

$(document).ready(ready);
