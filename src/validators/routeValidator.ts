import { dinoDocsBodyRegex, routePathRegex } from "../utils/regexUtils";

export const isValidRoutePath = (path: string) => {
  return routePathRegex.test(path);
};

export const matchDinoDocsBody = (str: string) => {
  return str
    .trim()
    .match(dinoDocsBodyRegex);
};