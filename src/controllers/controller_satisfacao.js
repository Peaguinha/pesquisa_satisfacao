import { adicionarNaPlanilha } from "../services/enviar_planilha.js";

export async function createdata(req, res) {
    let { nome, telefone, avaliacao_atendimento, nota_atendimento, indicacao_atendimento, nota_retorno } = req.body;

    try {
        // Monta os dados como um array
        const dados = [nome, telefone, avaliacao_atendimento, nota_atendimento, indicacao_atendimento, nota_retorno];

        // Envia os dados para o Google Sheets
        const resultado = await adicionarNaPlanilha(dados);

        if (resultado) {
            res.status(200).json({ message: "Dados enviados com sucesso para a planilha!" });
        } else {
            res.status(500).json({ message: "Erro ao enviar os dados para a planilha." });
        }
    } catch (error) {
        console.error("Erro no Controller:", error.message);
        res.status(500).json({ message: `Erro de servidor: ${error.message}` });
    }
}
