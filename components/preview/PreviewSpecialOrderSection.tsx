import { usePreview } from "@/sanity/utils/usePreview";
import { groq } from "next-sanity";
import SpecialOrderSection from "@/components/SpecialOrderSection";

export default function PreviewSpecialOrderSection() {
  const query = groq`*[_type=="homePage" && _id=="homePage"]{
    specialOrderBannerTitle,
    specialOrderBannerSentence
  }[0]`;
  const { specialOrderBannerSentence, specialOrderBannerTitle } = usePreview(
    "home-features",
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
