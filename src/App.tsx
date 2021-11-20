import React,{useState} from 'react';
import Editor from './Components/Editor';

function App() {
  let srcDoc = `
  <html>
  <body>AAAAAA</body>
  </html>
  `
  const [html, setHtml] = useState()
  const [Css, setCss] = useState()
  const [js, setJs] = useState()

  const [Code, setCode] = useState(srcDoc)

  
function checar(){
   srcDoc = `
  <html>
  <head><style type='text/css'>${Css}</style><head/>
  <body>${html}<script>${js}</script></body>
  </html>
  `
  setCode(srcDoc)
}
  return (
    <div className="App">
      <Editor Mode={"xml"} code={html} setHtml={setHtml}></Editor>
      <Editor Mode={"css"} code={Css} setHtml={setCss}></Editor>
      <Editor Mode={"javascript"} code={js} setHtml={setJs}></Editor>

      <iframe
        title="CodeRunner"
        srcDoc={Code}
      /*Title option*/
      /*sandbox option*/
      /*frameBorder option*/
      /*width-height option*/
      /*Title option*/
      ></iframe>

      <button onClick={checar}>Run</button>
    </div>
  );
}

export default App;
