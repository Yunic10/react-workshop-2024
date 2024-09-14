import Link from "next/link";
import { InputGroup } from "../components/InputGroup";
import { Card } from "../components/Card";
import { LOGIN_INPUT } from "../configs/form";
import { Button } from "../components/Button";
import { Copyright } from "../components/Copyright";
import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

export default function LoginPage() {
    const [state, setState] = useState(0);
    const [form, setForm] = useEffect();
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <Card title="Login">
            <p className="text-black">{state}</p>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white" label="counter" onClick={() => {
                setState(state + 1);
            }}/>
          <form action="#">
            <InputGroup id="email" label="Email" value={form.email} 
            onChange={(event) => (
              setForm((oldState) => {
                return {
                  ...oldState,
                  password : event.target.value,
                };
              })
            )}/>
            {/* {LOGIN_INPUT.map((input) => (
              <InputGroup key={input.id} {...input} />
            ))} */}
            <div className="flex items-center justify-between">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="./register"
              >
                Belum punya akun?
              </Link>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white" label="Sign In" />
            </div>
          </form>
        </Card>
        <Copyright />
      </div>
    </div>
  );
}