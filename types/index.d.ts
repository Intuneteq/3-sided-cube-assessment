type Svg = {
  className: string;
  onClick?: () => void;
  stroke?: string;
};

type Stack = "none" | "vertical" | "horizontal";

type BtnType = "button" | "submit" | "link" | "anchor";

type Inputs = "nominee" | "reasoning" | "rating";

type FormValues = {
  nominee: string;
  reasoning: string;
  rating: string;
};

type FormType =
  | "text"
  | "tel"
  | "email"
  | "password"
  | "textarea"
  | "select"
  | "range";

interface Option {
  value: string;
  label: string;
}

type Nominee = {
  nominee_id: string;
  first_name: string;
  last_name: string;
};

type CreateNomineeResponse = {
  nomination_id: "string";
  nominee_id: "string";
  reason: "string";
  process: "string";
  date_submitted: "string";
  closing_date: "string";
};

