import { imprimir } from "../services/enviar_planilha.js";

export async function createdata(req, res) {
    
    let {
        nome,
        telefone,
        avaliacao_atendimento,
        nota_atendimento,
        indicacao_atendimento,
        nota_retorno
    } = req.body;

    try { 
        const resultado = await imprimir(
            nome,
            telefone,
            avaliacao_atendimento,
            nota_atendimento,
            indicacao_atendimento,
            nota_retorno
        );

        if (resultado === true) {
            res.status(200).json({ message: "Deu certo!" });
        } else {
            res.status(400).json({ message: "Deu ruim!" });
        }
    } catch (error) {
        res.status(500).json({ message: `Erro de servidor: ${error.message}` });
    }
}