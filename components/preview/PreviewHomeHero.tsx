import { usePreview } from "../../sanity/utils/usePreview";
import { groq } from "next-sanity";
import HomeHero, { HomeHeroProps } from "../HomeHero";
import { useEffect } from "react";

export default function PreviewHomeHero() {
  const query = groq`*[_type=="homeHero" && _id=="homeHero"]{
    bgImage,
    catchPhrase
  }[0]`;
  const data = usePreview(null, query) as HomeHeroProps;

  return <>{data && <HomeHero {...data} />}</>;
}