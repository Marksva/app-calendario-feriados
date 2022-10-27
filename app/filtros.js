
const filtraFeriados = (feriados, numeroFeriados) => {

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let proximosFeriados = [];
    let novaDataFeriado; 

    feriados.forEach(feriado => {

        novaDataFeriado = new Date(feriado.data + '/' + anoAtual);
        
        // mudar o ano da data do feriado que antecedem a data atual;
        if(dataAtual > novaDataFeriado){
            novaDataFeriado.setFullYear(anoAtual + 1);
        } 

        proximosFeriados.push({
            nome: feriado.nome,
            data: novaDataFeriado
        });
    });

    console.table(proximosFeriados)
    proximosFeriados.sort((a,b) => a.data - b.data );
    console.table(proximosFeriados)
    proximosFeriados = proximosFeriados.slice(0, numeroFeriados);
    console.table(proximosFeriados)
    return proximosFeriados;
}

export default filtraFeriados;