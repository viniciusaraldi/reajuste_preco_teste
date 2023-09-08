/* eslint-disable react/prop-types */
import {styled} from 'styled-components'

const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1em 0;
`;

function InputArquivoEnvio({...props}) {
  return (
    <LabelStyled htmlFor={props.htmlFor}>
          <span>Envie o seu arquivo em csv:</span>
          <input type={props.type} itemID={props.arquivo} name={props.arquivo} />
    </LabelStyled>
  )
}

export default InputArquivoEnvio
