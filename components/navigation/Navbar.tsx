import Link from "next/link";
import Button from "../utility/button/Button";
// import { useLogout } from '../hooks/useLogout';
// import { useContext } from 'react';
// import { UserContext } from '../context/AuthContext';

const Navbar = () => {
  // const { user } = useContext(UserContext);
  // const { logoutUser } = useLogout();
  let user = false;
  return (
    <header className="shadow sticky top-0 bg-white z-50">
      <div className="max-w-[50rem] px-3 mx-auto flex items-center h-16 justify-between">
        <Link href="/">
          <h2 className="text-xl font-extrabold text-green hover:text-green2 transition-all duration-300">
            TODO APP
          </h2>
        </Link>

        <nav className="flex gap-6 justify-center items-center">
          {!user ? (
            <>
              <Link href="/login" className="hover:text-green2">
                Login
              </Link>
              <Link href="/signup">
                <Button variant="primary">Sign up </Button>
              </Link>
            </>
          ) : (
            // <Button onClick={() => logoutUser()}>Logout</Button>
            <Button onClick={() => {}}>Logout</Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
