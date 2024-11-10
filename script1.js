 let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")["0"];

let result  = document.getElementById("result");
function calculateAge() {
  let Birthdate = new Date(userinput.value);

  let D1 = Birthdate.getDate();
  let M1 = Birthdate.getMonth() + 1;
  let Y1 = Birthdate.getFullYear();

  let Today = new Date();

  let D2 = Today.getDate();
  let M2 = Today.getMonth() + 1;
  let Y2 = Today.getFullYear();

  let Y3, M3, D3;

  Y3 = Y2 - Y1;

  if (M2 >= M1) {
    M3 = M2 - M1;
  } else {
    Y3--;
    M3 = 12 + M2 - M1;
  }

  if (D2 >= D1) {
    D3 = D2 - D1;
  } else {
    M3--;
    D3 = getdaysInMonth(Y1, M1) + D2 - D1;
  }

  function getdaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  if (M3 < 0) {
    M3 = 11;
    Y3--;
  }
result.innerHTML = `Your Age is <span> ${Y3}</span> Years <span>${M3}</span> Months and </span>${D3}</span> Days;`
  
}
