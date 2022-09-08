import MyButton from "./ui/MyButton";

const Form = () => {
  return (
    <form className='form flex flex-col text-xl lg:text-3xl'>
      <input type='text' placeholder='Your name' />
      <input type='text' placeholder='Your telephone number' />
      <textarea placeholder='Your question'></textarea>
      <MyButton>Send</MyButton>
    </form>
  );
};

export default Form;
