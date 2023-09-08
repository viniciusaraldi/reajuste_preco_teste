
async function enviaArquivo(arq) {
    try {
        const planilhaCsv = new FormData()
        planilhaCsv.append('csvFile', arq)

        const dados = await fetch(`http://localhost:3000/produtos/planilha`, {
            method: "POST",
            body: planilhaCsv
        });
        
        if (dados.ok) {
            return true
        } else {
            return false
        }
    } catch (err) {
        return console.log("Erro: " + err.message)
    }
}

export default enviaArquivo
