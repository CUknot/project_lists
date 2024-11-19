import React, { useRef } from 'react';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  age: number;
}

function Form({ onSubmit }: FormProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = nameRef.current?.value || '';
    const age = ageRef.current?.value ? parseInt(ageRef.current.value) : 0;

    onSubmit({ name, age });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" ref={nameRef} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" ref={ageRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
