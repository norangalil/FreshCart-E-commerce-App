import SignupHero from "@/features/auth/components/signup/Signuphero";
import Signupform from "@/features/auth/components/signup/Signupform";

import { IconUserPlus } from "@tabler/icons-react";
import Link from "next/link";
export default function SignupForm() {

  return (
    <>
    
<main className="py-10">
<div className="container max-w-7xl mx-auto grid  grid-cols-1 lg:grid-cols-2 gap-12 p-4">
<SignupHero/>
<Signupform/>
</div>
</main>
    </>
  );
}
