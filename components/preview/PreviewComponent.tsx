import { usePreview } from "@/sanity/utils/usePreview";
import { ReactNode, ReactElement } from "react";

type PreviewComponentProps = {
  token?: string | null;
  query: string;
  Component: ReactElement;
};

export default function PreviewComponent({
  token = null,
  query,
  Component,
}: PreviewComponentProps) {
  const data = usePreview(token, query);

  return <>{data && <Component {...data} />}</>;
}
