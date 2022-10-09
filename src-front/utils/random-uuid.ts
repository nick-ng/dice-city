export default function randomUUID(): string {
  if (typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  let uuid = "";
  for (let n = 0; n < 36; n++) {
    if ([8, 13, 18, 23].includes(n)) {
      uuid = uuid + "-";
    } else {
      const randomNumber = Math.floor(36 * Math.random());
      uuid = uuid + randomNumber.toString(36);
    }
  }

  return uuid;
}
