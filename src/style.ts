import styled from 'styled-components'


export const EditorWrapper = styled.div`
display:flex;
background: #3c3e44;
`
export const IframeWrapper = styled.div`
display: block;
height: 18em;
iframe{
    border: 0;
    width: 100%;
}

`
export const ButtonWrapp = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 0.9em;
align-items: baseline;
label{
  margin-right: 15px;
}
`
export const Button = styled.button`
background-color: #90EE90;
  margin-top: 1em;
  border-radius: 0.2em;
box-shadow: 0 0.05em 0.25em 0 rgba(0,0,0,0.5);
color: #fff;
display: inline-block;
font-size: 1em;
font-weight: bold;
letter-spacing: 0.2px;
padding: 0.5rem 2.5rem;
text-align: center;
text-decoration: none;
cursor: pointer;
border: none;
 svg{
   height: 18px;
 }
`

