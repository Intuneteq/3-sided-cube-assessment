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
