import { LoginForm } from "../_components/login-form";

export default function LoginPage() {
  async function loginAction(formData: FormData) {
    "use server";
    // TODO: validate credentials and sign in (e.g. NextAuth, custom session)
    formData.get("email");
    formData.get("password");
  }

  return (
    <>
      <h1 className="text-center text-xl font-semibold tracking-tight text-foreground">
        Sign in
      </h1>
      <p className="mt-1 text-center text-sm text-muted-foreground">
        Enter your email and password to continue.
      </p>
      <div className="mt-6">
        <LoginForm action={loginAction} />
      </div>
    </>
  );
}
