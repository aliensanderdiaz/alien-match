let PARTIDOS_OPTIMIZADOS = [
	{"hora":11400,"liga":"R-ING2","mitad":true,"mitadFavorito":true,"codigoWplay":19156,"local":"Sheffield Wednesday","visitante":"Leeds United","cuotaLocal":4.333,"empate":3.55,"cuotaVisitante":1.833,"cantidadDeApuestas":191,"cuotaCualquiera":1.363,"ambosAnotan":1.727,"over":1.833,"cuotaFavorito":1.75,"rate":1,"stake":0,"localMitad":2.5,"visitanteMitad":1.75,"favorito":"visitante"},
	{"hora":11400,"liga":"YE-RUM1","mitad":false,"mitadFavorito":true,"codigoWplay":46019,"local":"CS Municipal Studentesc Iasi","visitante":"Rapid Bucharest","cuotaLocal":3.55,"empate":3.4,"cuotaVisitante":1.95,"cantidadDeApuestas":91,"cuotaCualquiera":1.38,"ambosAnotan":1.7,"over":1.9,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":1.85,"favorito":"local"},
	{"hora":11415,"liga":"YE-POR1","mitad":true,"mitadFavorito":true,"codigoWplay":19211,"local":"Sporting Farense","visitante":"Sporting De Lisboa","cuotaLocal":15,"empate":7,"cuotaVisitante":1.181,"cantidadDeApuestas":246,"cuotaCualquiera":1.222,"ambosAnotan":1.909,"over":1.4,"cuotaFavorito":1.333,"rate":1,"stake":0,"localMitad":3.35,"visitanteMitad":1.333,"favorito":"visitante"},
	{"hora":11430,"liga":"ESP1","mitad":true,"mitadFavorito":true,"codigoWplay":19160,"local":"Sevilla","visitante":"Villarreal","cuotaLocal":2.35,"empate":3.65,"cuotaVisitante":2.95,"cantidadDeApuestas":277,"cuotaCualquiera":1.333,"ambosAnotan":1.571,"over":1.727,"cuotaFavorito":1.9,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":2.05,"favorito":"local"},
	{"hora":11430,"liga":"ESP2","mitad":true,"mitadFavorito":true,"codigoWplay":48352,"local":"SD Huesca","visitante":"Deportivo La Coruna","cuotaLocal":2.55,"empate":2.85,"cuotaVisitante":3.1,"cantidadDeApuestas":114,"cuotaCualquiera":1.65,"ambosAnotan":2.2,"over":2.9,"cuotaFavorito":2.35,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":2.55,"favorito":"local"},
	{"hora":11530,"liga":"ZA-ECU2","mitad":false,"mitadFavorito":false,"codigoWplay":30530,"local":"Vargas Torres","visitante":"Independiente Juniors","cuotaLocal":3.7,"empate":2.9,"cuotaVisitante":2.05,"cantidadDeApuestas":38,"cuotaCualquiera":1.55,"ambosAnotan":2.15,"over":2.65,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Independiente Rivadavia","visitante":"Platense","cuotaLocal":2.5,"empate":2.75,"cuotaVisitante":3.3,"cantidadDeApuestas":178,"cuotaCualquiera":1.727,"ambosAnotan":2.4,"over":3.2,"cuotaFavorito":2.55,"rate":1,"stake":0,"localMitad":2.55,"visitanteMitad":2.9,"favorito":"local"},
	{"hora":11630,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Sportivo Trinidense","visitante":"Sportivo Luqueno","cuotaLocal":2.8,"empate":3,"cuotaVisitante":2.5,"cantidadDeApuestas":89,"cuotaCualquiera":1.5,"ambosAnotan":1.9,"over":2.3,"cuotaFavorito":2.25,"rate":1,"stake":0,"localMitad":2.375,"visitanteMitad":2.25,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Universidad de Chile","visitante":"Cobreloa","cuotaLocal":1.285,"empate":5.25,"cuotaVisitante":8.5,"cantidadDeApuestas":94,"cuotaCualquiera":1.25,"ambosAnotan":1.833,"over":1.5,"cuotaFavorito":1.42,"rate":1,"stake":0,"localMitad":1.42,"visitanteMitad":3.2,"favorito":"local"},
	{"hora":11800,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Union La Calera","visitante":"Deportes Copiapo","cuotaLocal":1.95,"empate":3.35,"cuotaVisitante":3.5,"cantidadDeApuestas":95,"cuotaCualquiera":1.363,"ambosAnotan":1.65,"over":1.8,"cuotaFavorito":1.833,"rate":1,"stake":0,"localMitad":1.833,"visitanteMitad":2.35,"favorito":"local"},
	{"hora":11800,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Guabira","visitante":"Blooming","cuotaLocal":2.25,"empate":3.3,"cuotaVisitante":2.8,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.7,"over":1.93,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Macara","visitante":"Deportivo Cuenca","cuotaLocal":2.625,"empate":3.1,"cuotaVisitante":2.75,"cantidadDeApuestas":106,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.2,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.15,"favorito":"local"},
	{"hora":11900,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Nacional Asuncion","visitante":"Sol de America","cuotaLocal":2.1,"empate":3.1,"cuotaVisitante":3.45,"cantidadDeApuestas":91,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.15,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.55,"favorito":"local"},
	{"hora":11930,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Deportivo Pasto","visitante":"Atletico Bucaramanga","cuotaLocal":2.15,"empate":3.1,"cuotaVisitante":4,"cantidadDeApuestas":161,"cuotaCualquiera":1.65,"ambosAnotan":2.3,"over":2.875,"cuotaFavorito":2.25,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":3.1,"favorito":"local"},
	{"hora":11930,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Ponte Preta SP","visitante":"Operario PR","cuotaLocal":2.25,"empate":3.2,"cuotaVisitante":3.25,"cantidadDeApuestas":91,"cuotaCualquiera":1.55,"ambosAnotan":2.05,"over":2.5,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.5,"favorito":"local"},
	{"hora":12000,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Queretaro FC","visitante":"Cruz Azul","cuotaLocal":5.75,"empate":3.85,"cuotaVisitante":1.65,"cantidadDeApuestas":240,"cuotaCualquiera":1.363,"ambosAnotan":1.8,"over":1.85,"cuotaFavorito":1.666,"rate":1,"stake":0,"localMitad":2.75,"visitanteMitad":1.666,"favorito":"visitante"},
	{"hora":12000,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Mineros de Zacatecas","visitante":"Coyotes FC","cuotaLocal":1.55,"empate":4.2,"cuotaVisitante":5.25,"cantidadDeApuestas":104,"cuotaCualquiera":1.285,"ambosAnotan":1.65,"over":1.6,"cuotaFavorito":1.5,"rate":1,"stake":0,"localMitad":1.5,"visitanteMitad":2.4,"favorito":"local"},
	{"hora":12100,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Mazatlan FC","visitante":"Pachuca","cuotaLocal":3.35,"empate":3.5,"cuotaVisitante":2.2,"cantidadDeApuestas":245,"cuotaCualquiera":1.333,"ambosAnotan":1.6,"over":1.75,"cuotaFavorito":1.8,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":1.8,"favorito":"visitante"},
	{"hora":12200,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Club Atletico La Paz","visitante":"Venados FC","cuotaLocal":2.4,"empate":3.35,"cuotaVisitante":2.8,"cantidadDeApuestas":103,"cuotaCualquiera":1.38,"ambosAnotan":1.666,"over":1.9,"cuotaFavorito":1.909,"rate":1,"stake":0,"localMitad":1.909,"visitanteMitad":2.05,"favorito":"local"},
	{"hora":12205,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Tijuana","visitante":"Monterrey","cuotaLocal":3.2,"empate":3.5,"cuotaVisitante":2.3,"cantidadDeApuestas":255,"cuotaCualquiera":1.363,"ambosAnotan":1.6,"over":1.8,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":1.85,"favorito":"visitante"},
]