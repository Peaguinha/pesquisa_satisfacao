import { google } from "googleapis";
import path from "path";

// Configuração do Google Auth
const auth = new google.auth.GoogleAuth({
    keyFile: path.resolve("./config/credenciais.json"), // Caminho para o arquivo JSON
    scopes: ["acesso-api-sheets@lateral-guild-444913-n0.iam.gserviceaccount.com"], // Escopo para acessar a planilha
});

// ID da planilha 
const spreadsheetId = "1dxVAfeXPZL8F_xmi-mymgcv5-2UbGhINDJImtVxMTyc";

/**
 * Adiciona dados na planilha do Google Sheets.
 * @param {Array} dados - Um array com os dados
 * @returns {Boolean} - Retorna true se os dados forem adicionados com sucesso, ou false em caso de erro.
 */

export async function adicionarNaPlanilha(dados) {
    try {
        // Cria o cliente de autenticação
        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth: client });

        // Organização para a tabela
        const request = {
            spreadsheetId,
            range: "Página1!A1", 
            valueInputOption: "RAW", 
            resource: {
                values: [dados], 
            },
        };

        // Feedback
        const response = await sheets.spreadsheets.values.append(request);
        console.log("Dados enviados para o Google Sheets com sucesso:", response.data);

        return true;
    } catch (error) {
        console.error("Erro ao adicionar dados na planilha:", error.message);
        return false;
    }
}
