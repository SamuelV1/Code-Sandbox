import React from 'react'
// styles
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css')

// e so montar um html usando o src doc e meus inputs
// usar callback para mandar o valor de volta
type editor = {
  setHtml: any,
  code: any,
  Mode: string

}

export default function Editor({code, setHtml, ...props}: editor) {

  
    return (
        <div>
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
        </div>
    )
}
