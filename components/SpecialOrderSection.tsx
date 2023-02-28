import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LinkIcon from "@/components/LinkIcon";
import Image from "next/image";

export type SpecialOrderSectionProps = {
  headline: string;
  subtitle: string;
};

export default function SpecialOrderSection({
  headline,
  subtitle,
}: SpecialOrderSectionProps) {
  return (
    <section className="min-h-screen bg-[url(/event-bg.svg)] bg-contain bg-bottom bg-no-repeat md:h-screen md:bg-center">
      <div className="container grid h-full items-center md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 px-6 pt-28 text-center md:px-20">
          <h2 className="text-3xl font-bold text-neutral-600">{headline}</h2>
          <p className="text-gray-500">{subtitle}</p>
          <div className="my-12 flex w-full flex-wrap items-center justify-around gap-4 text-primary">
            <Link
              href="tel:+33  6 3457 3653"
              className="block text-xl font-black transition-transform ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon
                height={24}
                width={24}
                icon={faPhone}
                className="inline"
              />{" "}
              +33 6 3457 3653
            </Link>
            <div className="flex justify-around gap-4">
              <LinkIcon
                icon={faFacebookMessenger}
                size="32"
                href="/facebook-messenger"
              />
              <LinkIcon
                icon={faWhatsapp}
                size="32"
                href="/whatsapp"
              />
              <LinkIcon
                icon={faEnvelope}
                size="32"
                href="mailto:contact@jawzam.com"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/event.svg"
            height={500}
            width={500}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
