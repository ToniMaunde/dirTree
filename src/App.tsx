import type { Component } from 'solid-js';
import Navbar from "./components/Navbar";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <main
        class="font-inter text-white"
      >
        Content here, soon.
      </main>
    </>
  );
};

export default App;
