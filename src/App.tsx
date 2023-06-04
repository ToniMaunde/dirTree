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
    </>
  );
};
