export function isURL(str: string) {
  // Regular expression for a URL
  const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d{1,5})?[/\w .-]*$/i;

  return urlPattern.test(str);
}

export function decorateWord(inputString: string, wordToWrap: string) {
  console.log(wordToWrap);

  return inputString.replace(
    new RegExp(wordToWrap, "g"),
    `<span style={color: "#FFFFF"} className="text-primary-pink">${wordToWrap}</span>`
  );
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
