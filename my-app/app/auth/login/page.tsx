import Button from "@/components/(auth)/Button";
import Header from "@/components/(auth)/Header";
import LinksPage from "@/components/(auth)/LinksPage";
import TextFields from "@/components/(auth)/TextFields";

const Login = () => {
  return (
    <div>
    <Header name={"Login"} />
    <TextFields type={"text"} placeholder={" Username / Email "} htmlFor={"username"} label={"Username / E-Mail"} />
    <TextFields type={"Password"} placeholder={" Password "} htmlFor={"Password"} label={"Password"} />
    <Button name={"Login"} />
    <LinksPage href={"./register"} nodeText={"Don't have an account! Sign up"} />
    </div>
  );
};

export default Login;
