import {styled} from 'styled-components'
import enviaArquivo from '../../services';
import InputArquivoEnvio from '../InputArquivoEnvio';
import { useState } from 'react';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

function FormularioPlanilha() {
  const [retorno, setRetorno] = useState([])

  const handleEnvioRelatorio = async (e) => {
      e.preventDefault()
      const arquivo = e.target[0].files[0]
      const dadosApi = await enviaArquivo(arquivo)
      setRetorno(dadosApi)
    }

    console.log(retorno)

  return (
    <FormStyled onSubmit={handleEnvioRelatorio} encType="multipart/form-data">
        <InputArquivoEnvio
            type="file"
            itemID="arquivo" 
            name="arquivo"
        />
        
        {retorno && retorno.length !== 0 ? (<p>{retorno.message}</p>) : (<p>Envie um arquivo!</p>)}
        <button type='submit'>Enviar</button>

    </FormStyled>
  )
}

export default FormularioPlanilha
