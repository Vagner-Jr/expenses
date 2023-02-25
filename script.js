const frm = document.querySelector("form");
const submit = document.getElementById("btn-submit");
const reset = document.getElementById("btn-reset");
const descriptionResponse = document.querySelector(".descriptionResponse");
const totalResponse = document.querySelector(".totalResponse");


let response = '';
let numOfPays = 0;
let total = 0;

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const description = frm.inDescription.value;
  const price = Number(frm.inPrice.value);

  numOfPays++;
  total += price;
  response = `${response}${description} - R$ ${price.toFixed(2)} \n`;

  descriptionResponse.innerText = response;
  totalResponse.innerText = `${numOfPays} Conta(s) - Total: R$ ${total.toFixed(2)}`;
});


reset.addEventListener("click", (e) => {
    descriptionResponse.innerText = '💵'
    totalResponse.innerText = ''
    frm.inDescription.value = ''
    frm.inPrice.value = ''
})
