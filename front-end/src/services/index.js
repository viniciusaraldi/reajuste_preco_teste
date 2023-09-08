
async function enviaArquivo(arq) {
    try {
        const planilhaCsv = new FormData()
        planilhaCsv.append('csvFile', arq)

        const dados = await fetch(`http://localhost:3000/produtos/via/planilha`, {
            method: "PUT",
            body: planilhaCsv
        });
        
        const data = await dados.json()
        return data
    } catch (err) {
        return console.log("Erro: " + err.message)
    }
}

export default enviaArquivo
