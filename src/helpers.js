export const revisarPresupuesto = (presupuesto, restante) => {
    let clase

    
    
    if (( presupuesto <= 0 ) > restante ) {
        clase= 'no-color'
    } else if ( ( presupuesto / 4 ) > restante ){
        clase= 'alet alert-danger'
    } else if ( ( presupuesto / 2 ) > restante ){
        clase= 'alert alert-warning'
    }
     else {
        clase = 'alert alert-primary'

    }

    return clase
}