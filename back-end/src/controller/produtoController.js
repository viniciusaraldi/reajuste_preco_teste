const database = require('../models')
const fs = require('fs')
const csv = require('csv-parser')
const fastcsv = require('fast-csv');

class produtoController {

    static listaProduto = async (req, res) => {
        try {
            const listaTodosProdutos = await database.Produtos.findAll({
                attributes: {
                    exclude: ['id']
                }
            })
            return res.status(200).json({data: listaTodosProdutos}) 
        } catch (Err) {
            return res.status(500).json({data: Err.message})
        }
    }

    static listaProdutoId = async (req, res) => {
        try {
            const {id} = req.params
            const listaTodosProdutos = await database.Produtos.findOne({
                attributes: {
                    exclude: ['id']
                },
                where: {
                    code: Number(id)
                }
            })
            return res.status(200).json({data: listaTodosProdutos}) 
        } catch (Err) {
            return res.status(500).json({data: Err.message})
        }
    }

    static atualizaPlanilhaProduto = async (req, res) => {
        try {
            if (!req.file || Object.keys(req.file).length === 0) {
                return res.status(400).send('Nenhum arquivo foi enviado.');
            }

            const arquivo = req.file
            const buffer = arquivo.buffer.toString()
            const results = []

            fastcsv
                .parseString(buffer, {headers: true})
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    console.log(results)
                    return res.status(200).json({data: results}) 
                })
        } catch (Err) {
            return res.status(500).json({data: Err.message})
        }
    }
    
    static atualizaProduto = async (req, res) => {
        try {
            const {id} = req.params;
            const newInfos = req.body;
            const verificaProduto = await validaPrecoProduto(id, newInfos)
            if (verificaProduto !== true) {
                return res.status(404).json({
                    sucess: false,
                    message: verificaProduto
                })
            } else {
                const produtoAtualizado = await database.Produtos.update(newInfos, {
                    attributes: {
                        exclude: ['id']
                    },
                    where: {
                        code: Number(id)
                    }
                })
                if (!produtoAtualizado) {
                    return res.status(404).json({
                        sucess: false,
                        message: 'Produto não atualizado!'
                    })
                }
                return res.status(200).json({
                    sucess: true,
                    message: 'Produto atualizado com sucesso!'
                })
            }
        } catch (err) {
            return res.status(500).json({
                sucess: false,
                message: err.message
            })
        }
    }

}

async function validaPrecoProduto(id, infos) {
    const buscaProduto = await database.Produtos.findOne({
        attributes: {
            exclude: ['id']
        }, 
        where: {
            code: Number(id)
        }
    })
    const valorVenda = (buscaProduto.sales_price)
    const valorCusto = (buscaProduto.cost_price)
    const novoValorVenda = (Number(infos.sales_price))

    const reajusteProduto = (10/100) + 1
    const valorPermitido = valorVenda * reajusteProduto
    const valorFixado = Number(valorPermitido.toFixed(2))
    console.log("Valor fixado: " + Number(valorFixado))
    console.log("Valor novo: " + Number(novoValorVenda))

    const reajuste = valorFixado !== novoValorVenda ? false : true
    console.log(reajuste)
    if (Number(novoValorVenda) <= Number(valorCusto)) {
        return "Novo Valor é menos ou igual ao valor de custo!";
    } else if (reajuste === false) {
        return "Reajsute está fora da % permitida!";
    } else {
        return true;
    }
}

module.exports = produtoController
 