
const formataDiaSemana = (data) => {
    
    let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabádo"];
    return diasSemana[data.getDay()];

}

const formataDataBr = (data) => {

    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    const dataExibir = `${dia}/${mes}/${ano}`;
    
    return dataExibir;

}



export { formataDiaSemana, formataDataBr };