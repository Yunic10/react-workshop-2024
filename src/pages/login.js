import Link from "next/link";
import { InputGroup } from "../components/InputGroup";
import { Card } from "../components/Card";
import { LOGIN_INPUT } from "../configs/form";
import { Button } from "../components/Button";
import { Copyright } from "../components/Copyright";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <Card title="Login">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(form);
            }}
          >
            <InputGroup
              id="email"
              label="Email"
              required={true}
              type="email"
              onChange={(event) => {
                setForm({
                  ...form,
                  email: event.target.value,
                });
              }}
              value={form.email}
            />
            <InputGroup
              id="password"
              label="Password"
              required={true}
              type="password"
              value={form.password}
              onChange={(event) => {
                setForm((oldState) => {
                  return {
                    ...oldState,
                    password: event.target.value,
                  };
                });
              }}
            />
            <div className="flex items-center justify-between">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="./register"
              >
                Belum punya akun?
              </Link>
              <Button
                label="Sign In"
                type="submit"
                disabled={!(form.email && form.password)}
              />
            </div>
          </form>
        </Card>
        <Copyright />
      </div>
    </div>
  );
}
