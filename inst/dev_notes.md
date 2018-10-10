[Kent Russel](https://github.com/timelyportfolio) added some documentation of the changes that he made to the source [sunburst-chart](https://github.com/personality-insights/sunburst-chart).  The `dist` version of the library points to the `d3v3` version, which also pollutes the global namespace with `d3`.  This means that we will likely conflict with other `htmlwidgets` that use other versions of `d3`.

To resolve, he made commits

1. https://github.com/timelyportfolio/sunburst-chart/commit/4b1ef692bce528ffbde8ab6e9ddb9e3b69882e96 - use `d3v4` version
1. https://github.com/timelyportfolio/sunburst-chart/commit/8aa4f377a9770ad778372e2a529a3e93a89177f4 - RStudio Viewer will be updated but as of now requires `es5` JavaScript since it is a very outdated.  Change `.babelrc` to target `es5` and transpile `Object.assign`.
1. https://github.com/timelyportfolio/sunburst-chart/commit/97a5c130281fce73fff9f72f425a1f3c0025e1c9 - babel the `dist` version which we use in `htmlwidgets/lib`

These steps ended up being quite straightforward and minimal but took a little longer than Kent Russel expected.  If we encouter again with an update of the source library, this should be quick and easy.
