import Link from "next/link";
import Button from "../components/utility/button/Button";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Links</h1>
      <Link href="/utility" className="text-blue underline">
        1. Utility components
      </Link>
    </div>
  );
}
