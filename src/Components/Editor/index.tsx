import React from 'react'
// styles
import * as S from './style' 
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css')


// agora e estilizar e fazer o botão de build
type editor = {
  setHtml: any,
  code: any,
  Mode: string

}

export default function Editor({code, setHtml, ...props}: editor) {

  
    return (
        <S.EditorContainer>
          <S.Label>{props.Mode}</S.Label>
            <CodeMirror
  value={code}
 options={{
    mode: props.Mode,
    theme: 'material',
    lineNumbers: true
  }}
  onBeforeChange={(editor, data, value) => {
    setHtml(value);
  }}
  onChange={(editor, data, value) => {
  }}
/>
        </S.EditorContainer>
    )
}
