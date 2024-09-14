import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Copyright } from "../components/Copyright";
import { InputGroup } from "../components/InputGroup";
import { REGISTRATION_INPUT } from "../configs/form";
import Link from "next/link";

export default function RegisterPage (){
    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
    <div className="w-full max-w-md">
        <Card title={"Register"}>
        <form action="#">
          {REGISTRATION_INPUT.map((input) => (
            <InputGroup key={input.id} {...input} />
          ))}
          <div className="flex items-center justify-between">
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="./login"
            >
              Sudah punya akun?
            </Link>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white" label="Register"/>
          </div>
        </form>
        </Card>
      <Copyright/>
    </div>
  </div>
    );
}