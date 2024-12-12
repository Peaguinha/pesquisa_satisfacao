export async function imprimir(nome, telefone, avaliacao_atendimento, 
    nota_atendimento, indicacao_atendimento, nota_retorno){

    console.log("nome:", nome)
    console.log("telefone", telefone)
    console.log("avaliação do atendimento:", avaliacao_atendimento)
    console.log("nota do atendimento", nota_atendimento)
    console.log("nota da indicacao", indicacao_atendimento)
    console.log("nota de retorno (de 0 a 10)", nota_retorno)

    return true

}