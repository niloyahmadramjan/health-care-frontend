"use client";
import { useForm } from "@tanstack/react-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../ui/field";
import { loginSchema } from "@/validation/auth.validation";
import { useState } from "react";
import { Eye, EyeOffIcon } from "lucide-react";
import { useGoogleOAuh, useLogin } from "@/hooks";
import { useRouter } from "next/navigation";
import { toast } from "../ui/toast";
import { Spinner } from "../ui/spinner";
import { GoogleLogin } from "@react-oauth/google";

function LoginForm() {
  const [showPassword, setPassword] = useState(false);

  const router = useRouter();

  const { mutate: login, isPending: loginPending } = useLogin();
  const { mutate: googleLogin } = useGoogleOAuh();


  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      // console.log(data);
      const loginData = {
        email: value.email,
        password: value.password,
      };
      login(loginData, {
        onSuccess: (res) => {
          toast.add({
            title: "successfully login",
            description: "Welcome back",
            type: "success",
          });
          // console.log(res);
          router.push("/");
        },
        onError: (err) => {
          toast.add({
            title: "Authorization failure",
            description: err.message || "something went wronge",
            type: "error",
          });
          console.log(err);
        },
      });
    },
  });

  const handleGoogleSuccess = (credentialResponse: { credential?: string }) => {
   const idToken = credentialResponse.credential
   
    if (!idToken) {
      toast.add({
        title: "Google login failed",
        description: "Oops something went wrong. Please try again",
        type: "error",
      });
      return;
    }
     googleLogin({idToken},{
      onSuccess: ()=>{
          toast.add({
        title: "Google logged in successfull",
        description: "Welcome back",
        type: "success",
      });
      router.push("/")
      },
      onError: (error)=>{
  toast.add({
        title: "Google login failed",
        description: error.message || "Oops something went wrong. Please try again",
        type: "error",
      });
      }
     })
  };

  const handleGoogleError = () => {
    toast.add({
      title: "Google login failed",
      description: "Oops something went wrong. Please try again",
      type: "error",
    });
  };
  return (
    <div>
      <h2 className="text-3xl text-center">Login to your account</h2>
      <p className="p-4 text-center text-sm">
        Ente your email and password to access your account
      </p>
      <form
        className="mb-5"
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
                      {showPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeOffIcon size={20} />
                      )}
                    </button>
                  </div>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <Button disabled={loginPending} type="submit">
            {loginPending ? (
              <>
                <Spinner />
                Submiting...
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </FieldGroup>
      </form>
      <FieldSeparator className="mb-2">Or continue with google</FieldSeparator>
      <GoogleLogin
        theme="filled_blue"
        shape="pill"
        text="continue_with"
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
      />
    </div>
  );
}

export default LoginForm;
