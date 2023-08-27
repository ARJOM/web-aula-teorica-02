const handleSubmit = () => {
    const nome = document.getElementsByName("nome")[0];
    const faltas = document.getElementsByName("faltas")[0];

    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.appendChild(createTrWithGivenValues(nome.value, faltas.value));
    nome.value = "";
    faltas.value = "0";
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