import { onMount } from "solid-js";
import { enableTabToIndent } from "indent-textarea";

export default function TreeEditor() {
  
  let editorElement: HTMLTextAreaElement = null as any;

  onMount(() => enableTabToIndent(editorElement));

  return (
    <>
      <textarea
        class="bg-eerie-black text-chinese-silver outline-none border border-eerie-black focus-within:border-white box-border rounded w-full p-2"
        rows={20}
        ref={editorElement}
      >
      </textarea>
    </>
  )
}
