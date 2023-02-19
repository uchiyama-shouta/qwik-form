import { component$, Slot } from "@builder.io/qwik";

type Props = { type?: "reset" | "submit" | "button" | undefined };

export const Button = component$<Props>((props) => {
  return (
    <button
      type={props.type}
      class="mt-1 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <Slot />
    </button>
  );
});
