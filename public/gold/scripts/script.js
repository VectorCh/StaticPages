$( function() {
	/* Habilita arrastable de cada enlace */
	$( "#sortable1, #sortable2, #sortable3, #sortable4" ).sortable( {
		connectWith: ".connectedSortable"
	} ).disableSelection();
	/* Catch elements when change position */
	$( '#sortable1' ).sortable( {
		update: function( event, ui ) {
			var data = $( this ).sortable( 'toArray' );
			console.log( data );
			console.log( data[ 0 ] );
		}
	} );
	$( '#sortable2' ).sortable( {
		// axis: 'y', // sólo posibilita movimiento entre ese eje
		update: function( event, ui ) {
			var data = $( this ).sortable( 'toArray' );
			console.log( data );
			console.log( data[ 0 ] );
		}
	} );
} );