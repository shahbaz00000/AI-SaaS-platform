import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import {useClerk,UserButton,useUser} from "@clerk/react";

const Navbar = () => {
  const {user} = useUser();  
  const { isSignedIn } = useUser();
  const {openSignIn} = useClerk();
  

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100 text-black shadow-md">
      
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
        <Sparkles className="text-blue-700" />
        Quick AI
      </Link>

      {isSignedIn ? <UserButton /> : <button onClick={openSignIn} className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl font-medium shadow-lg">
        Get Started
      </button>
}
      

    </nav>
  );
};

export default Navbar;