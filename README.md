Webapp boilerplate (WeBoil)
==========================

**WeBoil** is my kickstarter tool using [Sass](http://sass-lang.com/), [Susy](http://susy.oddbird.net/), [Breakpoint](http://breakpoint-sass.com/) and [Normalize.css](https://necolas.github.io/normalize.css/), designed with scalability and performance in mind.

Workflow
--------
**WeBoil** workflow is automated and enhanced with [Gulp](http://gulpjs.com/), that offers a Sass documentation generator, CSS Autoprefixing, minified CSS output, Sass source maps, built-in preview server and synchronised browser testing.

Design
------
**WeBoil** is design-free and does its best to provide no styling of its own, so it can be used on any and all types of project without imposing a "look and feel".

Directory structure
-------------------
**WeBoil** is focused on keeping things simple and obvious, and its approach happens to be quite similar to [SMACSS](https://smacss.com/).

```
app
|
|- css/                        # CSS
|- fonts/                      # Fonts
|- img/                        # Images
|- js/                         # JavaScript
|- sass/
|    |
|    |– base/
|    |   |– _base.scss         # Standard styles
|    |   |– _reset.scss        # Reset
|    |   |– _typography.scss   # Typography rules
|    |   ...                   # Etc…
|    |
|    |– components/
|    |   |– _headings.scss     # Headings
|    |   |– _images.scss       # Images
|    |   |– _links.scss        # Links
|    |   |– _lists.scss        # Lists
|    |   |– _paragraphs.scss   # Paragraphs
|    |   ...                   # Etc…
|    |
|    |– layout/
|    |   |– _footer.scss      # Footer
|    |   |– _grid.scss        # Grid system
|    |   |– _header.scss      # Header
|    |   |– _sidebar.scss     # Sidebar
|    |   ...                  # Etc…
|    |
|    |– pages/
|    |   |– _home.scss        # Home specific styles
|    |   ...                  # Etc…
|    |
|    |– themes/
|    |   |– _theme.scss       # Default theme
|    |   ...                  # Etc…
|    |
|    |– utils/
|    |   |– _functions.scss   # Sass Functions
|    |   |– _mixins.scss      # Sass Mixins
|    |   |– _variables.scss   # Sass Variables
|    |   ...                  # Etc…
|    |
|    |– vendors/
|    |   |– _normalize.scss   # Normalize.css
|    |   ...                  # Etc…
|    |
|    |
|    |– shame.scss            # Not proud things
|    `– styles.scss           # Main Sass file
|
|- sassdoc/                   # SassDoc
|- browserconfig.xml          # Custom Windows styles
|- crossdomain.xml            # Cross-domain policy
|- index.html                 # Default HTML skeleton
`- robots.txt                 # Web robots instructions
```

Quick start
-----------
1. Clone this repository.
2. Download and install [NodeJS](https://nodejs.org/).
3. Install Bower and Gulp - `npm install -g bower gulp`.
4. Install the required Node modules - `npm install`.
5. Install the required packages - `bower install`.
6. Ready, just run `gulp`.

Happy coding!

Used modules
-------------
- [Browsersync](http://www.browsersync.io/)
- [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
- [gulp-minify-css](https://github.com/murphydanger/gulp-minify-css)
- [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
- [SassDoc](http://sassdoc.com/)

License
-------
Copyright (c) 2015 - Albert Casanovas.

Licensed under the [MIT License](https://github.com/acasanovas/WeBoil/blob/master/LICENSE).
