# Neige for Ghost

[Neige](#) is a minimalist and lightweight Ghost theme.

- [About](#about)
- [Support](#support)
 - [Installation](#installation)
 - [Feature request](#feature-request)
 - [Bugs](#bugs)
- [Development](#development)
 - [Installation](#installation)
 - [Local server](#local-serve)
 - [Build](#build)

## About

Neige is **simple**. Instead of having many features, it focuses on the basic ones. The minimalist aspect helps removing the clutter to focus on the most important: the content.

Neige is **lightweight**. It only weights **XXXkb** and doesn't contain any JavaScript. Why does it matter? It gives Neige the ability to load very fast everywhere in every browser.

To take a deeper look into Neige, [give the demo a try](#) and browse Neige as you would do on a real blog.

**IMAGE DESKTOP / MOBILE**

## Support

### Installation

To install Neige to your Ghost blog, please follow these steps:
1. Download the compressed (`.zip`) file of the theme.
2. Upload it in the **Design** tab of your Ghost admin.

If you have troubles, please refer to the official [Ghost documentation about installing new themes](#).

### Feature request

You think Neige could be improved? Feel free to send your feature's suggestion by [email](mailto:hello@quentin-bellanger.com) or on [Twitter](https://twitter.com/bellanger_q).

### Bugs

If you find bugs when installing or using the theme, please open a new issue or [send an email](mailto:hello@quentin-bellanger.com).

## Development

### Installation

Install **ghost-cli**:
```shell
npm install -g ghost-cli
```

Install **Ghost** in development mode:
```shell
ghost install local
```

Install **Gulp** and plugins with npm:
```shell
npm install gulp
npm i
```

### Local server
Start local Ghost server on `localhost:2368`:
```shell
ghost start
```

### Build

Compress the theme in a `.zip` file in order to upload it on the Ghost admin. Also execute these tasks:
- Compile `.scss` to `.css`,
- Minify `.css`,
- Compress images,
- Create `.zip`.

```shell
gulp build
```
