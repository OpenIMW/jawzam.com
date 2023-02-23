import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { ReactElement, ReactNode } from "react";

interface AppLinkProp extends LinkProps {
  children?: ReactNode;
  className?: string;
}

export default function AppLink({
  className,
  children,
  ...props
}: AppLinkProp) {
  return (
    <Link
      {...props}
      className={classNames(
        "rounded-md border-primary bg-amber-200/5 p-4 text-base font-black text-primary after:block after:w-full after:scale-y-0 after:scale-x-0 after:rounded-lg after:transition-all after:duration-300 after:ease-in-out hover:after:h-1 hover:after:origin-center hover:after:scale-y-100 hover:after:scale-x-95 hover:after:bg-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}

// import Link, { LinkProps } from "next/link";
// import {
//   createElement,
//   ElementType,
//   ReactElement,
//   ReactHTML,
//   ReactNode,
// } from "react";

// interface AppLinkProp extends LinkProps {
//   children?: ReactNode;
//   className?: string;
//   parent?: keyof ReactHTML;
// }

// export default function AppLink({
//   className,
//   parent,
//   children,
//   ...props
// }: AppLinkProp) {
//   const ParentComponent = parent as ReactNode; // () => createElement(parent, {}, null);
//   return (
//     <ParentComponent className="rounded-md bg-amber-200/5 py-3 px-4 text-lg font-black text-primary">
//       <Link {...props}>{children}</Link>
//     </ParentComponent>
//   );
// }
