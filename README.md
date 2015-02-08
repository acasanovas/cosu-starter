CoSu Starter Toolkit
==========================

This is a starter toolkit that uses [Sass](http://sass-lang.com/) and [Susy](http://susy.oddbird.net/) "Magic Grids" and is intended to start developing a Web project.
With CoSu this developement will be fast and well structured, designed to be easily maintainable and extendable.

Structuring a project on modules will allow you to reuse common parts on other projects, and this will incredibly increase your team workflow or even yours.

Directory structure
-------------------
```
    package.json	# Grunt metadata and dependencies
    index.html		# Starter HTML template
    gruntfile.js	# Grunt configuration and tasks
	Gemfile			# Gem project dependencies
	config.rb		# Compass configuration file
	.gitignore		# .gitignore file
	components/
	|
	|-- sass/
	|   |-- base/					# Default settings
	|	|	|-- _mixins.scss 		# Custom mixins
	|	|	|-- _functions.scss 	# Custom functions
	|	|	|-- _reset.scss			# Resets elements
	|	|	|-- _colors.scss 		# Defines colors
	|	|	|-- _required.scss 		# Imports the required extensions
	|	|	|-- _defaults.scss		# Default settings and values
	|	|	|-- _typography.scss	# Sets up the fonts
	|	|	`-- _index.scss 		# Imports everything on base
	|	|
	|   |-- layout/					# Specific styles
	|	|	|-- _content.scss		# Section styles
	|	|	|-- _footer.scss		# Footer styles
	|	|	|-- _grid.scss			# Susy grid
	|	|	|-- _header.scss		# Header styles
	|	|	|-- _sidebar.scss		# Sidebar styles
	|	|	`-- _index.scss 		# Imports everything on layout
	|	|
	|   |-- modules/				# Modular parts
	|	|	|-- _buttons.scss		# Buttons
	|	|	|-- _forms.scss			# Form elements
	|	|	|-- _headings.scss		# Heading elements
	|	|	|-- _images.scss		# Images and figures
	|	|	|-- _links.scss			# Links
	|	|	|-- _lists.scss			# Lists
	|	|	|-- _paragraphs.scss	# Paragraph elements
	|	|	`-- _index.scss 		# Imports everything on modules
	|	|
	|   |-- vendors/				# Third party components
	|	|	|-- _pesticide.scss		# CSS pesticide
	|	|	`-- _index.scss 		# Imports everything on vendors
	|	|
	|   `-- styles.scss 			# Main Sass file
	|
	`-- js/
		`-- script.js 				# JS file
```

Quick start
-----------
1. Clone this repository.
2. Install the required Ruby gems - `bundle install`.
3. Install the required Node modules - `npm install`.
4. Ready, just run `grunt watch`.

Happy coding!

Disclamer
---------
This is an evolving project.

Credits
-------
- [SMACSS](https://smacss.com/)
- [Compass](https://github.com/Compass/compass)
- [Susy](https://github.com/ericam/susy)
- [Grunt](https://github.com/gruntjs/grunt)
- [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [Pesticide](https://github.com/mrmrs/pesticide)

License
-------
Copyright (c) 2015 - Albert Casanovas.

Licensed under the [MIT License](https://github.com/acasanovas/cosu-starter/blob/master/LICENSE).