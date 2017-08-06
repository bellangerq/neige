# neige

## About

Neige is a minimalist Ghost theme.
> Work in progress . . .

## Installation

Install **ghost-cli**:
```
npm install -g ghost-cli
```

Install **Ghost** in development mode:
```
ghost install local
```

Install **Gulp** and plugins with npm:
```
npm install gulp
npm i
```

## Development

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
