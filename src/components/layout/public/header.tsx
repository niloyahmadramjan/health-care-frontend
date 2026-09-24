import { Button } from "@/components/ui/button";
import Link from "next/link";

const routes = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about-us" },
  { name: "Doctors", url: "/doctors" },
];

function HeaderSection() {
  return (
    <header className="w-full px-4 py-2 bg-white shadow-md  ">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
 <div>
        <h2>PH HEALTH CARE</h2>
      </div>
     <div className="flex gap-4"> {routes.map((route) => (
        <Link key={route.url} href={route.url}>{route.name}</Link>
      ))}</div>
      <div>
       <Button variant="outline" render={<Link href="/login" />}
       nativeButton={false}>
       Login
       </Button>
      </div>

    </div>
    
    </header>

  );
}

export default HeaderSection;
