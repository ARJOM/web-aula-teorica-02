const tbody = document.getElementsByTagName("tbody")[0];
let alunos = getObjectLocalStorage("alunos")

if (alunos === null) {
    alunos = [];
    setObjectLocalStorage("alunos", alunos)
}

window.addEventListener("load", () => {
    for (aluno of alunos){
        tbody.appendChild(createTrWithGivenValues(aluno.nome, aluno.faltas))
    }
})

const handleSubmit = () => {
    const nome = document.getElementsByName("nome")[0];
    const faltas = document.getElementsByName("faltas")[0];
    const aluno = {
        nome: nome.value,
        faltas: faltas.value        
    }
    nome.value = "";
    faltas.value = "0";

    alunos.push(aluno);
    setObjectLocalStorage("alunos", alunos);

    tbody.appendChild(createTrWithGivenValues(aluno.nome, aluno.faltas));
}


const createTrWithGivenValues = (nome, faltas) => {
    const tr = document.createElement("tr");
    const nomeTd = document.createElement("td");
    const faltasTd = document.createElement("td");
    tr.appendChild(nomeTd);
    tr.appendChild(faltasTd);

    nomeTd.innerText = nome;
    faltasTd.innerText = faltas;

    return tr;
}


function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}