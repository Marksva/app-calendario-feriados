import feriadosNacionais from "./data/dataFeriados.js";
import filtraFeriados from "./filtro.js";
import { formataDiaSemana, formataDataBr } from "./formatadaDataFeriado.js";


const retornaFeriados = (numeroFeriados) => {

    let feriadoFiltro = filtraFeriados(feriadosNacionais, numeroFeriados);

    let feriadosFiltroFormatados = [];

    feriadoFiltro.forEach(feriado => {

        const dataFeriado = feriado.data;

        let diaSemana = formataDiaSemana(dataFeriado);
        let dataFormatada = formataDataBr(dataFeriado);

        feriadosFiltroFormatados.push({
            nome: feriado.nome,
            diaSemana: diaSemana,
            data: dataFormatada
        });
        
    });

    // console.table(feriadosFiltroFormatados);

    return feriadosFiltroFormatados;
}



export default retornaFeriados;
