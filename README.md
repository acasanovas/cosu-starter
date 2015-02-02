CoSu Starter Toolkit
==========================

A starter toolkit for [Sass](http://sass-lang.com/) projects with [Susy](http://susy.oddbird.net/) "Magic Grids".

Directory structure
-------------------


```
    package.json	# Grunt metadata & dependencies
    index.html		# Starter HTML template
    gruntfile.js	# Grunt configuration & tasks
	Gemfile			# Gem project dependencies
	config.rb		# Compass configuration file
	.gitignore		# .gitignore file
	components/
	|
	|-- sass/
	|   |-- base/					# Base style of wherever element and how this should look like.
	|	|	|-- _index.scss 		# Imports everything on base
	|	|	|-- _mixins.scss 		# mixins
	|	|	|-- _functions.scss 	# functions
	|	|	|-- _reset.scss			# reset
	|	|	|-- _variables.scss 	# variables
	|	|	|-- _grid.scss 			# grid
	|	|	|-- _base.scss			# base
	|	|	`-- _typography.scss	# typography
	|	|
	|   |-- layout/					# Divide the page into sections. Layouts hold modules together.
	|	|	`-- _index.scss 		# Imports everything on layout
	|	|
	|   |-- modules/				# Modular parts of our design.
	|	|	`-- _index.scss 		# Imports everything on modules
	|	|
	|   |-- vendors/				# Third party components
	|	|	|-- _index.scss 		# Imports everything on vendors
	|	|	`-- _pesticide.scss		# CSS pesticide
	|	|
	|   `-- styles.scss 			# Primary Sass file
	|
	`-- js/
		`-- script.js 				# Starter JS template
```


Quick start
-----------
1. Clone this repository.
2. Instal the required Ruby gems - `bundle install`.
3. Install the required Node modules - `npm install`.
4. Ready, just run `grunt watch`.

Happy coding!

Disclamer
---------
This is an evolving project.

Credits
-------
- [Lemanz](https://github.com/grayghostvisuals/lemanz)
- [SMACSS](https://smacss.com)
- [Pesticide](https://github.com/mrmrs/pesticide)
- [Compass](https://github.com/Compass/compass)
- [Susy](https://github.com/ericam/susy)
- [Grunt](https://github.com/gruntjs/grunt)

License
-------
Copyright (c) 2015 - Albert Casanovas.

Licensed under the [MIT License](https://github.com/acasanovas/cosu-starter/blob/master/LICENSE).