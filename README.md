# svelte-leafygreen-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Leafygreen UI SVG icons as Svelte components.

This library builds icons from [MongoDB Leafygreen UI](https://github.com/mongodb/leafygreen-ui/tree/master/packages/icon) as Svelte components with zero dependencies.

## Install

```bash
yarn add -D svelte-leafygreen-icons
```

## Usage

```html
<script>
  import { ActivityFeed } from "svelte-leafygreen-icons";
</script>

<ActivityFeed />
```

Refer to [docs/README.md](docs/README.md) for a full list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-leafygreen-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-leafygreen-icons
[build]: https://travis-ci.com/metonym/svelte-leafygreen-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-leafygreen-icons
