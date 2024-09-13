let PARTIDOS_OPTIMIZADOS = [
	{"hora":11500,"liga":"ZA-URU2","mitad":false,"mitadFavorito":false,"codigoWplay":26834,"local":"Albion FC","visitante":"CA Atenas De San Carlos","cuotaLocal":2.1,"empate":2.95,"cuotaVisitante":3.45,"cantidadDeApuestas":38,"cuotaCualquiera":1.533,"ambosAnotan":2.05,"over":2.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11515,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Deportivo Garcilaso","visitante":"Asociacion Deportiva Tarma","cuotaLocal":2.1,"empate":3.1,"cuotaVisitante":3.25,"cantidadDeApuestas":44,"cuotaCualquiera":1.45,"ambosAnotan":1.8,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"ZA-ECU2","mitad":false,"mitadFavorito":false,"codigoWplay":30530,"local":"Guayaquil City FC","visitante":"Gualaceo SC","cuotaLocal":1.615,"empate":3.25,"cuotaVisitante":5.75,"cantidadDeApuestas":37,"cuotaCualquiera":1.6,"ambosAnotan":2.65,"over":2.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Patriotas Boyaca","visitante":"Atletico Bucaramanga","cuotaLocal":2.45,"empate":2.9,"cuotaVisitante":3.45,"cantidadDeApuestas":162,"cuotaCualquiera":1.65,"ambosAnotan":1,"over":2.8,"cuotaFavorito":2.8,"rate":1,"stake":0,"localMitad":2.375,"visitanteMitad":2.8,"favorito":"visitante"},
	{"hora":11630,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Atletico Lanus","visitante":"Union Santa Fe","cuotaLocal":2.55,"empate":2.95,"cuotaVisitante":3,"cantidadDeApuestas":181,"cuotaCualquiera":1.6,"ambosAnotan":2.1,"over":2.7,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":2.6,"favorito":"local"},
	{"hora":11630,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Central Cordoba","visitante":"Instituto AC Cordoba","cuotaLocal":2.95,"empate":3,"cuotaVisitante":2.6,"cantidadDeApuestas":181,"cuotaCualquiera":1.6,"ambosAnotan":2.1,"over":2.7,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.6,"visitanteMitad":2.4,"favorito":"visitante"},
	{"hora":11630,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Club General Caballero JLM","visitante":"Sportivo Ameliano","cuotaLocal":2.2,"empate":3.1,"cuotaVisitante":3.25,"cantidadDeApuestas":89,"cuotaCualquiera":1.5,"ambosAnotan":1.93,"over":2.3,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.55,"favorito":"local"},
	{"hora":11645,"liga":"ZA-VEN1","mitad":false,"mitadFavorito":false,"codigoWplay":20080,"local":"Metropolitano SC","visitante":"Portuguesa FC","cuotaLocal":1.909,"empate":3.2,"cuotaVisitante":3.85,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1.909,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Novorizontino SP","visitante":"Botafogo SP","cuotaLocal":1.75,"empate":3.3,"cuotaVisitante":5.25,"cantidadDeApuestas":113,"cuotaCualquiera":1.6,"ambosAnotan":2.4,"over":2.75,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":3.2,"favorito":"local"},
	{"hora":11700,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Jorge Wilstermann","visitante":"Universitario de Vinto","cuotaLocal":1.85,"empate":3.1,"cuotaVisitante":4.2,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":2,"over":2.35,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11730,"liga":"ZA-URU1","mitad":false,"mitadFavorito":true,"codigoWplay":19398,"local":"Defensor Sporting","visitante":"Racing Club Montevideo","cuotaLocal":2.1,"empate":3.25,"cuotaVisitante":3.3,"cantidadDeApuestas":91,"cuotaCualquiera":1.42,"ambosAnotan":1.727,"over":1.95,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.4,"favorito":"local"},
	{"hora":11800,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Colo Colo","visitante":"Universidad Catolica","cuotaLocal":1.615,"empate":3.55,"cuotaVisitante":5.25,"cantidadDeApuestas":87,"cuotaCualquiera":1.4,"ambosAnotan":1.9,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":2.875,"favorito":""},
	{"hora":11805,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Almirante Brown","visitante":"Club Almagro","cuotaLocal":2.15,"empate":2.75,"cuotaVisitante":3.75,"cantidadDeApuestas":37,"cuotaCualquiera":1.769,"ambosAnotan":2.625,"over":3.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11830,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Jaguares De Córdoba","visitante":"Envigado FC","cuotaLocal":1.909,"empate":3.4,"cuotaVisitante":4.5,"cantidadDeApuestas":165,"cuotaCualquiera":1.48,"ambosAnotan":1,"over":2.25,"cuotaFavorito":2.8,"rate":1,"stake":0,"localMitad":1.93,"visitanteMitad":2.8,"favorito":"visitante"},
	{"hora":11900,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"River Plate","visitante":"Atletico Tucuman","cuotaLocal":1.5,"empate":3.95,"cuotaVisitante":7.5,"cantidadDeApuestas":184,"cuotaCualquiera":1.45,"ambosAnotan":2.25,"over":2.15,"cuotaFavorito":1.727,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":3.55,"favorito":"local"},
	{"hora":11900,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Estudiantes Rio Cuarto","visitante":"Temperley","cuotaLocal":2.2,"empate":2.7,"cuotaVisitante":3.6,"cantidadDeApuestas":37,"cuotaCualquiera":1.8,"ambosAnotan":2.65,"over":3.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Real Tomayapo","visitante":"Real Santa Cruz","cuotaLocal":1.35,"empate":4.5,"cuotaVisitante":7.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.3,"ambosAnotan":1.93,"over":1.7,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Orense SC","visitante":"Universidad Catolica Quito","cuotaLocal":2.8,"empate":3.25,"cuotaVisitante":2.45,"cantidadDeApuestas":114,"cuotaCualquiera":1.45,"ambosAnotan":1,"over":2.1,"cuotaFavorito":2.05,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.05,"favorito":"visitante"},
	{"hora":11900,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Puebla","visitante":"Queretaro FC","cuotaLocal":2.05,"empate":3.6,"cuotaVisitante":3.7,"cantidadDeApuestas":242,"cuotaCualquiera":1.363,"ambosAnotan":1.65,"over":1.833,"cuotaFavorito":1.8,"rate":1,"stake":0,"localMitad":1.8,"visitanteMitad":2.3,"favorito":"local"},
	{"hora":11900,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Club Tacuary","visitante":"Guarani Asuncion","cuotaLocal":3.65,"empate":3.2,"cuotaVisitante":2,"cantidadDeApuestas":89,"cuotaCualquiera":1.48,"ambosAnotan":1.9,"over":2.2,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2.65,"visitanteMitad":2,"favorito":"visitante"},
	{"hora":11930,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Goias GO","visitante":"Avai SC","cuotaLocal":2.15,"empate":2.95,"cuotaVisitante":3.75,"cantidadDeApuestas":114,"cuotaCualquiera":1.615,"ambosAnotan":2.25,"over":2.8,"cuotaFavorito":2.75,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.75,"favorito":"visitante"},
	{"hora":11930,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Ponte Preta SP","visitante":"Ituano SP","cuotaLocal":1.85,"empate":3.3,"cuotaVisitante":4.333,"cantidadDeApuestas":117,"cuotaCualquiera":1.48,"ambosAnotan":2,"over":2.25,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.65,"favorito":"local"},
	{"hora":11930,"liga":"ZA-VEN1","mitad":false,"mitadFavorito":false,"codigoWplay":20080,"local":"Academia Puerto Cabello","visitante":"Zamora FC","cuotaLocal":1.75,"empate":3.3,"cuotaVisitante":4.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":2.1,"over":2.3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":12000,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Atlas de Guadalajara","visitante":"Pachuca","cuotaLocal":2.5,"empate":3.4,"cuotaVisitante":2.875,"cantidadDeApuestas":249,"cuotaCualquiera":1.42,"ambosAnotan":1.727,"over":2,"cuotaFavorito":2.2,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.2,"favorito":"visitante"},
	{"hora":12000,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Venados FC","visitante":"Atletico Morelia","cuotaLocal":1.9,"empate":3.55,"cuotaVisitante":3.85,"cantidadDeApuestas":92,"cuotaCualquiera":1.38,"ambosAnotan":1.727,"over":1.85,"cuotaFavorito":1.75,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":2.3,"favorito":"local"},
	{"hora":12100,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"FC Juarez","visitante":"Mazatlan FC","cuotaLocal":2.2,"empate":3.55,"cuotaVisitante":3.25,"cantidadDeApuestas":245,"cuotaCualquiera":1.35,"ambosAnotan":1.615,"over":1.8,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.15,"favorito":"visitante"},
	{"hora":12110,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Tigres UANL","visitante":"Atletico San Luis","cuotaLocal":1.42,"empate":4.5,"cuotaVisitante":8.5,"cantidadDeApuestas":243,"cuotaCualquiera":1.35,"ambosAnotan":2,"over":1.833,"cuotaFavorito":1.571,"rate":1,"stake":0,"localMitad":1.571,"visitanteMitad":3.2,"favorito":"local"},
	{"hora":12200,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Necaxa","visitante":"Pumas Unam","cuotaLocal":2.65,"empate":3.35,"cuotaVisitante":2.75,"cantidadDeApuestas":248,"cuotaCualquiera":1.4,"ambosAnotan":1.7,"over":1.95,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.1,"favorito":"local"},
	{"hora":12200,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Atlante","visitante":"Dorados","cuotaLocal":1.2,"empate":6.25,"cuotaVisitante":13,"cantidadDeApuestas":91,"cuotaCualquiera":1.25,"ambosAnotan":2.2,"over":1.55,"cuotaFavorito":1.35,"rate":1,"stake":0,"localMitad":1.35,"visitanteMitad":3.5,"favorito":"local"},
]