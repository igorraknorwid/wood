/* eslint-disable react/display-name */
import MyButton from "./ui/MyButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

interface IFormInput {
  name: string;
  phone: string;
  message: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    const addMessage = () => {
      console.log(data);
      // const response = axios.post(
      //   `https://sheltered-river-97651.herokuapp.com/api/forms`,
      //   {
      //     data,
      //   }
      // );
      // return response;
    };
    async function postMessage() {
      try {
        const res = await addMessage();
        // console.log(res.data);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        alert(message);
      }
    }

    postMessage();
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='form flex flex-col text-xl lg:text-3xl'
    >
      {/* <input type='text' placeholder='Your name' /> */}
      <Input
        placeholder='Your name'
        id='name'
        type='text'
        {...register("name", { required: true })}
      />
      {errors?.name?.type === "required" && (
        <p className='text-red-600 text-lg'>Please fill out this field.</p>
      )}

      <Input
        placeholder='Your telephone number'
        id='phone'
        type='text'
        {...register("phone", { required: true, pattern: /^\d{9}$/ })}
      />
      {errors?.phone?.type === "pattern" && (
        <p className='text-red-600 text-lg'>
          Please enter a valid phone number
        </p>
      )}
      {errors?.phone?.type === "required" && (
        <p className='text-red-600 text-lg'>Please fill out this field.</p>
      )}

      <textarea
        placeholder='Your question'
        id='message'
        {...register("message", { required: true })}
      />
      {errors?.message?.type === "required" && (
        <p className='text-red-600 text-lg'>Please fill out this field.</p>
      )}
      <input className='mybtn' type='submit' value='Send' />
    </form>
  );
};

export default Form;
