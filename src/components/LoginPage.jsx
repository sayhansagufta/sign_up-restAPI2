import { Card, CardHeader, Input, Button } from "@nextui-org/react";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika untuk menangani login, misalnya memanggil API
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset input setelah login
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold text-lg text-center">Login</CardHeader>
        <div className="p-4">
          <form onSubmit={handleLogin}>
            <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4" required />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4" required />
            <Button type="submit" color="primary" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
