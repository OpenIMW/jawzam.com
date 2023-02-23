import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppLink from "./AppLink";
import LinkIcon from "./LinkIcon";

export default function AppHeader() {
  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
  return (
    <header className="relative z-10 h-14 overflow-visible shadow md:h-[82px]">
      <nav className="relative flex h-full items-center justify-between md:container md:gap-4 lg:gap-12">
        <Link
          href="/"
          className="relative z-10 ml-4 self-start md:ml-0"
        >
          <Image
            className="h-18 flex w-20 justify-center md:h-28 md:w-[126px]"
            src="/jawzam-logo.svg"
            width={126}
            height={113}
            alt="Jawzam.com"
          />
        </Link>
        <button
          className="group mr-4 flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md border-pink-200 md:hidden"
          onClick={() => setNavbarMenuOpen(!navbarMenuOpen)}
        >
          <span
            className={classNames(
              "ease h-1 w-6 transform rounded-full bg-primary transition-transform duration-300 ease-in-out",
              {
                "translate-y-2 rotate-45 opacity-80 group-hover:opacity-100":
                  navbarMenuOpen,
                "opacity-80 group-hover:opacity-100": !navbarMenuOpen,
              }
            )}
          ></span>
          <span
            className={classNames(
              "ease h-1 w-6 transform rounded-full bg-primary transition-transform duration-300 ease-in-out",
              {
                "opacity-0": navbarMenuOpen,
                "opacity-80 group-hover:opacity-100": !navbarMenuOpen,
              }
            )}
          ></span>
          <span
            className={classNames(
              "ease h-1 w-6 transform rounded-full bg-primary transition-transform duration-300 ease-in-out",
              {
                "-translate-y-2 -rotate-45 opacity-80 group-hover:opacity-100":
                  navbarMenuOpen,
                "opacity-80 group-hover:opacity-100": !navbarMenuOpen,
              }
            )}
          ></span>
          <span className="sr-only">
            {navbarMenuOpen ? "Ouvrir" : "Fermer"} le menu de navigation
          </span>
        </button>
        <div
          className={classNames(
            "absolute top-14 flex h-[calc(100vh_-_3.5rem)] w-full grow transform flex-col justify-between self-center bg-white transition-transform duration-300 md:static md:h-full md:w-auto md:translate-x-0 md:flex-row",
            {
              "translate-x-0 ease-in": navbarMenuOpen,
              " -translate-x-[130%] ease-out": !navbarMenuOpen,
            }
          )}
        >
          <ul className="flex grow flex-col justify-center gap-2 text-center md:flex-row">
            <li className="flex items-center justify-center">
              <AppLink href="/commandez-maintenant">Commandez</AppLink>
            </li>
            <li className="flex items-center justify-center">
              <AppLink href="/suivez-votre-maintenant">Livraison</AppLink>
            </li>
            <li className="flex items-center justify-center">
              <AppLink href="/suivez-votre-maintenant">
                Suivez votre commande
              </AppLink>
            </li>
          </ul>

          <ul className="flex items-center justify-between gap-1 p-4 text-primary md:justify-self-end md:p-0">
            <li className="flex items-center justify-center">
              <ul className="flex gap-4">
                <li className="flex items-center justify-center">
                  <LinkIcon
                    href="tel:+33634573653"
                    icon={faPhone}
                  >
                    Appelez-nous au +33634573653
                  </LinkIcon>
                </li>
                <li className="flex items-center justify-center">
                  <LinkIcon
                    href="/facebook-messenger"
                    icon={faFacebookMessenger}
                  >
                    Contactez-nous via Facebook Messenger
                  </LinkIcon>
                </li>
                <li className="flex items-center justify-center">
                  <LinkIcon
                    href="/whatsapp"
                    icon={faWhatsapp}
                  >
                    Contactez-nous via WhatsApp
                  </LinkIcon>
                </li>
                <li className="flex items-center justify-center">
                  <LinkIcon
                    href="mailto:contact@jawzam.com"
                    icon={faEnvelope}
                  >
                    Contactez-nous via e-mail
                  </LinkIcon>
                </li>
              </ul>
            </li>
            <li className="ml-6 flex">
              <Link
                className="rounded-full bg-primary p-3 text-white transition-transform ease-in-out hover:scale-105 hover:shadow-lg"
                href="/facebook-messenger"
              >
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  height={26}
                  width={26}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
