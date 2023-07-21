import { Button, Header } from "ui";
import {FormWithHookForm} from "./components/Form/Form";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header text="Web" />
      <div className="bg-zinc-400 w-96 h-40 flex flex-col items-center justify-center">
        <p>div demo with tailwind</p>
        <p>another content</p>
      </div>
      <Button />
      <FormWithHookForm />
    </div>
  );
}
