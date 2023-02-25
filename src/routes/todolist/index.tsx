import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  loader$,
  action$,
  zod$,
  z,
  Form,
} from "@builder.io/qwik-city";
import { Button } from "~/components/Button";
import { SectionTitle } from "~/components/SectionTitle";
import { TextInput } from "~/components/TextInput";
import { WrapperWithShadow } from "~/components/WrapperWithShadow";

type ListItem = {
  text: string;
};

export const list: ListItem[] = [];

export const useListLoader = loader$(() => {
  return list;
});

export const useAddToListAction = action$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string(),
  })
);

export default component$(() => {
  const list = useListLoader();
  const action = useAddToListAction();

  return (
    <WrapperWithShadow>
      <SectionTitle>Form Action TODO list</SectionTitle>
      <ul class="mt-3">
        {list.value.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
      <Form action={action} spaReset>
        <TextInput type="text" name="text" required />
        <Button type="submit">Add item</Button>
      </Form>
      <p class={"mt-3"}>
        This little app works even when JavaScript is disabled.
      </p>
    </WrapperWithShadow>
  );
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};
