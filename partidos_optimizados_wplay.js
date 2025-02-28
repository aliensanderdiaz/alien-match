let PARTIDOS_WPLAY = [
	{"hora":1022811800,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Boca Juniors","visitante":"Rosario Central","cuotaLocal":2.15,"empate":3.1,"cuotaVisitante":3.7,"cantidadDeApuestas":185,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022812015,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Central Cordoba","visitante":"Deportivo Riestra","cuotaLocal":1.909,"empate":3.2,"cuotaVisitante":4.333,"cantidadDeApuestas":187,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022812015,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"San Martin de San Juan","visitante":"CA Belgrano","cuotaLocal":3,"empate":2.75,"cuotaVisitante":2.75,"cantidadDeApuestas":182,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022811900,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Club Atletico Colegiales","visitante":"Los Andes","cuotaLocal":2.1,"empate":2.8,"cuotaVisitante":3.75,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022811900,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Estudiantes Rio Cuarto","visitante":"CA San Telmo","cuotaLocal":1.9,"empate":2.85,"cuotaVisitante":4.5,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022812010,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Boyaca Chico FC","visitante":"Aguilas Doradas Rionegro","cuotaLocal":2.95,"empate":3,"cuotaVisitante":2.75,"cantidadDeApuestas":170,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022811800,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Deportes Limache","visitante":"Coquimbo","cuotaLocal":3,"empate":3.1,"cuotaVisitante":2.3,"cantidadDeApuestas":95,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022811810,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Atletico de Cali","visitante":"Atletico Huila","cuotaLocal":3.9,"empate":2.9,"cuotaVisitante":2,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022811900,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Club Sport Emelec","visitante":"Macara","cuotaLocal":2.25,"empate":3.1,"cuotaVisitante":3.3,"cantidadDeApuestas":93,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022812200,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Mazatlan FC","visitante":"Cruz Azul","cuotaLocal":4.75,"empate":3.8,"cuotaVisitante":1.769,"cantidadDeApuestas":256,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022812000,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Oaxaca","visitante":"Correcaminos","cuotaLocal":2.25,"empate":3.5,"cuotaVisitante":2.95,"cantidadDeApuestas":94,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022812000,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"CD Tepatitlan de Morelos","visitante":"Leones Negros","cuotaLocal":2.75,"empate":3.25,"cuotaVisitante":2.5,"cantidadDeApuestas":92,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022812200,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Club Atletico La Paz","visitante":"CD Tapatio","cuotaLocal":2.875,"empate":3.6,"cuotaVisitante":2.25,"cantidadDeApuestas":94,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022812300,"liga":"S-JAP1","mitad":true,"mitadFavorito":true,"codigoWplay":19378,"local":"Yokohama F Marinos","visitante":"Shonan Bellmare","cuotaLocal":2.25,"empate":3.45,"cuotaVisitante":3,"cantidadDeApuestas":118,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
	{"hora":1022811830,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Libertad Asuncion","visitante":"Sportivo Luqueno","cuotaLocal":1.55,"empate":3.7,"cuotaVisitante":5.75,"cantidadDeApuestas":87,"cuotaCualquiera":1,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1},
]