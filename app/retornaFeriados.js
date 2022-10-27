import feriadosNacionais from "./data/dataFeriados.js";
import filtraFeriados from "./filtros.js";


const retornaFeriados = (numeroFeriados) => {

    let feriadoFiltro = filtraFeriados(feriadosNacionais, numeroFeriados);
    


}



export default retornaFeriados;
