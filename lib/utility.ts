// import { ProcessValues } from "./constants";

import { ProcessPayload, ProcessValues } from "./constants";

export function isURL(str: string) {
  // Regular expression for a URL
  const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d{1,5})?[/\w .-]*$/i;

  return urlPattern.test(str);
}

export const decorateNominee = (
  text: string,
  toDecorate: string,
  nominee: Nominee
) => {
  const regex = new RegExp(`\\b${toDecorate}\\b`, "g");
  return text.replace(
    regex,
    `<span style="color: #F70087">${nominee.first_name}</span>`
  );
};

export function findNominee(
  nominees: Nominee[],
  nominee_id: string
): Nominee | undefined {
  return nominees.find((item) => item.nominee_id === nominee_id);
}

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

function mapProcessValue(payloadValue: string): ProcessValues {
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

export function getNomineesInfo(
  nominations: Nomination[],
  nominees: Nominee[]
): INomination[] {
  // Create a mapping of nominee_id to Nominee
  const nomineeMap: Record<string, Nominee> = {};
  nominees.forEach((nominee) => {
    nomineeMap[nominee.nominee_id] = nominee;
  });

  // Transform the nominations into INomination
  const nomineesInfo: INomination[] = nominations.map((nomination) => {
    const nominee = nomineeMap[nomination.nominee_id];
    if (nominee) {
      return {
        nominee_id: nomination.nominee_id,
        fullName: `${nominee.first_name} ${nominee.last_name}`,
        reason: nomination.reason,
        process: mapProcessValue(nomination.process),
        date_submitted: nomination.date_submitted,
        closing_date: nomination.closing_date,
      };
    }
    return {
      nominee_id: "",
      fullName: "Nominee not found",
      reason: nomination.reason,
      process: mapProcessValue(nomination.process),
      date_submitted: nomination.date_submitted,
      closing_date: nomination.closing_date,
    };
  });

  return nomineesInfo;
}
