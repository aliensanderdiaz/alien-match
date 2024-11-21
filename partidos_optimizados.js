let PARTIDOS_OPTIMIZADOS = [
	{"hora":11500,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"CA Barracas Central","visitante":"CA Belgrano","cuotaLocal":3.65,"empate":3.1,"cuotaVisitante":2.15,"cantidadDeApuestas":186,"cuotaCualquiera":1.55,"ambosAnotan":2.1,"over":2.55,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.75,"visitanteMitad":2.15,"favorito":"visitante"},
	{"hora":11500,"liga":"ESPC","mitad":false,"mitadFavorito":true,"codigoWplay":19213,"local":"Jove Espanol De San Vicente","visitante":"Real Sociedad","cuotaLocal":15,"empate":6.5,"cuotaVisitante":1.133,"cantidadDeApuestas":44,"cuotaCualquiera":1.25,"ambosAnotan":2.45,"over":1.533,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Always Ready","visitante":"Royal Pari","cuotaLocal":1.25,"empate":5,"cuotaVisitante":11,"cantidadDeApuestas":41,"cuotaCualquiera":1.333,"ambosAnotan":2.3,"over":1.75,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Sportivo Trinidense","visitante":"Cerro Porteño","cuotaLocal":3.8,"empate":3.25,"cuotaVisitante":1.909,"cantidadDeApuestas":90,"cuotaCualquiera":1.45,"ambosAnotan":1.833,"over":2.1,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":2.625,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":11715,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Talleres de Cordoba","visitante":"Sarmiento","cuotaLocal":1.533,"empate":3.95,"cuotaVisitante":6.5,"cantidadDeApuestas":188,"cuotaCualquiera":1.45,"ambosAnotan":2.3,"over":2.2,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":3.45,"favorito":"local"},
	{"hora":11715,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"CA Independiente","visitante":"Gimnasia LP","cuotaLocal":1.9,"empate":3.1,"cuotaVisitante":4.75,"cantidadDeApuestas":187,"cuotaCualquiera":1.615,"ambosAnotan":2.35,"over":2.75,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":3.3,"favorito":"local"},
	{"hora":11800,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Vasco Da Gama RJ","visitante":"Internacional RS","cuotaLocal":3.4,"empate":3.2,"cuotaVisitante":2.2,"cantidadDeApuestas":239,"cuotaCualquiera":1.45,"ambosAnotan":1.8,"over":2.1,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2.45,"visitanteMitad":2,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Real Tomayapo","visitante":"Bolivar","cuotaLocal":3.8,"empate":3.65,"cuotaVisitante":1.769,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1.615,"over":1.727,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11830,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Once Caldas","visitante":"Tolima","cuotaLocal":2.55,"empate":3.1,"cuotaVisitante":3.1,"cantidadDeApuestas":171,"cuotaCualquiera":1.571,"ambosAnotan":2.1,"over":2.6,"cuotaFavorito":2.55,"rate":1,"stake":0,"localMitad":2.375,"visitanteMitad":2.55,"favorito":"visitante"},
	{"hora":11900,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"The Strongest","visitante":"Jorge Wilstermann","cuotaLocal":1.363,"empate":4.333,"cuotaVisitante":7.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":2,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11930,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Independiente Rivadavia","visitante":"River Plate","cuotaLocal":7.5,"empate":4.2,"cuotaVisitante":1.45,"cantidadDeApuestas":187,"cuotaCualquiera":1.42,"ambosAnotan":2.3,"over":2.1,"cuotaFavorito":1.7,"rate":1,"stake":0,"localMitad":3.55,"visitanteMitad":1.7,"favorito":"visitante"},
	{"hora":12005,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Chivas Guadalajara","visitante":"Atlas de Guadalajara","cuotaLocal":1.75,"empate":3.65,"cuotaVisitante":5,"cantidadDeApuestas":253,"cuotaCualquiera":1.48,"ambosAnotan":2.05,"over":2.2,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":3,"favorito":"local"},
	{"hora":12030,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"CD Junior","visitante":"América de Cali","cuotaLocal":2.1,"empate":3.4,"cuotaVisitante":3.8,"cantidadDeApuestas":175,"cuotaCualquiera":1.5,"ambosAnotan":2,"over":2.35,"cuotaFavorito":2.7,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.7,"favorito":"visitante"},
	{"hora":12200,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Tijuana","visitante":"America","cuotaLocal":3.1,"empate":3.7,"cuotaVisitante":2.25,"cantidadDeApuestas":263,"cuotaCualquiera":1.333,"ambosAnotan":1.571,"over":1.7,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":1.85,"favorito":"visitante"},
]