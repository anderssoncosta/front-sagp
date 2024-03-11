import React from "react";
import { icons } from "lucide-react";

type LucideIconName = keyof typeof icons;

interface IconProps {
  name: LucideIconName;
  color?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  color = "currentColor",
  size = 24,
}) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.error(`Ícone "${name}" não encontrado.`);
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
