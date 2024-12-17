import { imprimir } from "../services/enviar_planilha.js";
import { adicionarNaPlanilha } from "../services/google_sheets_service.js";

export async function createdata(req, res) {
    let {
        nome,
        telefone,
        avaliacao_atendimento,
        nota_atendimento,
        indicacao_atendimento,
        nota_retorno,
    } = req.body;

    try {
        const dados = [
            nome,
            telefone,
            avaliacao_atendimento,
            nota_atendimento,
            indicacao_atendimento,
            nota_retorno,
        ];

        const resultado = await adicionarNaPlanilha(dados);

        if (resultado) {
            res.status(200).json({ message: "Dados enviados para a planilha com sucesso!" });
        } else {
            res.status(400).json({ message: "Erro ao enviar dados para a planilha." });
        }
    } catch (error) {
        res.status(500).json({ message: `Erro no servidor: ${error.message}` });
    }
}
