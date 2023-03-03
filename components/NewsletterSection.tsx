import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";

export type NewsletterSectionProps = {
  newsletterBannerTitle: string;
  newsletterBannerSentence: string;
};

export default function NewsletterSection(props: NewsletterSectionProps) {
  return (
    <section className="relative bg-secondary">
      <Image
        className="absolute -top-1 w-full"
        src="/subscribe-waves-bg-top.svg"
        alt=""
        width={1440}
        height={200}
      />
      <div className="container grid items-center gap-10 pt-44 pb-20 sm:pt-52 md:grid-cols-2 md:gap-2 md:pt-72">
        <div className="flex justify-center">
          <Image
            src="/subscribe.svg"
            width={474}
            height={342}
            alt="S'abonner aux newsletters de Jawzam.com"
          />
        </div>
        <div className="flex flex-col gap-4 px-4 text-neutral-900 md:px-12">
          <h2 className="text-3xl font-bold text-primary">
            {props.newsletterBannerTitle}
          </h2>
          <p className="text-gray-200">{props.newsletterBannerSentence}</p>
          <div className="my-4">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
}
