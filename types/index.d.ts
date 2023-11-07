type Svg = {
  className: string;
  onClick?: () => void;
  stroke?: string;
};

type Stack = "none" | "vertical" | "horizontal"

type BtnType = "button" | "submit" | "link" | "anchor";

type Inputs = "nominee" | "reasoning" | "rating";

type FormType = "text" | "tel" | "email" | "password" | "textarea" | "select" | "range";

type FormValues = { [K in Inputs]: string };

interface Option {
  value: string;
  label: string;
}