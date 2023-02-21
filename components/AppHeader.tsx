import Image from "next/image";
import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="flex h-24 overflow-visible shadow">
      <nav className="flex grow">
        <ul>
          <li className="rounded-md bg-amber-200/5">
            <Link href="/commandez-maintenant">Commandez</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Image
          src="/jawzam-logo.svg"
          width={146}
          height={133}
          alt="Jawzam.com"
        />
      </div>
      <ul className="flex grow"></ul>
    </header>
  );
}
