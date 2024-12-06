import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react"; // Mengimpor komponen Button dan Input dari NextUI
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance2 } from "../lib/signup_axios";
import { toast } from "sonner";
import axios from "axios";

const SignUpValidationSchema = z.object({
  email: z.string().email("Format Email Belum Sesuai"),
  username: z.string().min(4, "Username harus 4 Karakter atau lebih"),
  password: z.string().min(8, "Password harus 8 Karakter atau lebih "),
});

const SignUpValidation = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(SignUpValidationSchema),
  });

  const signupForm = async (data) => {
    try {
      const { email, username, password } = data;
      await axiosInstance2.post("/sign-up", {
        email,
        username,
        password,
      });
      toast.success("You Have added an item!");
    } catch (error) {
      console.log("Error During SignUp : ", error);
      toast.error("Server Error, Please wait for a moment!");
    }
  };

  // const registerUser = (data) => {
  //   // console.log(data);
  //   alert(`Data Submitted! Email : ${data.email} | Username: ${data.username} | Password: ${data.password}`);
  // };
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold text-lg">Sign Up!</CardHeader>
        <Divider />
        <CardBody>
          <form onSubmit={form.handleSubmit(signupForm)} className="flex flex-col gap-4">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} type="email" label="Email" size="sm" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />;
              }}
            />
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} label="Username" size="sm" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />;
              }}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} type="password" label="Password" size="sm" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />;
              }}
            />

            <Button type="submit" color="primary">
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUpValidation;
