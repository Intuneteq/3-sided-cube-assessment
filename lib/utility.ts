import { ProcessPayload, ProcessValues } from "./constants";

export function isURL(str: string) {
  // Regular expression for a URL
  const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d{1,5})?[/\w .-]*$/i;

  return urlPattern.test(str);
}

/**
 *
 * @param text - Full text string
 * @param toDecorate - string in text to be decorated i.e wrapped around a span and color #F70087
 */
export const decorateNominee = (text: string, toDecorate: string) => {
  const regex = new RegExp(`\\b${toDecorate}\\b`, "g");
  return text.replace(
    regex,
    `<span style="color: #F70087">${toDecorate}</span>`
  );
};

export function findNominee(
  nominees: Nominee[],
  nominee_id: string
): Nominee | undefined {
  return nominees.find((item) => item.nominee_id === nominee_id);
}

/**
 *
 * @param nominees
 * Group Nominee select drop down options
 */
export function groupOptions(nominees: Nominee[]): Option[] {
  const options = nominees.map((nominee) => {
    return {
      label: nominee.first_name + " " + nominee.last_name,
      value: nominee.nominee_id,
    };
  });

  return options;
}

export function processValue(value: number) {
  switch (value) {
    case 1:
      return ProcessValues.VERY_UNFAIR;

    case 2:
      return ProcessValues.UNFAIR;

    case 3:
      return ProcessValues.NOT_SURE;

    case 4:
      return ProcessValues.FAIR;

    case 5:
      return ProcessValues.VERY_FAIR;

    default:
      return ProcessValues.VERY_UNFAIR;
  }
}

export function processValueToNumber(process: ProcessValues) {
  switch (process) {
    case ProcessValues.VERY_UNFAIR:
      return 1;

    case ProcessValues.UNFAIR:
      return 2;

    case ProcessValues.NOT_SURE:
      return 3;

    case ProcessValues.FAIR:
      return 4;

    case ProcessValues.VERY_FAIR:
      return 5;

    default:
      return 1; // You can set a default value if needed
  }
}

export function processPayload(value: number) {
  switch (value) {
    case 1:
      return ProcessPayload.VERY_UNFAIR;

    case 2:
      return ProcessPayload.UNFAIR;

    case 3:
      return ProcessPayload.NOT_SURE;

    case 4:
      return ProcessPayload.FAIR;

    case 5:
      return ProcessPayload.VERY_FAIR;

    default:
      return ProcessPayload.VERY_UNFAIR;
  }
}

export function mapProcessValue(payloadValue: string): ProcessValues {
  switch (payloadValue) {
    case ProcessPayload.VERY_UNFAIR:
      return ProcessValues.VERY_UNFAIR;
    case ProcessPayload.UNFAIR:
      return ProcessValues.UNFAIR;
    case ProcessPayload.NOT_SURE:
      return ProcessValues.NOT_SURE;
    case ProcessPayload.FAIR:
      return ProcessValues.FAIR;
    case ProcessPayload.VERY_FAIR:
      return ProcessValues.VERY_FAIR;
    default:
      return ProcessValues.FAIR; // Set a default value in case of an unknown value
  }
}
