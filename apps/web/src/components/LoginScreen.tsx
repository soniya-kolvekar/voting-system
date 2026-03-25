import { SignIn } from "@clerk/react";

export default function LoginScreen() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100dvh" }}>
      <SignIn />
    </div>
  );
}
