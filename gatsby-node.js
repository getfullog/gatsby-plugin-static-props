const fs = require("fs").promises
const recast = require("recast")
const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  if (page.component.indexOf(".cache") > 0) {
    return
  }

  require("@babel/register")({
    ignore: [/(node_modules)/],
    presets: ["babel-preset-gatsby"],
    plugins: ["babel-plugin-stylus-compiler"],
  })

  require("cross-fetch/polyfill")

  require("jsdom-global")()

  const PageComponent = require(page.component)
  const getStaticProps = PageComponent.getStaticProps || new Function()

  try {
    const staticProps = await getStaticProps()

    createPage({
      ...page,
      context: {
        ...page.context,
        ...staticProps,
      },
    })
  } catch (error) {
    console.error("[gatsby-plugin-static-props] Error", error)
  }
}
