import { createContentLoader } from "vitepress";

export default createContentLoader("posts/**/*.md", {
  includeSrc: false,
  transform(rawData) {
    // console.log(rawData.map((data) => data));
    const filteredData = rawData.filter(
      (page) =>
        page.url !== "/posts/postList.html" &&
        page.url !== "/posts/tagList.html"
    );

    const sortedData = filteredData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
    });

    const mappedData = sortedData.map((page: any) => {
      page.relativePath =
        page.url.replace(/^\/docs\/posts\/[0-9]+\/[0-9]+\//g, "posts/") + ".md";
      page.url = page.url
        .replace(/^\/docs\/posts\/[0-9]+\/[0-9]+\//g, "/posts/")
        .replace(/index$/g, "");
      return page;
    });

    return mappedData;
  },
});
