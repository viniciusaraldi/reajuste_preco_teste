/* eslint-disable react/prop-types */
import {styled} from 'styled-components'

const LabelStyled = styled.label`
    width: 100%;
    background-color: #333;
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    display: block;
    margin-top: 10px;
    cursor: pointer;

input[type="file"] {
    display: none;
}
`;

function InputArquivoEnvio({...props}) {

  return (
    <LabelStyled htmlFor={props.arquivo}>
      <p>Selecione um arquivo &#187;</p>
      <input type={props.type} id={props.arquivo} itemID={props.arquivo} name={props.arquivo} />
    </LabelStyled>
  )
}

export default InputArquivoEnvio
