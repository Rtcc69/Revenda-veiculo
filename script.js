// Creates a reference to the form and response elements

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    const vehicle = frm.inVehicle.value
    const price = Number(frm.inPrice.value)

    const into = price * 0.50
    const plots = (price * 0.50) / 12 

    resp1.innerText = `Promoção: ${vehicle}`
    resp2.innerText = `Entrada: R$ ${into}`
    resp3.innerText = `+12x de R$ ${plots}`

    e.preventDefault()
});
