let PARTIDOS_OPTIMIZADOS = [
	{"hora":11430,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Bragantino SP","visitante":"Palmeiras SP","cuotaLocal":4.333,"empate":3.6,"cuotaVisitante":1.833,"cantidadDeApuestas":234,"cuotaCualquiera":1.4,"ambosAnotan":1.85,"over":2,"cuotaFavorito":1.833,"rate":1,"stake":0,"localMitad":2.65,"visitanteMitad":1.833,"favorito":"visitante"},
	{"hora":11430,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Athletico PR","visitante":"Botafogo RJ","cuotaLocal":2.95,"empate":3.35,"cuotaVisitante":2.375,"cantidadDeApuestas":231,"cuotaCualquiera":1.45,"ambosAnotan":1.833,"over":2.1,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":2.1,"favorito":"visitante"},
	{"hora":11430,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Atletico MG","visitante":"EC Vitoria","cuotaLocal":1.533,"empate":3.85,"cuotaVisitante":6.5,"cantidadDeApuestas":242,"cuotaCualquiera":1.444,"ambosAnotan":2.1,"over":2.1,"cuotaFavorito":1.727,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":3.3,"favorito":"local"},
	{"hora":11430,"liga":"YE-POR1","mitad":true,"mitadFavorito":true,"codigoWplay":19211,"local":"Sporting De Lisboa","visitante":"Casa Pia Atletico","cuotaLocal":1.125,"empate":8,"cuotaVisitante":23,"cantidadDeApuestas":182,"cuotaCualquiera":1.222,"ambosAnotan":2.2,"over":1.4,"cuotaFavorito":1.3,"rate":1,"stake":0,"localMitad":1.3,"visitanteMitad":3.85,"favorito":"local"},
	{"hora":11500,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Ituano SP","visitante":"Guarani SP","cuotaLocal":2.45,"empate":2.95,"cuotaVisitante":3.1,"cantidadDeApuestas":117,"cuotaCualquiera":1.6,"ambosAnotan":2,"over":2.55,"cuotaFavorito":2.2,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.45,"favorito":"local"},
	{"hora":11500,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Ponte Preta SP","visitante":"Botafogo SP","cuotaLocal":2.2,"empate":3,"cuotaVisitante":3.5,"cantidadDeApuestas":116,"cuotaCualquiera":1.571,"ambosAnotan":2.05,"over":2.55,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.55,"favorito":"local"},
	{"hora":11500,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"Charleston Battery","visitante":"Detroit City","cuotaLocal":1.5,"empate":3.85,"cuotaVisitante":5.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1.727,"over":1.7,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-VEN1","mitad":false,"mitadFavorito":false,"codigoWplay":20080,"local":"Rayo Zuliano","visitante":"Carabobo FC","cuotaLocal":3.1,"empate":3,"cuotaVisitante":2.25,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":1.85,"over":2.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Toronto FC","visitante":"Inter Miami CF","cuotaLocal":2.35,"empate":3.75,"cuotaVisitante":2.7,"cantidadDeApuestas":272,"cuotaCualquiera":1.25,"ambosAnotan":1.38,"over":1.45,"cuotaFavorito":1.75,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":1.833,"favorito":"local"},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Agropecuario Argentino","visitante":"Guillermo Brown","cuotaLocal":1.65,"empate":3.1,"cuotaVisitante":5.25,"cantidadDeApuestas":14,"cuotaCualquiera":1.55,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Newells Old Boys","visitante":"Atletico Lanus","cuotaLocal":2.4,"empate":3.1,"cuotaVisitante":3.2,"cantidadDeApuestas":185,"cuotaCualquiera":1.6,"ambosAnotan":2.1,"over":2.625,"cuotaFavorito":2.35,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":2.7,"favorito":"local"},
	{"hora":11530,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Gimnasia LP","visitante":"Godoy Cruz","cuotaLocal":2,"empate":3.25,"cuotaVisitante":3.9,"cantidadDeApuestas":183,"cuotaCualquiera":1.55,"ambosAnotan":2.15,"over":2.55,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.9,"favorito":"local"},
	{"hora":11530,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Bogota FC","visitante":"Tigres FC","cuotaLocal":2.45,"empate":3.1,"cuotaVisitante":2.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"ZA-URU2","mitad":false,"mitadFavorito":false,"codigoWplay":26834,"local":"Plaza Colonia","visitante":"Colon FC de Uruguay","cuotaLocal":1.833,"empate":3.1,"cuotaVisitante":4.333,"cantidadDeApuestas":38,"cuotaCualquiera":1.533,"ambosAnotan":2.2,"over":2.55,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11545,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Chaco For Ever","visitante":"Colon de Santa Fe","cuotaLocal":3.4,"empate":2.625,"cuotaVisitante":2.25,"cantidadDeApuestas":14,"cuotaCualquiera":1.65,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11600,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Mirassol SP","visitante":"Vila Nova FC","cuotaLocal":1.95,"empate":3,"cuotaVisitante":4.333,"cantidadDeApuestas":117,"cuotaCualquiera":1.55,"ambosAnotan":2.1,"over":2.5,"cuotaFavorito":2.8,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.8,"favorito":"visitante"},
	{"hora":11600,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"El Nacional","visitante":"Barcelona SC","cuotaLocal":2.8,"empate":3.2,"cuotaVisitante":2.45,"cantidadDeApuestas":100,"cuotaCualquiera":1.42,"ambosAnotan":1.727,"over":2,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2,"favorito":"visitante"},
	{"hora":11600,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Cucuta Deportivo","visitante":"CD Real Santander","cuotaLocal":1.4,"empate":4.2,"cuotaVisitante":7,"cantidadDeApuestas":38,"cuotaCualquiera":1.363,"ambosAnotan":2.05,"over":1.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11630,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Sportivo Luqueno","visitante":"Cerro Porteño","cuotaLocal":4.333,"empate":3.3,"cuotaVisitante":1.769,"cantidadDeApuestas":89,"cuotaCualquiera":1.48,"ambosAnotan":1.95,"over":2.2,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":2.9,"visitanteMitad":1.85,"favorito":"visitante"},
	{"hora":11630,"liga":"ZA-URU1","mitad":false,"mitadFavorito":true,"codigoWplay":19398,"local":"CA Boston River","visitante":"Montevideo Wanderers","cuotaLocal":2.45,"empate":3,"cuotaVisitante":2.9,"cantidadDeApuestas":90,"cuotaCualquiera":1.48,"ambosAnotan":1.8,"over":2.15,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.3,"favorito":"local"},
	{"hora":11645,"liga":"ZA-VEN1","mitad":false,"mitadFavorito":false,"codigoWplay":20080,"local":"Zamora FC","visitante":"Estudiantes de Merida","cuotaLocal":2.375,"empate":3.1,"cuotaVisitante":2.8,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Cuiaba MT","visitante":"Sao Paulo SP","cuotaLocal":3.1,"empate":3,"cuotaVisitante":2.5,"cantidadDeApuestas":258,"cuotaCualquiera":1.615,"ambosAnotan":2.25,"over":2.85,"cuotaFavorito":2.45,"rate":1,"stake":0,"localMitad":2.75,"visitanteMitad":2.45,"favorito":"visitante"},
	{"hora":11700,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Bahia BA","visitante":"Flamengo RJ","cuotaLocal":2.45,"empate":3.25,"cuotaVisitante":2.9,"cantidadDeApuestas":239,"cuotaCualquiera":1.45,"ambosAnotan":1.8,"over":2.1,"cuotaFavorito":2.3,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.3,"favorito":"visitante"},
	{"hora":11700,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Corinthians SP","visitante":"Internacional RS","cuotaLocal":2.4,"empate":3.2,"cuotaVisitante":3.1,"cantidadDeApuestas":245,"cuotaCualquiera":1.55,"ambosAnotan":2.05,"over":2.45,"cuotaFavorito":2.55,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":2.55,"favorito":"visitante"},
	{"hora":11715,"liga":"ZA-URU2","mitad":false,"mitadFavorito":false,"codigoWplay":26834,"local":"Tacuarembo","visitante":"Institucion Atletica Sud America","cuotaLocal":2.45,"empate":2.95,"cuotaVisitante":2.85,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":2.05,"over":2.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11800,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Instituto AC Cordoba","visitante":"San Lorenzo","cuotaLocal":2.15,"empate":2.95,"cuotaVisitante":3.95,"cantidadDeApuestas":184,"cuotaCualquiera":1.666,"ambosAnotan":2.375,"over":3,"cuotaFavorito":3.2,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":3.2,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"Miami FC","visitante":"Pittsburgh Riverhounds","cuotaLocal":5.5,"empate":4.75,"cuotaVisitante":1.42,"cantidadDeApuestas":38,"cuotaCualquiera":1.285,"ambosAnotan":1.727,"over":1.55,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11800,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"Indy Eleven","visitante":"Louisville City","cuotaLocal":3.75,"empate":3.45,"cuotaVisitante":1.833,"cantidadDeApuestas":38,"cuotaCualquiera":1.363,"ambosAnotan":1.666,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11800,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"Hartford Athletic FC","visitante":"Loudoun United FC","cuotaLocal":2.55,"empate":3.55,"cuotaVisitante":2.35,"cantidadDeApuestas":38,"cuotaCualquiera":1.3,"ambosAnotan":1.533,"over":1.65,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11800,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Tigres UANL","visitante":"Puebla","cuotaLocal":1.333,"empate":5.75,"cuotaVisitante":8.5,"cantidadDeApuestas":248,"cuotaCualquiera":1.222,"ambosAnotan":1.75,"over":1.48,"cuotaFavorito":1.42,"rate":1,"stake":0,"localMitad":1.42,"visitanteMitad":2.85,"favorito":"local"},
	{"hora":11800,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Atletico San Luis","visitante":"Monterrey","cuotaLocal":3.2,"empate":3.65,"cuotaVisitante":2.2,"cantidadDeApuestas":256,"cuotaCualquiera":1.333,"ambosAnotan":1.533,"over":1.666,"cuotaFavorito":1.833,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":1.833,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Cruz Azul","visitante":"Necaxa","cuotaLocal":1.5,"empate":4.75,"cuotaVisitante":6.5,"cantidadDeApuestas":250,"cuotaCualquiera":1.285,"ambosAnotan":1.727,"over":1.615,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":2.7,"favorito":"local"},
	{"hora":11800,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Atletico Morelia","visitante":"Leones Negros","cuotaLocal":3.5,"empate":3.5,"cuotaVisitante":2,"cantidadDeApuestas":104,"cuotaCualquiera":1.38,"ambosAnotan":1.769,"over":2,"cuotaFavorito":1.8,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":1.8,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Nublense","visitante":"Deportes Iquique","cuotaLocal":1.833,"empate":3.55,"cuotaVisitante":3.8,"cantidadDeApuestas":96,"cuotaCualquiera":1.333,"ambosAnotan":1.55,"over":1.65,"cuotaFavorito":2.3,"rate":1,"stake":0,"localMitad":1.7,"visitanteMitad":2.3,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"CA All Boys","visitante":"San Martin de San Juan","cuotaLocal":3.1,"empate":2.5,"cuotaVisitante":2.5,"cantidadDeApuestas":14,"cuotaCualquiera":1.666,"ambosAnotan":1,"over":1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11820,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Deportivo Pasto","visitante":"Atlético Nacional","cuotaLocal":2.9,"empate":3,"cuotaVisitante":2.7,"cantidadDeApuestas":142,"cuotaCualquiera":1.55,"ambosAnotan":1.95,"over":2.4,"cuotaFavorito":2.35,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":2.35,"favorito":"visitante"},
	{"hora":11830,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"Rhode Island FC","visitante":"Tampa Bay Rowdies","cuotaLocal":2.3,"empate":3.4,"cuotaVisitante":2.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.35,"ambosAnotan":1.55,"over":1.727,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11830,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Vancouver Whitecaps FC","visitante":"Minnesota United FC","cuotaLocal":2,"empate":3.8,"cuotaVisitante":3.4,"cantidadDeApuestas":264,"cuotaCualquiera":1.285,"ambosAnotan":1.45,"over":1.5,"cuotaFavorito":1.666,"rate":1,"stake":0,"localMitad":1.666,"visitanteMitad":2.05,"favorito":"local"},
	{"hora":11830,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Atlanta United","visitante":"New York Red Bulls","cuotaLocal":2.25,"empate":3.65,"cuotaVisitante":2.9,"cantidadDeApuestas":269,"cuotaCualquiera":1.285,"ambosAnotan":1.45,"over":1.571,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.8,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":11830,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Charlotte FC","visitante":"CF Montreal","cuotaLocal":1.666,"empate":4,"cuotaVisitante":4.5,"cantidadDeApuestas":250,"cuotaCualquiera":1.285,"ambosAnotan":1.55,"over":1.571,"cuotaFavorito":2.35,"rate":1,"stake":0,"localMitad":1.6,"visitanteMitad":2.35,"favorito":"visitante"},
	{"hora":11830,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"FC Cincinnati","visitante":"Orlando City SC","cuotaLocal":1.9,"empate":3.8,"cuotaVisitante":3.8,"cantidadDeApuestas":262,"cuotaCualquiera":1.285,"ambosAnotan":1.5,"over":1.571,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":1.666,"visitanteMitad":2.15,"favorito":"visitante"},
	{"hora":11830,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"New England Revolution","visitante":"DC United","cuotaLocal":2.2,"empate":3.7,"cuotaVisitante":3,"cantidadDeApuestas":266,"cuotaCualquiera":1.285,"ambosAnotan":1.45,"over":1.55,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":11830,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Columbus Crew","visitante":"Philadelphia Union","cuotaLocal":1.7,"empate":4.2,"cuotaVisitante":4.2,"cantidadDeApuestas":262,"cuotaCualquiera":1.222,"ambosAnotan":1.444,"over":1.444,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":2.1,"favorito":"local"},
	{"hora":11900,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Vasco Da Gama RJ","visitante":"Juventude RS","cuotaLocal":1.727,"empate":3.65,"cuotaVisitante":5,"cantidadDeApuestas":212,"cuotaCualquiera":1.42,"ambosAnotan":1.9,"over":2,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":2.8,"favorito":"local"},
	{"hora":11900,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"Memphis 901 FC","visitante":"Oakland Roots","cuotaLocal":1.65,"empate":3.75,"cuotaVisitante":4.333,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1.7,"over":1.75,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Libertad Asuncion","visitante":"Guarani Asuncion","cuotaLocal":1.909,"empate":3.25,"cuotaVisitante":3.85,"cantidadDeApuestas":89,"cuotaCualquiera":1.48,"ambosAnotan":1.95,"over":2.2,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.75,"favorito":"local"},
	{"hora":11900,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Universidad de Chile","visitante":"Union La Calera","cuotaLocal":1.3,"empate":5,"cuotaVisitante":8.5,"cantidadDeApuestas":94,"cuotaCualquiera":1.3,"ambosAnotan":2,"over":1.65,"cuotaFavorito":1.48,"rate":1,"stake":0,"localMitad":1.48,"visitanteMitad":3.45,"favorito":"local"},
	{"hora":11900,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Real Cartagena","visitante":"Barranquilla","cuotaLocal":1.42,"empate":3.95,"cuotaVisitante":7,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":2.1,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11930,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"San Antonio","visitante":"Sacramento Republic FC","cuotaLocal":3.4,"empate":3.35,"cuotaVisitante":1.95,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1.85,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11930,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"Tulsa Roughnecks FC","visitante":"El Paso Locomotive FC","cuotaLocal":2.15,"empate":3.4,"cuotaVisitante":2.9,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.727,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11930,"liga":"ZA-VEN1","mitad":false,"mitadFavorito":false,"codigoWplay":20080,"local":"Academia Puerto Cabello","visitante":"Inter de Barinas","cuotaLocal":1.533,"empate":3.6,"cuotaVisitante":6,"cantidadDeApuestas":38,"cuotaCualquiera":1.48,"ambosAnotan":2.2,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11930,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Sporting Kansas City","visitante":"Los Angeles FC","cuotaLocal":2.9,"empate":3.7,"cuotaVisitante":2.25,"cantidadDeApuestas":266,"cuotaCualquiera":1.285,"ambosAnotan":1.45,"over":1.55,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":1.769,"favorito":"visitante"},
	{"hora":11930,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Saint Louis FC","visitante":"Houston Dynamo","cuotaLocal":2.5,"empate":3.55,"cuotaVisitante":2.65,"cantidadDeApuestas":262,"cuotaCualquiera":1.3,"ambosAnotan":1.5,"over":1.615,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":12000,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Toluca","visitante":"Pumas Unam","cuotaLocal":1.95,"empate":3.8,"cuotaVisitante":3.75,"cantidadDeApuestas":257,"cuotaCualquiera":1.3,"ambosAnotan":1.571,"over":1.666,"cuotaFavorito":1.727,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":2.25,"favorito":"local"},
	{"hora":12000,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Coyotes FC","visitante":"Oaxaca","cuotaLocal":1.833,"empate":3.75,"cuotaVisitante":3.9,"cantidadDeApuestas":94,"cuotaCualquiera":1.333,"ambosAnotan":1.615,"over":1.7,"cuotaFavorito":1.65,"rate":1,"stake":0,"localMitad":1.65,"visitanteMitad":2.2,"favorito":"local"},
	{"hora":12000,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Club Celaya","visitante":"Cancun FC","cuotaLocal":1.75,"empate":3.6,"cuotaVisitante":4.5,"cantidadDeApuestas":90,"cuotaCualquiera":1.4,"ambosAnotan":1.85,"over":2,"cuotaFavorito":1.75,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":2.55,"favorito":"local"},
	{"hora":12005,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Chivas Guadalajara","visitante":"Atlas de Guadalajara","cuotaLocal":1.833,"empate":3.65,"cuotaVisitante":4.5,"cantidadDeApuestas":255,"cuotaCualquiera":1.42,"ambosAnotan":1.909,"over":2.1,"cuotaFavorito":1.833,"rate":1,"stake":0,"localMitad":1.833,"visitanteMitad":2.8,"favorito":"local"},
	{"hora":12030,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Alianza FC","visitante":"Once Caldas","cuotaLocal":2.8,"empate":3.1,"cuotaVisitante":2.75,"cantidadDeApuestas":144,"cuotaCualquiera":1.5,"ambosAnotan":1.909,"over":2.3,"cuotaFavorito":2.3,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":2.3,"favorito":"visitante"},
	{"hora":12030,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"Colorado Rapids","visitante":"Seattle Sounders","cuotaLocal":2.35,"empate":3.5,"cuotaVisitante":2.875,"cantidadDeApuestas":260,"cuotaCualquiera":1.333,"ambosAnotan":1.6,"over":1.769,"cuotaFavorito":2.05,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":2.05,"favorito":"visitante"},
	{"hora":12130,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"L.A. Galaxy","visitante":"Austin FC","cuotaLocal":1.5,"empate":4.75,"cuotaVisitante":5.5,"cantidadDeApuestas":256,"cuotaCualquiera":1.2,"ambosAnotan":1.45,"over":1.363,"cuotaFavorito":1.42,"rate":1,"stake":0,"localMitad":1.42,"visitanteMitad":2.25,"favorito":"local"},
	{"hora":12130,"liga":"ZA-EST1","mitad":true,"mitadFavorito":true,"codigoWplay":19302,"local":"San Jose Earthquakes","visitante":"Real Salt Lake","cuotaLocal":3.1,"empate":3.85,"cuotaVisitante":2.1,"cantidadDeApuestas":264,"cuotaCualquiera":1.25,"ambosAnotan":1.38,"over":1.45,"cuotaFavorito":1.65,"rate":1,"stake":0,"localMitad":1.909,"visitanteMitad":1.65,"favorito":"visitante"},
	{"hora":12200,"liga":"ZA-MEX1","mitad":true,"mitadFavorito":true,"codigoWplay":19329,"local":"Leon","visitante":"America","cuotaLocal":3.85,"empate":3.75,"cuotaVisitante":1.95,"cantidadDeApuestas":250,"cuotaCualquiera":1.35,"ambosAnotan":1.65,"over":1.8,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":1.769,"favorito":"visitante"},
]