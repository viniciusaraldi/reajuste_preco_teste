import {styled} from 'styled-components'
import enviaArquivo from '../../services';
import InputArquivoEnvio from '../InputArquivoEnvio';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

function FormularioPlanilha() {

    const handleEnvioRelatorio = async (e) => {
        e.preventDefault()
        const arquivo = e.target[0].files[0]
        console.log(arquivo)
        await enviaArquivo(arquivo)
        }

  return (
    <FormStyled onSubmit={handleEnvioRelatorio} encType="multipart/form-data">
        <InputArquivoEnvio
            type="file"
            htmlFor="arquivo"
            itemID="arquivo" 
            name="arquivo"
        />
        <button type='submit'>Enviar</button>
    </FormStyled>
  )
}

export default FormularioPlanilha
