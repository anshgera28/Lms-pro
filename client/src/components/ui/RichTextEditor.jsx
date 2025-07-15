import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ input, setInput }) => {
  const handleChange = (content) => {
    setInput({ ...input, description: content });
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <ReactQuill
        theme="snow"
        value={input.description}
        onChange={handleChange}
        className="min-h-[10px] border-0"
      />
    </div>
  );
};

export default RichTextEditor;
