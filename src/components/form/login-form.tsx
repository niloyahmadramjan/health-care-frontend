"use client";
import { useForm } from "@tanstack/react-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { loginSchema } from "@/validation/auth.validation";
import { useState } from "react";
import { Eye, EyeOffIcon } from "lucide-react";

function LoginForm() {
  const [showPassword, setPassword] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      <h2 className="text-3xl text-center">Login to your account</h2>
      <p className="p-4 text-center text-sm">
        Ente your email and password to access your account
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    autoComplete="off"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="password">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <div className=" relative">
                    <Input
                    id={field.name}
                    type={showPassword ? "text" : "password"}
                    name={field.name}
                    autoComplete="off"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <button
                  className=" absolute right-3 top-1/2 -translate-y-1/2"
                    type="button"
                    onClick={() => setPassword((prev) => !prev)}
                  >
                    {showPassword ? <Eye size={20}/> : <EyeOffIcon size={20} />}
                  </button>
                  </div>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <Button type="submit">Submit</Button>
        </FieldGroup>
      </form>
    </div>
  );
}

export default LoginForm;
