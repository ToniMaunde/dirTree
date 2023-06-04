import logoIcon from "../assets/icons/logo";
import treeIcon from "../assets/icons/trees";
import { Icon } from "./Icon";

export default function Navbar() {
  return (
    <nav
      class="text-white px-2 py-1 font-zillaslab-bold text-2xl flex items-center"
    >
      <Icon
        {...logoIcon}
        className="w-6 h-6 fill-xanthous mr-2"
      />
      dir
      <span
        class="text-xanthous"
      >
        Tree
      </span>
      <button
        class="ml-auto border border-xanthous rounded"
      >
        <Icon
          {...treeIcon}
          className="fill-xanthous w-5 h-5"
        />
      </button>
    </nav>
  );
};
