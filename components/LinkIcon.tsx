import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type SafeNumber = number | `${number}`;

interface LinkIconProps extends LinkProps {
  className?: string;
  icon: IconProp;
  size?: SafeNumber;
  children?: ReactNode;
}

export default function LinkIcon({
  icon,
  size,
  className,
  children,
  ...props
}: LinkIconProps) {
  return (
    <Link
      {...props}
      className={classNames(
        className,
        "transition-transform ease-in-out hover:scale-110"
      )}
    >
      <FontAwesomeIcon
        icon={icon}
        height={size ?? 28}
        width={size ?? 28}
      />
      <span className="sr-only">{children}</span>
    </Link>
  );
}
