'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';



const FormSchema = z.object({
    username: z.string().min(4, { message: "The username must be 4 characters or more" })
    .max(10, { message: "The username must be 10 characters or less" })
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "The username must contain only letters, numbers and underscore (_)"
    ),
    email: z.string().email({
      message: "Invalid email. Please enter a valid email address",
    }),
    isAdmin: z.boolean(),
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

type FormInput = z.infer<typeof FormSchema>;

export default function Form() {
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm<FormInput>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
          username: '',
          email: '',
          isAdmin: true,
          createdAt: new Date(),
      },
  });

//   function test() {
//     ...register('username')
//   }
  
  return (
    <form
        className="flex flex-col mt-10 bg-white px-4 py-5 shadow rounded-lg sm:m-6 sm:p-6 w-full lg:w-3/6 text-gray-600"
        onSubmit={handleSubmit((d) => console.log(d))}
    >
        <div className="flex flex-col mt-4">
            <label htmlFor="username">Username</label>
            <input
                className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
                id="username"
                onChange={() => {return {...register('username')}}}
            />
            {errors?.username?.message && (
                <p className="text-red-700 mt-1">
                    {errors.username.message}
                </p>
            )}
        </div>
        {/* <Input 
            htmlFor="username"
            errors={errors}
            label='Username'
            onChange={() => {return {...register('username')}}}
        /> */}

        <div className="flex flex-col mt-4">
            <label htmlFor="email">Email</label>
            <input
                className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
                id="email"
                {...register('email')}
            />
            {errors?.email?.message && (
                <p className="text-red-700 mt-1">{errors.email.message}</p>
            )}
        </div>

        <div className="mt-4">
            <label htmlFor="isAdmin">IsAdmin</label>
            <input
                className="ml-2"
                id="isAdmin"
                type="checkbox"
                {...register('isAdmin')}
            />
        </div>

        <div className="flex flex-col mt-4">
            <label htmlFor="createdAt">Creation Date</label>
            <input
                className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
                id="createdAt"
                type="date"
                {...register('createdAt')}
            />
            {errors?.createdAt?.message && (
                <p className="text-red-700 mt-1">
                    {errors.createdAt.message}
                </p>
            )}
        </div>

        <button
            className="bg-purple-600 p-3 mt-12 rounded-lg text-white font-medium m-auto w-3/6 hover:opacity-75"
            type="submit"
        >
            Submit
        </button>
    </form>
);
}