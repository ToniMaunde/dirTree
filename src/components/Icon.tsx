import { For } from "solid-js";

export type TIcon = {
  viewBox: string;
  paths: Array<{
    d: string;
    fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
    clipRule?: "nonzero" | "evenodd" | "inherit" | undefined;
    id?: string;
  }>;
  title: string;
  className?: string | undefined;
  id?: string;
}

export function Icon(props: TIcon) {
  const { viewBox, paths, className, title, id } = props;

  return (
    <svg
      viewBox={viewBox}
      id={id}
      class={className}
    >
      <title
        id="title"
        lang="en"
      >
        {title}
      </title>
      <For each={paths}>
        {
          pathItem => (
            <path
              id={pathItem.id}
              d={pathItem.d}
              fill-rule={pathItem.fillRule}
              clip-rule={pathItem.clipRule}
            />
          )}
      </For>
    </svg>
  )
}
