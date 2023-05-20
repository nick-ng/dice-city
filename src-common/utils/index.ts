export const jsonSafeParse = (str?: string | null) => {
  if (!str) {
    return {
      error: new Error("jsonSafeParse: string is empty"),
      success: false,
    };
  }

  try {
    return {
      json: JSON.parse(str),
      success: true,
    };
  } catch (e) {
    return {
      error: e,
      success: false,
    };
  }
};

export const cookieParse = (cookieString?: string) => {
  if (!cookieString) {
    return {};
  }

  return cookieString
    .split(";")
    .reduce<{ [key: string]: string }>((prev, curr) => {
      const [key, value] = curr.split("=");

      if (typeof value === "string") {
        return {
          ...prev,
          [key.trim()]: value,
        };
      }

      return {
        ...prev,
        "": key.trim(),
      };
    }, {});
};
