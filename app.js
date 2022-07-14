/* variables primera tabla */
let hab = document.getElementById("habilidad");
let mot = document.getElementById("motivo");
let op = document.getElementById("oportunidad");
let tam = document.getElementById("tamanio");
let des = document.getElementById("descubrir");
let exp = document.getElementById("explotacion");
let conc = document.getElementById("conciencia");
let intr = document.getElementById("intrusion");

let textProb = document.getElementById("textProb");
let res = document.getElementById("resultado");
let nivel = document.getElementById("nivel");


let hab2 = parseFloat(hab.value);
let mot2 = parseFloat(mot.value);
let op2 = parseFloat(op.value);
let tam2 = parseFloat(tam.value);
let des2 = parseFloat(des.value);
let exp2 = parseFloat(exp.value);
let conc2 = parseFloat(conc.value);
let intr2 = parseFloat(intr.value);


document.addEventListener("change", () => {
    hab2 = parseFloat(hab.value);
    mot2 = parseFloat(mot.value);
    op2 = parseFloat(op.value);
    tam2 = parseFloat(tam.value);
    des2 = parseFloat(des.value);
    exp2 = parseFloat(exp.value);
    conc2 = parseFloat(conc.value);
    intr2 = parseFloat(intr.value);
    retornaTbUno();
});

function retornaTbUno() {
    let re = (hab2 + mot2 + op2 + tam2 + des2 + exp2 + conc2 + intr2) / 8;
    let re2 = "";
    if (re < 3) {
        res.className = "table-success";
        textProb.className = "table-success text-end";
        nivel.classList = "table-success text-start";
        re2 = "BAJO";
    } else if (re >= 3 && re < 6) {
        res.className = "table-warning";
        textProb.className = "table-warning text-end";
        nivel.classList = "table-warning text-start";
        re2 = "MEDIO";
    } else if (re >= 6 && re <= 9 ) {
        res.className = "table-danger";
        textProb.className = "table-danger text-end";
        nivel.classList = "table-danger text-start";
        re2 = "ALTO";
    }
    res.innerText = re;
    nivel.innerText = re2

}

retornaTbUno();


/* variables segunda tabla */