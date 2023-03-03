import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import AppLink from "./AppLink";
import LinkIcon from "./LinkIcon";

export default function AppFooter() {
  return (
    <footer className="container flex flex-col items-center justify-between gap-6 pb-10 md:grid-cols-2 md:flex-row">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row md:justify-start">
        <Link
          href="/"
          className="relative z-10 sm:self-start md:ml-0"
        >
          <Image
            className="h-auto w-40"
            src="/logo.svg"
            alt="Jawzam.com"
            width={717}
            height={664}
          />
        </Link>
        <ul className="flex items-center justify-end gap-6 px-4 pt-5 text-primary md:justify-self-end">
          <li className="flex items-center justify-center">
            <LinkIcon
              href="tel:+33634573653"
              icon={faPhone}
              size={32}
            >
              Appelez-nous au +33634573653
            </LinkIcon>
          </li>
          <li className="flex items-center justify-center">
            <LinkIcon
              href="/facebook-messenger"
              icon={faFacebookMessenger}
              size={32}
            >
              Contactez-nous via Facebook Messenger
            </LinkIcon>
          </li>
          <li className="flex items-center justify-center">
            <LinkIcon
              href="/whatsapp"
              icon={faWhatsapp}
              size={32}
            >
              Contactez-nous via WhatsApp
            </LinkIcon>
          </li>
          <li className="flex items-center justify-center">
            <LinkIcon
              href="mailto:contact@jawzam.com"
              icon={faEnvelope}
              size={32}
            >
              Contactez-nous via e-mail
            </LinkIcon>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 divide-y">
        <ul className="flex grow list-disc flex-col justify-center text-center text-secondary md:flex-row">
          <li className="flex items-center justify-center">
            <Link
              className="rounded-md p-4 text-base font-black transition-transform duration-300 ease-in-out hover:scale-110"
              href="/commandez-maintenant"
            >
              Commandez
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              className="rounded-md p-4 text-base font-black transition-transform duration-300 ease-in-out hover:scale-110"
              href="/suivez-votre-maintenant"
            >
              Livraison
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              className="rounded-md p-4 text-base font-black transition-transform duration-300 ease-in-out hover:scale-110"
              href="/suivez-votre-maintenant"
            >
              Suivez votre commande
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              className="rounded-md p-4 text-base font-black transition-transform duration-300 ease-in-out hover:scale-110"
              href="/légals"
            >
              Légals
            </Link>
          </li>
        </ul>
        <div className="flex flex-col justify-between border-neutral-400/10 pt-6 md:flex-row md:pr-3">
          <p className="text-sm text-gray-400">
            © 2023 Jawzam.com. Tous droits réservés.
          </p>
          <Link
            className="mt-12 flex items-center justify-center gap-2 text-xs text-neutral-400 md:mt-0"
            href="https://inmindweb.fr"
            target="_blank"
          >
            Realisé par{" "}
            <Image
              src="/inmindweb.svg"
              width={84}
              height={9}
              alt="Realisé par In Mind Web"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
