import * as cheerio from "cheerio";

export function sanitizeArticleBody(rawHTML: string): string {
  if (!rawHTML) return "";

  const $ = cheerio.load(rawHTML, null, false);

  $(".ltag__link--embedded").remove();

  return $.html();
}
