import FormLogin from "@/components/FormLogin";

const Login = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="h-64 w-60 bg-[url('/pez.jpg')] bg-cover bg-center" />
      <FormLogin />
    </div>
  )
};

export default Login;