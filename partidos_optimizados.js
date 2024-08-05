let PARTIDOS_OPTIMIZADOS = [
	{"hora":11100,"liga":"I-OLIH","mitad":true,"mitadFavorito":true,"codigoWplay":45631,"local":"Marruecos Olímpico","visitante":"España Olímpico","cuotaLocal":3.45,"empate":3.35,"cuotaVisitante":2.15,"cantidadDeApuestas":219,"cuotaCualquiera":1.42,"ambosAnotan":1.769,"over":2,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":1.95,"favorito":"local"},
	{"hora":11100,"liga":"YE-RUM1","mitad":false,"mitadFavorito":true,"codigoWplay":46019,"local":"Unirea Slobozia","visitante":"FC Uta Arad","cuotaLocal":2.55,"empate":2.95,"cuotaVisitante":2.8,"cantidadDeApuestas":93,"cuotaCualquiera":1.571,"ambosAnotan":2,"over":2.5,"cuotaFavorito":2.55,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":2.55,"favorito":"visitante"},
	{"hora":11200,"liga":"YE-POLE","mitad":true,"mitadFavorito":true,"codigoWplay":19336,"local":"Cracovia Krakow","visitante":"Widzew Lodz","cuotaLocal":2.4,"empate":3.4,"cuotaVisitante":2.85,"cantidadDeApuestas":169,"cuotaCualquiera":1.38,"ambosAnotan":1.666,"over":1.85,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.15,"favorito":"visitante"},
	{"hora":11200,"liga":"YE-RUS1","mitad":false,"mitadFavorito":false,"codigoWplay":19388,"local":"Spartak Moscow","visitante":"Krylia Sovetov Samara","cuotaLocal":1.5,"empate":4,"cuotaVisitante":5.5,"cantidadDeApuestas":40,"cuotaCualquiera":1.3,"ambosAnotan":1.727,"over":1.666,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11230,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Deportivo Riestra","visitante":"Central Cordoba","cuotaLocal":2,"empate":3.1,"cuotaVisitante":4.2,"cantidadDeApuestas":182,"cuotaCualquiera":1.571,"ambosAnotan":2.1,"over":2.5,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.95,"favorito":"local"},
	{"hora":11230,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Alianza Atletico","visitante":"Sport Huancayo","cuotaLocal":1.666,"empate":3.65,"cuotaVisitante":4.333,"cantidadDeApuestas":44,"cuotaCualquiera":1.38,"ambosAnotan":1.8,"over":1.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Real Santa Cruz","visitante":"Club Aurora","cuotaLocal":3.1,"empate":3.4,"cuotaVisitante":2.05,"cantidadDeApuestas":42,"cuotaCualquiera":1.38,"ambosAnotan":1.666,"over":1.9,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"R-ESC1","mitad":true,"mitadFavorito":true,"codigoWplay":19208,"local":"St Johnstone","visitante":"Aberdeen","cuotaLocal":2.9,"empate":3.1,"cuotaVisitante":2.3,"cantidadDeApuestas":192,"cuotaCualquiera":1.42,"ambosAnotan":1.727,"over":2,"cuotaFavorito":2.25,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":2.05,"favorito":"local"},
	{"hora":11400,"liga":"I-OLIH","mitad":true,"mitadFavorito":true,"codigoWplay":45631,"local":"Francia Olímpico","visitante":"Egipto Olímpico","cuotaLocal":1.333,"empate":5,"cuotaVisitante":9,"cantidadDeApuestas":195,"cuotaCualquiera":1.333,"ambosAnotan":2.1,"over":1.75,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":3.35,"favorito":"local"},
	{"hora":11400,"liga":"AMIE","mitad":true,"mitadFavorito":true,"codigoWplay":617783,"local":"Fulham","visitante":"Sevilla","cuotaLocal":2.65,"empate":3.45,"cuotaVisitante":2.3,"cantidadDeApuestas":38,"cuotaCualquiera":1.35,"ambosAnotan":1.615,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"YE-RUM1","mitad":false,"mitadFavorito":true,"codigoWplay":46019,"local":"Rapid Bucharest","visitante":"Sepsi OSK","cuotaLocal":2,"empate":3.35,"cuotaVisitante":3.45,"cantidadDeApuestas":95,"cuotaCualquiera":1.363,"ambosAnotan":1.65,"over":1.8,"cuotaFavorito":2.3,"rate":1,"stake":0,"localMitad":1.833,"visitanteMitad":2.3,"favorito":"visitante"},
	{"hora":11500,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Gimnasia LP","visitante":"Rosario Central","cuotaLocal":2.2,"empate":3.2,"cuotaVisitante":3.45,"cantidadDeApuestas":183,"cuotaCualquiera":1.533,"ambosAnotan":2.05,"over":2.4,"cuotaFavorito":2.65,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.65,"favorito":"visitante"},
	{"hora":11500,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Atletico de Cali","visitante":"Bogota FC","cuotaLocal":2.75,"empate":3.2,"cuotaVisitante":2.375,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1.7,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11630,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Chapecoense SC","visitante":"Mirassol SP","cuotaLocal":2.9,"empate":2.875,"cuotaVisitante":2.625,"cantidadDeApuestas":112,"cuotaCualquiera":1.666,"ambosAnotan":2.25,"over":3,"cuotaFavorito":2.5,"rate":1,"stake":0,"localMitad":2.5,"visitanteMitad":2.4,"favorito":"local"},
	{"hora":11700,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Club Atletico Atlanta","visitante":"Gimnasia Y Esgrima Mendoza","cuotaLocal":2.55,"empate":2.85,"cuotaVisitante":2.85,"cantidadDeApuestas":38,"cuotaCualquiera":1.65,"ambosAnotan":2.25,"over":2.9,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Ferro Carril Oeste","visitante":"Agropecuario Argentino","cuotaLocal":2.05,"empate":3,"cuotaVisitante":3.6,"cantidadDeApuestas":38,"cuotaCualquiera":1.571,"ambosAnotan":2.1,"over":2.55,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11710,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Estudiantes Rio Cuarto","visitante":"CA Aldosivi","cuotaLocal":2.45,"empate":2.8,"cuotaVisitante":3,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.35,"over":3.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11730,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Real Soacha Cundinamarca","visitante":"Deportes Quindio","cuotaLocal":2.1,"empate":3.2,"cuotaVisitante":3.25,"cantidadDeApuestas":38,"cuotaCualquiera":1.4,"ambosAnotan":1.7,"over":1.93,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11800,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Platense","visitante":"Banfield","cuotaLocal":2.55,"empate":2.75,"cuotaVisitante":3.35,"cantidadDeApuestas":178,"cuotaCualquiera":1.75,"ambosAnotan":2.4,"over":3.25,"cuotaFavorito":2.55,"rate":1,"stake":0,"localMitad":2.55,"visitanteMitad":2.95,"favorito":"local"},
	{"hora":11800,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Cusco FC","visitante":"Sport Boys Association","cuotaLocal":1.363,"empate":4.2,"cuotaVisitante":8,"cantidadDeApuestas":40,"cuotaCualquiera":1.363,"ambosAnotan":2.05,"over":1.833,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Cruzeiro MG","visitante":"Fortaleza CE","cuotaLocal":1.95,"empate":3.4,"cuotaVisitante":4,"cantidadDeApuestas":222,"cuotaCualquiera":1.48,"ambosAnotan":2,"over":2.25,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.75,"favorito":"local"},
	{"hora":11900,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Vila Nova FC","visitante":"Paysandu PA","cuotaLocal":2,"empate":3.2,"cuotaVisitante":3.95,"cantidadDeApuestas":116,"cuotaCualquiera":1.48,"ambosAnotan":1.95,"over":2.25,"cuotaFavorito":1.909,"rate":1,"stake":0,"localMitad":1.909,"visitanteMitad":2.55,"favorito":"local"},
	{"hora":11900,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Atletico Rafaela","visitante":"Temperley","cuotaLocal":2.55,"empate":2.8,"cuotaVisitante":2.8,"cantidadDeApuestas":38,"cuotaCualquiera":1.615,"ambosAnotan":2.15,"over":2.75,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Blooming","visitante":"CA Nacional Potosi","cuotaLocal":1.727,"empate":3.8,"cuotaVisitante":3.85,"cantidadDeApuestas":42,"cuotaCualquiera":1.3,"ambosAnotan":1.6,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Cumbaya FC","visitante":"Tecnico Universitario","cuotaLocal":2.7,"empate":3.1,"cuotaVisitante":2.625,"cantidadDeApuestas":113,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":2.1,"favorito":"visitante"},
	{"hora":11900,"liga":"ZA-ECUC","mitad":false,"mitadFavorito":false,"codigoWplay":54272,"local":"CD Santo Domingo","visitante":"Orense SC","cuotaLocal":6.5,"empate":5.25,"cuotaVisitante":1.333,"cantidadDeApuestas":38,"cuotaCualquiera":1.363,"ambosAnotan":2.1,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"FC Cincinnati","visitante":"New York City","cuotaLocal":2,"empate":3.7,"cuotaVisitante":3.5,"cantidadDeApuestas":165,"cuotaCualquiera":1.333,"ambosAnotan":1.6,"over":1.7,"cuotaFavorito":2.2,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":2.2,"favorito":"visitante"},
	{"hora":11905,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Quilmes AC","visitante":"San Martin de San Juan","cuotaLocal":2.25,"empate":2.85,"cuotaVisitante":3.25,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.35,"over":3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11910,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Colon de Santa Fe","visitante":"Mitre Santiago Del Estero","cuotaLocal":1.571,"empate":3.25,"cuotaVisitante":6.5,"cantidadDeApuestas":37,"cuotaCualquiera":1.6,"ambosAnotan":2.625,"over":2.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":12000,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Atlético Nacional","visitante":"Rionegro Aguilas","cuotaLocal":2.05,"empate":3.25,"cuotaVisitante":3.8,"cantidadDeApuestas":148,"cuotaCualquiera":1.48,"ambosAnotan":1.95,"over":2.25,"cuotaFavorito":2,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.65,"favorito":"local"},
	{"hora":12000,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Leon","visitante":"Colorado Rapids","cuotaLocal":2.85,"empate":3.55,"cuotaVisitante":2.35,"cantidadDeApuestas":166,"cuotaCualquiera":1.333,"ambosAnotan":1.571,"over":1.7,"cuotaFavorito":2.05,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":1.9,"favorito":"local"},
	{"hora":12000,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Toluca","visitante":"Sporting Kansas City","cuotaLocal":2.3,"empate":3.6,"cuotaVisitante":2.85,"cantidadDeApuestas":167,"cuotaCualquiera":1.3,"ambosAnotan":1.533,"over":1.65,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2,"favorito":"local"},
	{"hora":12000,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Houston Dynamo","visitante":"Real Salt Lake","cuotaLocal":2,"empate":3.6,"cuotaVisitante":3.5,"cantidadDeApuestas":165,"cuotaCualquiera":1.333,"ambosAnotan":1.6,"over":1.727,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":2.25,"favorito":"local"},
]