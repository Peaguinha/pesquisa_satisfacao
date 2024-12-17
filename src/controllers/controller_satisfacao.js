import { adicionarNaPlanilha } from "../services/enviar_planilha.js";

export async function createdata(req, res) {
    const { nome, telefone, avaliacao_atendimento, nota_atendimento, indicacao_atendimento, nota_retorno } = req.body;

    // Dados a serem enviados para a planilha
    const dados = [nome, telefone, avaliacao_atendimento, nota_atendimento, indicacao_atendimento, nota_retorno];

    // Chama o service para adicionar os dados à planilha
    const sucesso = await adicionarNaPlanilha(dados);

    if (sucesso) {
        return res.status(200).json({ message: "Dados adicionados com sucesso!" });
    } else {
        return res.status(500).json({ message: "Erro ao adicionar dados." });
    }
}
