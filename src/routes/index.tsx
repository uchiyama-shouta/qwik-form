import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { action$, Form, z, zod$ } from "@builder.io/qwik-city";
import { Button } from "~/components/Button";
import { SectionTitle } from "~/components/SectionTitle";
import { TextInput } from "~/components/TextInput";
import { WrapperWithShadow } from "~/components/WrapperWithShadow";

export const useSignUpAction = action$(({ email, password }, { redirect }) => {
  console.log(email, password);

  return redirect(302, "/success");
}, zod$({ email: z.string().email(), password: z.string().min(8) }));

export default component$(() => {
  const action = useSignUpAction();
  return (
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <SectionTitle>Sign in</SectionTitle>

      <WrapperWithShadow>
        <Form class="space-y-6" action={action}>
          <TextInput label="Email address" type="email" />
          <TextInput label="Password" type="password" />
          {action.value?.fieldErrors?.password}
          <Button type="submit">Sign in</Button>
        </Form>
      </WrapperWithShadow>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
