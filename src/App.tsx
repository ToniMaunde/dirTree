import copyIcon from "./assets/icons/copy";
import saveIcon from "./assets/icons/save";
import { Icon } from "./components/Icon";
import Navbar from "./components/Navbar";
import TreeEditor from "./components/TreeEditor";

export default function App() {
  return (
    <>
      <Navbar />
      <main
        class="font-inter-regular text-white px-2 py-4"
      >
        <h1
          class="font-inter-semibold text-chinese-silver leading-150"
        >
          Creating ASCII trees has never been easier. Use indentation to specify the hierarchy of your project structure.
        </h1>
      </main>
      <section
        class="px-2"
      >
        <TreeEditor />
      </section>
      <section
        class="px-2 mb-8"
      >
        <div
          class="py-8 flex"
        >
          <button
            class="border border-chinese-silver text-chinese-silver rounded font-zillaslab-bold px-4 py-2 mr-6 ml-auto flex items-center"
          >
            <Icon
              {...copyIcon}
              className="w-6 h-6 fill-chinese-silver mr-2"
            />
            Copy
          </button> 
          <button
            class="bg-chinese-silver text-vampire-black rounded font-zillaslab-bold px-4 py-2 flex items-center"
          >
            <Icon
              {...saveIcon}
              className="w-6 h-6 fill-vampire-black mr-2"
            />
            Save
          </button> 
        </div>      
        <textarea
          class="bg-eerie-black text-chinese-silver outline-none border border-eerie-black focus-within:border-xanthous rounded w-full p-2"
          rows={20}
          readonly
        >
        </textarea>
      </section>
</>
  );
};
