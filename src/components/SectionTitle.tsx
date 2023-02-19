import { component$, Slot } from "@builder.io/qwik";

export const SectionTitle = component$(() => {
  return (
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        <Slot />
      </h2>
    </div>
  );
});
