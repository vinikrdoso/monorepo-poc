"use client";

import { FormInputText } from "../Input/Input";
import { FormCheckbox } from "../Checkbox"
import { FormDatepicker } from "../Datepicker"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form } from "ui";

const FormSchema = z.object({
  username: z.string().min(4, { message: "The username must be 4 characters or more" })
  .max(10, { message: "The username must be 10 characters or less" })
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "The username must contain only letters, numbers and underscore (_)"
  ),
  isAdmin: z.boolean(),
  email: z.string().email({
    message: "Invalid email. Please enter a valid email address",
  }),
  createdAt: z.coerce.date().min(new Date(1920, 0, 1), {
    message: "Date cannot go past January 1 1920",
  })
  .max(new Date(), { message: "Date must be in the past" })
  .refine(
    (date) => {
      const ageDifMs = Date.now() - date.getTime();
      const ageDate = new Date(ageDifMs);

      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

      return age >= 18;
    },
    { message: "You must be 18 years or older" }
  ),
});

function onSubmit(data) {
  console.log(data)
}

export const FormWithHookForm = () => {
    const { handleSubmit, control } = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: '',
        isAdmin: false,
        email: '',
        createdAt: new Date(),
      }
    });

  return (
    <Form>
      <FormInputText
        name={"username"}
        control={control}
        label={"Username"}
      />
      <FormCheckbox
        name={"isAdmin"}
        id={"isAdmin"}
        control={control}
        label={"Checkbox"}
      />
      <FormInputText
        name={"email"}
        control={control}
        label={"Email"}
      />
      <FormDatepicker
        name={"createdAt"}
        control={control}
        label={"Age"}
      />
      
      <button
            className="bg-purple-600 p-3 mt-12 rounded-lg text-white font-medium m-auto w-3/6 hover:opacity-75"
            type="submit"
            onClick={handleSubmit(onSubmit)}
        >
            Submit
        </button>
    </Form>
  );
};