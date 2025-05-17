export interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
