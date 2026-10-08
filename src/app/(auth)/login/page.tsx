import LoginForm from "@/features/auth/components/login/loginform";
import LoginHero from "@/features/auth/components/login/loginhero";

export default function LoginPage(){
    return(
        <>
           
       <main className="py-10">
       <div className="container max-w-7xl mx-auto grid  grid-cols-1 lg:grid-cols-2 gap-12 p-4">
        <LoginHero/>
        <LoginForm/>

       </div>
       </main>
           </>
    )
}