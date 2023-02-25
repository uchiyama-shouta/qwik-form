import { component$ } from "@builder.io/qwik";

type Props = {
  label?: string;
  type: HTMLInputElement["type"];
  name: HTMLInputElement["name"];
  required?: HTMLInputElement["required"];
  errorMessage?: string[] | undefined;
};

export const TextInput = component$<Props>((props) => {
  return (
    <div>
      {props.label && (
        <label for="email" class="block text-sm font-medium text-gray-700">
          {props.label}
        </label>
      )}
      <div class="mt-1">
        <input
          id={props.type}
          name={props.type}
          type={props.type}
          autoComplete={props.type}
          required={props.required}
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {props.errorMessage && <p class="text-red-500">{props.errorMessage}</p>}
      </div>
    </div>
  );
});
