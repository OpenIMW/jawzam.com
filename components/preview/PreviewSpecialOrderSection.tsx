import { usePreview } from "@/sanity/utils/usePreview";
import { groq } from "next-sanity";
import SpecialOrderSection from "@/components/SpecialOrderSection";

const token = process.env.SANITY_API_TOKEN!;

export default function PreviewSpecialOrderSection() {
  const query = groq`*[_type=="homePage" && _id=="homePage"]{
    specialOrderBannerTitle,
    specialOrderBannerSentence
  }[0]`;
  const { specialOrderBannerSentence, specialOrderBannerTitle } = usePreview(
    null,
    query
  );

  return (
    <>
      {specialOrderBannerTitle && specialOrderBannerSentence && (
        <SpecialOrderSection
          headline={specialOrderBannerTitle}
          subtitle={specialOrderBannerSentence}
        />
      )}
    </>
  );
}
