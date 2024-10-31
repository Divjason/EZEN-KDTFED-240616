import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  passWord1: string;
  passWord2: string;
  extraError?: string;
}

const ToDoList01 = () => {
  // const [toDo, setToDo] = useState("");
  // const [toDoError, setToDoError] = useState("");

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (toDo.length < 10) {
  //     return setToDoError("To do should be longer...");
  //   }
  //   console.log(toDo);
  // };

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setToDoError("");
  //   setToDo(value);
  // };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<Form>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: Form) => {
    if (data.passWord1 !== data.passWord2) {
      setError(
        "passWord2",
        { message: "Password is not the same..." },
        { shouldFocus: true }
      );
    }
    setValue("userName", "");
    // setError("extraError", { message: "Now Loading...." });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/g,
              message: "Only naver.com email is allowed...",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", {
            required: "Write Here",
            validate: (value) =>
              value.includes("test") ? "No test allowed" : true,
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("userName", { required: true, minLength: 10 })}
          type="text"
          placeholder="User Name"
        />
        <span>{errors?.userName?.message as string}</span>
        <input
          {...register("passWord1", {
            required: "Password is required...",
            minLength: {
              value: 5,
              message: "Your Password is too short...",
            },
          })}
          type="text"
          placeholder="Password1"
        />
        <span>{errors?.passWord1?.message as string}</span>
        <input
          {...register("passWord2", { required: true, minLength: 5 })}
          type="text"
          placeholder="Password2"
        />
        <span>{errors?.passWord2?.message as string}</span>
        <input type="submit" value={"ADD"} />
        <span>{errors?.extraError?.message as string}</span>
      </Form>
    </Container>
  );
};

export default ToDoList01;
