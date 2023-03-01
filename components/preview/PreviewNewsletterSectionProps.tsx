import { usePreview } from "@/sanity/utils/usePreview";
import { groq } from "next-sanity";
import NewsletterSection, {
  NewsletterSectionProps,
} from "@/components/NewsletterSection";

const token = process.env.SANITY_API_TOKEN!;

export default function PreviewNewsletterSection() {
  const query = groq`*[_type=="homePage" && _id=="homePage"]{
    newsletterBannerTitle,
    newsletterBannerSentence
  }[0]`;
  const data = usePreview(token, query) as NewsletterSectionProps;

  return <>{data && <NewsletterSection {...data} />}</>;
}
