"use client"
import { Button } from "ui";
import {FormWithHookForm} from "./components/Form/Form";
import { ButtonTest, DownloadCard } from "ui"

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-salmon w-96 h-40 flex flex-col items-center justify-center m-7">
        <p>div demo with tailwind</p>
        <p>another content</p>
      </div>
      <div className="w-96 flex items-center justify-center">
        <div className="flex flex-wrap flex-row">
          <Button />
          <ButtonTest label="Primary button" />
          <ButtonTest label="Secondary button" appearance="secondary" />
        </div>
      </div>
      <DownloadCard title="test" description="teste" />
      <FormWithHookForm />

    </div>
  );
}
