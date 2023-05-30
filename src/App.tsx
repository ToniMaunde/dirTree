import type { Component } from 'solid-js';
import Navbar from "./components/Navbar";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <main
        class="font-inter-regular text-white"
      >
        <h1
          class="font-inter-semibold text-chinese-silver"
        >
          Creating ASCII trees has never been easier. Use indentation to specify the hierarchy of your project structure.
        </h1>
      </main>
    </>
  );
};

export default App;
