import z from "zod";
z.Schema;

export const jsonSafeParse = (str?: string | null) => {
  if (!str) {
    return {
      error: "jsonSafeParse: string is empty",
      success: false as const,
    };
  }

  try {
    return {
      json: JSON.parse(str),
      success: true as const,
    };
  } catch (e) {
    console.error("error parsing json", e);
    return {
      error: `jsonSafeParse: couldn't parse ${str}`,
      success: false as const,
    };
  }
};

export const jsonSafeParseS = <T>(schema: z.Schema<T>, str?: string | null) => {
  const resJ = jsonSafeParse(str);

  if (!resJ.success) {
    return resJ;
  }

  const res = schema.safeParse(resJ.json);

  if (!res.success) {
    return res;
  }

  return res;
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
