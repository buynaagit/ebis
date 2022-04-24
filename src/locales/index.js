import jpJP from "./jp_JP.json";
import mnMN from "./mn_MN.json";

const localeConfig = {
  jp: jpJP,
  mn: mnMN,
};

export const getLocale = (id) => {
  let locale = localStorage.getItem("language");
  if (locale === null) {
    localStorage.setItem("language", "jp");
    locale = "jp";
  }
  let msg;
  if (locale === "mn") msg = localeConfig["mn"];
  else msg = localeConfig["jp"];
  const content = msg[id];
  if (content === null) return "None";
  else return content;
};
