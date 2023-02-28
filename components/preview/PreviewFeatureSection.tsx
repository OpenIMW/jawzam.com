import { usePreview } from "@/sanity/utils/usePreview";
import { groq } from "next-sanity";
import FeatureSection, { FeatureItem } from "@/components/FeatureSection";

export default function PreviewFeatureSection() {
  const query = groq`*[_type=="homePage" && _id=="homePage"]{
    features[]->{
      icon,
      title,
      description
    }
  }[0]`;
  const { features } = usePreview("home-features", query) as {
    features: FeatureItem[];
  };

  return <>{features && <FeatureSection features={features} />}</>;
}
