import React,{useState, useEffect} from 'react';
// style
import * as S from './style'
import * as Icon from './Ui/index'

import Editor from './Components/Editor';

function App() {
  // valor inicial
  let srcDoc = `
 
  <html>
  <head><style type='text/css'>h1{
font-size: 1em;
color: red;
margin: 0;
}
#Container{
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100%;
align-self: center;
}
p{
margin: 0;
}</style><head/>
  <body><div id="Container">
<h1> Welcome To the Code Editor</h1>
  <p> you will see all your changes here</p>
<div/><script>undefined</script></body>
  </html>
  `
type CodeStates = string 

  const [html, setHtml] = useState<CodeStates>("<!-- Edit Html here -->")
  const [Css, setCss] = useState<CodeStates>("/* Edit css here */")
  const [js, setJs] = useState<CodeStates>("// edit Javascript Here")

  const [Code, setCode] = useState(srcDoc)

  const [checked, setChecked] = useState(false);

  
function checar(){
   srcDoc = `
  <html>
  <head><style type='text/css'>${Css}</style><head/>
  <body>${html}<script>${js}</script></body>
  </html>
  `
  console.log(srcDoc)
  setCode(srcDoc)
}

// use effect pra o auto build
useEffect(() => {
 if(checked === true){
  const timeout = setTimeout(() => {
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
   srcDoc = `
   <html>
   <head><style type='text/css'>${Css}</style><head/>
   <body>${html}<script>${js}</script></body>
   </html>
   `
   
   setCode(srcDoc)
    }, 1950);
    return () => clearTimeout(timeout);
 }
}, [js, html, Css, checked])

  return (
    <div className="App">
      <S.EditorWrapper>
        <Editor Mode={"xml"} Label="HTML" code={html} setHtml={setHtml}></Editor>
        <Editor Mode={"css"} Label="CSS" code={Css} setHtml={setCss}></Editor>
        <Editor Mode={"javascript"} Label="JS" code={js} setHtml={setJs}></Editor>
      </S.EditorWrapper>
      <S.IframeWrapper>
      <iframe
        title="CodeRunner"
        srcDoc={Code}
      /*Title option*/
      /*sandbox option*/
      /*frameBorder option*/
      /*width-height option*/
      /*Title option*/
      ></iframe>
       </S.IframeWrapper>
       <S.ButtonWrapp>
        <label>
      <input type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      Auto-Runner
    </label>
      <S.Button onClick={checar}> <Icon.Build></Icon.Build> Build </S.Button>
      </S.ButtonWrapp>
    </div>
  );
}

export default App;
