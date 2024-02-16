import Button from "@/components/(auth)/Button";
import Header from "@/components/(auth)/Header";
import LinksPage from "@/components/(auth)/LinksPage";
import TextFields from "@/components/(auth)/TextFields";

const Register = () => {
  return (
    <div>
    <Header name={"Register"} />
    <TextFields type={"text"} placeholder={"Type your Username "} htmlFor={"username"} label={"Username"} />
    <TextFields type={"Email"} placeholder={"Type your Email "} htmlFor={"Email"} label={"Email"} />
    <TextFields type={"Password"} placeholder={"Type your Password "} htmlFor={"Password"} label={"Password"} />
    <TextFields type={"Password"} placeholder={"Type your Confirm Password "} htmlFor={"Confirm Password"} label={"Confirm Password" } />
    <Button name={"Register"} />
    <LinksPage href={"./login"} nodeText={"Already have an account! Log-in"} />
    </div>
  );
};

export default Register;
