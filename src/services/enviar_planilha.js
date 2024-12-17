// services/google_sheets_service.js
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        project_id: process.env.GOOGLE_PROJECT_ID,
    },
    scopes: ["acesso-api-sheets@lateral-guild-444913-n0.iam.gserviceaccount.com"],
});

const spreadsheetId = "1dxVAfeXPZL8F_xmi-mymgcv5-2UbGhINDJImtVxMTyc";  

// Função que adiciona os dados na planilha
export async function adicionarNaPlanilha(dados) {
    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth: client });

        const request = {
            spreadsheetId,
            range: "Página1!A1", 
            valueInputOption: "RAW",
            resource: {
                values: [dados],  // Dados a serem inseridos
            },
        };

        const response = await sheets.spreadsheets.values.append(request);
        console.log("Dados adicionados com sucesso:", response.data);
        return true;
    } catch (error) {
        console.error("Erro ao adicionar dados na planilha:", error.message);
        return false;
    }
}
