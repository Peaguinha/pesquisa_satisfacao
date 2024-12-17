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

import { google } from "googleapis";
import path from "path";

// Configuração do Google Auth
const auth = new google.auth.GoogleAuth({
    keyFile: path.resolve("./config/credenciais.json"), // Caminho para o arquivo JSON
    scopes: ["https://www.googleapis.com/auth/spreadsheets"], // Escopo para acessar a planilha
});

// ID da planilha (substitua pelo ID real)
const spreadsheetId = "1dxVAfeXPZL8F_xmi-mymgcv5-2UbGhINDJImtVxMTyc";

// Função para adicionar dados à planilha
export async function adicionarNaPlanilha(dados) {
    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth: client });

        // Configuração da requisição
        const request = {
            spreadsheetId,
            range: "Página1!A1", // Altere para o nome da aba e célula inicial
            valueInputOption: "RAW", // Insere os dados como são recebidos
            resource: {
                values: [dados], // Dados que você quer inserir
            },
        };

        // Faz a requisição para adicionar os dados
        const response = await sheets.spreadsheets.values.append(request);
        console.log("Dados adicionados com sucesso:", response.data);
        return true;
    } catch (error) {
        console.error("Erro ao adicionar dados na planilha:", error.message);
        return false;
    }
}
