[![Version](https://img.shields.io/npm/v/gatsby-plugin-static-props.svg)](https://www.npmjs.com/package/gatsby-plugin-static-props)
[![Downloads Total](https://img.shields.io/npm/dt/gatsby-plugin-static-props.svg)](https://www.npmjs.com/package/gatsby-plugin-static-props)

# gatsby-plugin-static-props

An implementation from [getStaticProps](https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops) from Next.js to Gatsby via Plugin.

## Install

`$ npm i gatsby-plugin-static-propss`

or

`$ yarn addgatsby-plugin-static-props`

## How to use

Add the plugin to your `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-static-props`
  ]
}
```

## Using

```javascript
const Home = ({ pageContext }) => {
  const dog = pageContext.dog
  return (
    <div>
      <img src={dog.message} />
    </div>
  )
}

export default Home

//execute in server-side only
export const getStaticProps = async () => {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const dog = await res.json()

  return {
    dog,
  }
}
```

License
-------

The code is available under the [MIT License](LICENSE.md).
