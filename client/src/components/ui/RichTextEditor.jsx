import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './prosemirror.css';

const RichTextEditor = ({ input, setInput }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: input.description || '',
    onUpdate: ({ editor }) => {
      setInput({ ...input, description: editor.getHTML() });
    },
  });

  return (
    <div className="border rounded-lg overflow-hidden">
      <EditorContent editor={editor} className="min-h-[10px] border-0" />
    </div>
  );
};

export default RichTextEditor;
