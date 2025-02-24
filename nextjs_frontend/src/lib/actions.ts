import { executeAction } from "./executeAction";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      console.log("email:", formData.get("email"));
      console.log("password:", formData.get("password"));

      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
    },
    successMessage: "Signed up successfully",
  });
};

export { signUp };
