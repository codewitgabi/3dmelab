import { RegisterForm } from "../_components/register-form";

export default function RegisterPage() {
  async function registerAction(formData: FormData) {
    "use server";
    // TODO: create user (e.g. DB insert) and sign in
    formData.get("email");
    formData.get("password");
  }

  return (
    <>
      <h1 className="text-center text-xl font-semibold tracking-tight text-foreground">
        Create an account
      </h1>
      <p className="mt-1 text-center text-sm text-muted-foreground">
        Enter your email and a password to get started.
      </p>
      <div className="mt-6">
        <RegisterForm action={registerAction} />
      </div>
    </>
  );
}
