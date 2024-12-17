import { adicionarNaPlanilha } from "../services/enviar_planilha.js"; // Serviço para Google Sheets

export async function createdata(req, res) {
    const { nome, telefone, avaliacao_atendimento, nota_atendimento, indicacao_atendimento, nota_retorno } = req.body;
    
    try {
        const dados = [
            nome,
            telefone,
            avaliacao_atendimento,
            nota_atendimento,
            indicacao_atendimento,
            nota_retorno
        ];

        const resultado = await adicionarNaPlanilha(dados); // Chama o serviço para adicionar os dados

        if (resultado) {
            res.status(200).json({ message: "Dados enviados com sucesso!" });
        } else {
            res.status(400).json({ message: "Erro ao enviar os dados." });
        }
    } catch (error) {
        res.status(500).json({ message: `Erro interno: ${error.message}` });
    }
}
