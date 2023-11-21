import { icons } from "lucide-react";
import { cn } from "~/lib/utils";

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
  color?: string;
  size?: string;
  className?: string;
}

/**
 * https://lucide.dev/guide/packages/lucide-react#icon-component-example
 * @param {IconProps} props
 * @returns {JSX.Element}
 */
const Icon = ({ name, color, size, className }: IconProps) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      color={color}
      size={size}
      className={cn("opacity-[0.99]", className)}
    />
  );
};

export default Icon;
