import { Button as HerouiButton } from "@heroui/react";

import { Button as ButtonProps } from "@/types/types";

const Button = ({
  as = "button",
  href,
  rel,
  target,
  isLoading,
  isDisabled,
  type = "button",
  children,
  size = "md",
  color = "default",
  variant = "shadow",
  value,
  radius = "lg",
  className,
  ...props
}: ButtonProps) => {
  return (
    <HerouiButton
      as={as}
      startContent
      className={className}
      color={color}
      href={href}
      isDisabled={isDisabled}
      isLoading={isLoading}
      radius={radius}
      rel={rel}
      size={size}
      target={target}
      type={type}
      value={value}
      variant={variant}
      {...props}
    >
      {children}
    </HerouiButton>
  );
};

export default Button;
