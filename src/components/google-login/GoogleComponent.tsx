import { useGoogleOAuh } from "@/hooks";
import { toast } from "../ui/toast";
import { useRouter } from "next/navigation";
import { FieldSeparator } from "../ui/field";
import { GoogleLogin } from "@react-oauth/google";

function GoogleComponent() {
  const router = useRouter();

  const { mutate: googleLogin } = useGoogleOAuh();

  const handleGoogleSuccess = (credentialResponse: {
    credential?: string;
  }) => {
    const idToken = credentialResponse.credential;

    if (!idToken) {
      toast.add({
        title: "Google login failed",
        description: "Oops, something went wrong. Please try again",
        type: "error",
      });
      return;
    }

    googleLogin(
      { idToken },
      {
        onSuccess: () => {
          toast.add({
            title: "Google login successful",
            description: "Welcome back",
            type: "success",
          });

          router.push("/");
        },

        onError: (error) => {
          toast.add({
            title: "Google login failed",
            description:
              error.message ||
              "Oops, something went wrong. Please try again",
            type: "error",
          });
        },
      },
    );
  };

  const handleGoogleError = () => {
    toast.add({
      title: "Google login failed",
      description: "Oops, something went wrong. Please try again",
      type: "error",
    });
  };

  return (
    <div className="w-full">
      <FieldSeparator className="mb-2">
        Or continue with Google
      </FieldSeparator>

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

export default GoogleComponent;