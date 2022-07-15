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

    /* tabla 2 */
    conf2 = parseFloat(conf.value);
    integ2 = parseFloat(integ.value);
    disp2 = parseFloat(disp.value);
    responsa2 = parseFloat(responsa.value);
    finan2 = parseFloat(finan.value);
    repu2 = parseFloat(repu.value);
    cumpl2 = parseFloat(cumpl.value);
    priva2 = parseFloat(priva.value);
    console.log("cambio")
    retornaTbUno();
    retornaTbDos();
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
    } else if (re >= 6 && re <= 9) {
        res.className = "table-danger";
        textProb.className = "table-danger text-end";
        nivel.classList = "table-danger text-start";
        re2 = "ALTO";
    }
    res.innerText = re;
    nivel.innerText = re2;

}

retornaTbUno();


/* variables segunda tabla */
let conf = document.getElementById("confidencialidad");
let integ = document.getElementById("integridad");
let disp = document.getElementById("disponibilidad");
let responsa = document.getElementById("responsabilidad");
let finan = document.getElementById("financiero");
let repu = document.getElementById("reputacion");
let cumpl = document.getElementById("cumplimiento");
let priva = document.getElementById("privacidad");

let textITG = document.getElementById("impTecGene");
let resITG = document.getElementById("impTecRes");
let nivelITG = document.getElementById("impTecNivel");


let textIC = document.getElementById("impCom");
let resIC = document.getElementById("impComRes");
let nivelIC = document.getElementById("impComNivel");


let textGen = document.getElementById("impGene");
let resGen = document.getElementById("impGeneRes");
let nivelGen = document.getElementById("impGeneNivel");


let conf2 = parseFloat(conf.value);
let integ2 = parseFloat(integ.value);
let disp2 = parseFloat(disp.value);
let responsa2 = parseFloat(responsa.value);
let finan2 = parseFloat(finan.value);
let repu2 = parseFloat(repu.value);
let cumpl2 = parseFloat(cumpl.value);
let priva2 = parseFloat(priva.value);

function retornaTbDos() {
    let retb1 =
        (conf2 + integ2 + disp2 + responsa2) / 4;
    let re2tb1 = "";


    if (retb1 < 3) {
        resITG.className = "table-success";
        textITG.className = "table-success text-end";
        nivelITG.classList = "table-success text-start";
        re2tb1 = "BAJO";
    } else if (retb1 >= 3 && retb1 < 6) {
        resITG.className = "table-warning";
        textITG.className = "table-warning text-end";
        nivelITG.classList = "table-warning text-start";
        re2tb1 = "MEDIO";
    } else if (retb1 >= 6 && retb1 <= 9) {
        resITG.className = "table-danger";
        textITG.className = "table-danger text-end";
        nivelITG.classList = "table-danger text-start";
        re2tb1 = "ALTO";
    }
    resITG.innerText = retb1;
    nivelITG.innerText = re2tb1;
/* 
    let textIC = document.getElementById("impCom");
    let resIC = document.getElementById("impComRes");
    let nivelIC = document.getElementById("impComNivel"); */

    let retb2 =
        (finan2 + repu2 + cumpl2 + priva2) / 4;
    let re2tb2 = "";


    if (retb2 < 3) {
        resIC.className = "table-success";
        textIC.className = "table-success text-end";
        nivelIC.classList = "table-success text-start";
        re2tb2 = "BAJO";
    } else if (retb2 >= 3 && retb2 < 6) {
        resIC.className = "table-warning";
        textIC.className = "table-warning text-end";
        nivelIC.classList = "table-warning text-start";
        re2tb2 = "MEDIO";
    } else if (retb2 >= 6 && retb2 <= 9) {
        resIC.className = "table-danger";
        textIC.className = "table-danger text-end";
        nivelIC.classList = "table-danger text-start";
        re2tb2 = "ALTO";
    }
    resIC.innerText = retb2;
    nivelIC.innerText = re2tb2;



    let re =
        (conf2 + integ2 + disp2 + responsa2 + finan2 + repu2 + cumpl2 + priva2) / 8;
    let re2 = "";


    if (re < 3) {
        resGen.className = "table-success";
        textGen.className = "table-success text-end";
        nivelGen.classList = "table-success text-start";
        re2 = "BAJO";
    } else if (re >= 3 && re < 6) {
        resGen.className = "table-warning";
        textGen.className = "table-warning text-end";
        nivelGen.classList = "table-warning text-start";
        re2 = "MEDIO";
    } else if (re >= 6 && re <= 9) {
        resGen.className = "table-danger";
        textGen.className = "table-danger text-end";
        nivelGen.classList = "table-danger text-start";
        re2 = "ALTO";
    }
    resGen.innerText = re;
    nivelGen.innerText = re2;

    /* sub tabla 1 */

}

retornaTbDos();
