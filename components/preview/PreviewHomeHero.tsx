import { usePreview } from "@/sanity/utils/usePreview";
import { groq } from "next-sanity";
import HomeHero, { HomeHeroProps } from "../HomeHero";

const token = process.env.SANITY_API_TOKEN!;

export default function PreviewHomeHero() {
  const query = groq`*[_type=="homePage" && _id=="homePage"]{
    bgImage,
    catchPhrase,
    buttonLabel
  }[0]`;
  const data = usePreview(token, query) as HomeHeroProps;

  return <>{data && <HomeHero {...data} />}</>;
}
