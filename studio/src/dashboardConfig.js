export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61bad9564937e123006fc52a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mhdz2g5a",
                  apiId: "0818d362-dfbc-4efd-b4a1-46a02f0014f6",
                },
                {
                  buildHookId: "61bad956fae0db1e1b801566",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-tav5vduj",
                  apiId: "9f48c42c-61d3-480f-98fe-5511b647bad0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/malouGille47/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-tav5vduj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
