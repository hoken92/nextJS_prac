"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

function SignOutLink() {
  const { toast } = useToast();

  // Handles logout and displays the toast message
  const handleLogOut = () => {
    toast({ description: "You have been signed out." });
  };

  // redirecturl will navigate home after signout
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogOut}>
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
