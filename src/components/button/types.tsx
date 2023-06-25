interface IButton {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface IPrimary extends IButton {
  onClick: () => void;
  text: string;
}
