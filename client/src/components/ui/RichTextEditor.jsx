// src/components/ui/RichTextEditor.jsx

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichTextEditor() {
  const [value, setValue] = useState('');

  return (
    <div className="border rounded-lg overflow-hidden">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="h-[200px] border-0"
      />
    </div>
  );
}

export default RichTextEditor;
