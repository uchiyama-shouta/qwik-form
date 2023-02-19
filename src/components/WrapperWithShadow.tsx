import { component$, Slot } from "@builder.io/qwik";

export const WrapperWithShadow = component$(() => {
  return (
    <div class="mt-8 bg-white py-8 px-4 shadow-md sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:px-10">
      <Slot />
    </div>
  );
});
