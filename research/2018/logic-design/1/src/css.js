/**	`css` is a requirejs plugin
	that loads a css file and inject it into a page.
	note that this loader will return immediately,
	regardless of whether the browser had finished parsing the stylesheet.
	this css loader is implemented for file optimization and depedency managment
 */

define( {
	load: function( name, require, load, config ) {
		function inject( filename ) {

			let head = document.getElementsByTagName( "head" )[ 0 ];
			let link = document.createElement( "link" );
			link.href = ( /\.[0-9a-z]{1,5}$/.test( filename ) ) ? filename : filename + ".css";
			link.rel = "stylesheet";
			link.type = "text/css";
			head.appendChild( link );
		}

		inject( requirejs.toUrl( name ) );
		load( true );
	}
} );
