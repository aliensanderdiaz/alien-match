let PARTIDOS_OPTIMIZADOS = [
	{"hora":11100,"liga":"AMIE","mitad":true,"mitadFavorito":true,"codigoWplay":617783,"local":"Parma","visitante":"Atalanta","cuotaLocal":5.25,"empate":4,"cuotaVisitante":1.533,"cantidadDeApuestas":86,"cuotaCualquiera":1,"ambosAnotan":1.55,"over":1.533,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.45,"visitanteMitad":1.533,"favorito":""},
	{"hora":11100,"liga":"AMIE","mitad":true,"mitadFavorito":true,"codigoWplay":617783,"local":"Espanyol","visitante":"Toulouse","cuotaLocal":2.55,"empate":3.3,"cuotaVisitante":2.45,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1.666,"over":1.9,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11100,"liga":"AMIC","mitad":true,"mitadFavorito":true,"codigoWplay":20183,"local":"Brescia","visitante":"Renate","cuotaLocal":1.25,"empate":4.75,"cuotaVisitante":10,"cantidadDeApuestas":14,"cuotaCualquiera":1,"ambosAnotan":1,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11100,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Sporting Cristal","visitante":"Carlos Mannucci","cuotaLocal":1.2,"empate":6,"cuotaVisitante":11,"cantidadDeApuestas":44,"cuotaCualquiera":1.222,"ambosAnotan":1.85,"over":1.4,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11100,"liga":"YE-RUM1","mitad":false,"mitadFavorito":true,"codigoWplay":46019,"local":"CS U Craiova","visitante":"Petrolul Ploiesti","cuotaLocal":1.48,"empate":4,"cuotaVisitante":5.75,"cantidadDeApuestas":94,"cuotaCualquiera":1.333,"ambosAnotan":1.833,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.615,"visitanteMitad":2.875,"favorito":""},
	{"hora":11130,"liga":"YE-BIE1","mitad":false,"mitadFavorito":false,"codigoWplay":19493,"local":"Torpedo Zhodino","visitante":"FK Arsenal Dzerzhinsk","cuotaLocal":1.333,"empate":4.333,"cuotaVisitante":8.5,"cantidadDeApuestas":37,"cuotaCualquiera":1.42,"ambosAnotan":2.4,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11130,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"Standard Liege","visitante":"Club Brugge","cuotaLocal":5.5,"empate":4.2,"cuotaVisitante":1.55,"cantidadDeApuestas":117,"cuotaCualquiera":1.285,"ambosAnotan":1.615,"over":1.571,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.375,"visitanteMitad":1.5,"favorito":""},
	{"hora":11130,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Audax Italiano","visitante":"Nublense","cuotaLocal":2.5,"empate":3.2,"cuotaVisitante":2.625,"cantidadDeApuestas":95,"cuotaCualquiera":1.38,"ambosAnotan":1.615,"over":1.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":2.1,"favorito":""},
	{"hora":11130,"liga":"AMIE","mitad":true,"mitadFavorito":true,"codigoWplay":617783,"local":"CF Cadiz","visitante":"Burnley","cuotaLocal":3,"empate":3.35,"cuotaVisitante":2.15,"cantidadDeApuestas":84,"cuotaCualquiera":1,"ambosAnotan":1.727,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":1.95,"favorito":""},
	{"hora":11130,"liga":"AMIC","mitad":true,"mitadFavorito":true,"codigoWplay":20183,"local":"Real Madrid Castilla","visitante":"FC Vizela","cuotaLocal":2.05,"empate":3.3,"cuotaVisitante":3.2,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1.75,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11130,"liga":"AMIC","mitad":true,"mitadFavorito":true,"codigoWplay":20183,"local":"Royal Francs Borains","visitante":"Charleroi","cuotaLocal":2.9,"empate":3.65,"cuotaVisitante":2.05,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1.42,"over":1.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11200,"liga":"AMIE","mitad":true,"mitadFavorito":true,"codigoWplay":617783,"local":"Fiorentina","visitante":"Montpellier","cuotaLocal":1.6,"empate":3.85,"cuotaVisitante":4.75,"cantidadDeApuestas":86,"cuotaCualquiera":1,"ambosAnotan":1.65,"over":1.65,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.615,"visitanteMitad":2.55,"favorito":""},
	{"hora":11200,"liga":"AMIC","mitad":true,"mitadFavorito":true,"codigoWplay":20183,"local":"SD Ejea","visitante":"CD Tudelano","cuotaLocal":2.55,"empate":3.2,"cuotaVisitante":2.375,"cantidadDeApuestas":14,"cuotaCualquiera":1,"ambosAnotan":1,"over":1.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11215,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"KAA Gent","visitante":"FCV Dender EH","cuotaLocal":1.55,"empate":4.2,"cuotaVisitante":5.25,"cantidadDeApuestas":117,"cuotaCualquiera":1.3,"ambosAnotan":1.65,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":2.4,"favorito":""},
	{"hora":11230,"liga":"ALE3","mitad":false,"mitadFavorito":true,"codigoWplay":19366,"local":"FC Ingolstadt 04","visitante":"SV Waldhof Mannheim","cuotaLocal":1.95,"empate":3.55,"cuotaVisitante":3.35,"cantidadDeApuestas":85,"cuotaCualquiera":1.3,"ambosAnotan":1.5,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":2.15,"favorito":""},
	{"hora":11230,"liga":"AMIC","mitad":true,"mitadFavorito":true,"codigoWplay":20183,"local":"Granada","visitante":"Al Nassr Riyadh","cuotaLocal":1.909,"empate":3.5,"cuotaVisitante":3.35,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1.5,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11230,"liga":"AMIC","mitad":true,"mitadFavorito":true,"codigoWplay":20183,"local":"Andorra CF","visitante":"Club Lleida Esportiu","cuotaLocal":2.15,"empate":3,"cuotaVisitante":3.1,"cantidadDeApuestas":14,"cuotaCualquiera":1,"ambosAnotan":1,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11230,"liga":"YE-RUS1","mitad":false,"mitadFavorito":false,"codigoWplay":19388,"local":"FC Akhmat Grozny","visitante":"Lokomotiv Moscow","cuotaLocal":3.1,"empate":3.45,"cuotaVisitante":2.05,"cantidadDeApuestas":40,"cuotaCualquiera":1.333,"ambosAnotan":1.533,"over":1.666,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11230,"liga":"YE-RUS1","mitad":false,"mitadFavorito":false,"codigoWplay":19388,"local":"FC Dynamo Makhachkala","visitante":"FC Nizhny Novgorod","cuotaLocal":2.15,"empate":3,"cuotaVisitante":3.35,"cantidadDeApuestas":40,"cuotaCualquiera":1.533,"ambosAnotan":1.95,"over":2.35,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Sarmiento","visitante":"CA Belgrano","cuotaLocal":2.9,"empate":2.7,"cuotaVisitante":2.9,"cantidadDeApuestas":178,"cuotaCualquiera":1.75,"ambosAnotan":2.4,"over":3.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.75,"visitanteMitad":2.75,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Union Santa Fe","visitante":"River Plate","cuotaLocal":3.7,"empate":3.1,"cuotaVisitante":2.15,"cantidadDeApuestas":185,"cuotaCualquiera":1.533,"ambosAnotan":2.05,"over":2.4,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.75,"visitanteMitad":2.1,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"CA San Telmo","visitante":"Brown de Adrogue","cuotaLocal":1.666,"empate":3.25,"cuotaVisitante":5.25,"cantidadDeApuestas":38,"cuotaCualquiera":1.55,"ambosAnotan":2.25,"over":2.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"El Nacional","visitante":"Universidad Catolica Quito","cuotaLocal":3.5,"empate":3.3,"cuotaVisitante":2.1,"cantidadDeApuestas":115,"cuotaCualquiera":1.4,"ambosAnotan":1.7,"over":1.93,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":1.8,"favorito":""},
	{"hora":11300,"liga":"AMIC","mitad":true,"mitadFavorito":true,"codigoWplay":20183,"local":"USC Paredes","visitante":"Pacos Ferreira","cuotaLocal":2.8,"empate":3.2,"cuotaVisitante":2.35,"cantidadDeApuestas":38,"cuotaCualquiera":1,"ambosAnotan":1.65,"over":1.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-URU1","mitad":false,"mitadFavorito":true,"codigoWplay":19398,"local":"Nacional Montevideo","visitante":"Penarol Montevideo","cuotaLocal":2.55,"empate":3,"cuotaVisitante":2.75,"cantidadDeApuestas":89,"cuotaCualquiera":1.48,"ambosAnotan":1.8,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.25,"favorito":""},
	{"hora":11310,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Union Comercio","visitante":"FBC Melgar","cuotaLocal":4.333,"empate":3.5,"cuotaVisitante":1.7,"cantidadDeApuestas":44,"cuotaCualquiera":1.38,"ambosAnotan":1.8,"over":1.909,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11315,"liga":"YE-POLE","mitad":true,"mitadFavorito":true,"codigoWplay":19336,"local":"Legia Warsaw","visitante":"GKS Piast Gliwice","cuotaLocal":2,"empate":3.2,"cuotaVisitante":4,"cantidadDeApuestas":165,"cuotaCualquiera":1.533,"ambosAnotan":2.05,"over":2.4,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.8,"favorito":""},
	{"hora":11330,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"CD Maipu","visitante":"CA All Boys","cuotaLocal":1.909,"empate":2.875,"cuotaVisitante":4.333,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.55,"over":3.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11330,"liga":"ITAC","mitad":true,"mitadFavorito":true,"codigoWplay":19417,"local":"Cesena","visitante":"Biancoscudati Padova","cuotaLocal":1.533,"empate":3.8,"cuotaVisitante":5.5,"cantidadDeApuestas":45,"cuotaCualquiera":1,"ambosAnotan":1.8,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11330,"liga":"AMIC","mitad":true,"mitadFavorito":true,"codigoWplay":20183,"local":"Cartagena","visitante":"Almeria","cuotaLocal":2.95,"empate":3.2,"cuotaVisitante":2.25,"cantidadDeApuestas":42,"cuotaCualquiera":1,"ambosAnotan":1.65,"over":1.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11345,"liga":"ITAC","mitad":true,"mitadFavorito":true,"codigoWplay":19417,"local":"Avellino","visitante":"Juve Stabia","cuotaLocal":2.5,"empate":3.2,"cuotaVisitante":2.625,"cantidadDeApuestas":44,"cuotaCualquiera":1,"ambosAnotan":1.666,"over":1.9,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Gimnasia Jujuy","visitante":"Tristan Suarez","cuotaLocal":1.95,"empate":3.1,"cuotaVisitante":3.7,"cantidadDeApuestas":38,"cuotaCualquiera":1.571,"ambosAnotan":2.15,"over":2.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Club Atletico Alvarado","visitante":"Racing de Cordoba","cuotaLocal":2.2,"empate":2.8,"cuotaVisitante":3.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.615,"ambosAnotan":2.1,"over":2.65,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Athletico PR","visitante":"Gremio RS","cuotaLocal":1.727,"empate":3.65,"cuotaVisitante":5,"cantidadDeApuestas":228,"cuotaCualquiera":1.45,"ambosAnotan":2,"over":2.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.9,"favorito":""},
	{"hora":11400,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Corinthians SP","visitante":"Juventude RS","cuotaLocal":1.727,"empate":3.5,"cuotaVisitante":5.25,"cantidadDeApuestas":219,"cuotaCualquiera":1.45,"ambosAnotan":2.05,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":3,"favorito":""},
	{"hora":11400,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Fluminense RJ","visitante":"Bahia BA","cuotaLocal":2.1,"empate":3.3,"cuotaVisitante":3.6,"cantidadDeApuestas":271,"cuotaCualquiera":1.48,"ambosAnotan":1.909,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.6,"favorito":""},
	{"hora":11400,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Cobresal","visitante":"Cobreloa","cuotaLocal":1.727,"empate":3.65,"cuotaVisitante":4.2,"cantidadDeApuestas":93,"cuotaCualquiera":1.3,"ambosAnotan":1.533,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.615,"visitanteMitad":2.3,"favorito":""},
	{"hora":11400,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Ponte Preta SP","visitante":"Avai SC","cuotaLocal":2.35,"empate":2.9,"cuotaVisitante":3.35,"cantidadDeApuestas":115,"cuotaCualquiera":1.615,"ambosAnotan":2.15,"over":2.7,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.6,"favorito":""},
	{"hora":11400,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Guabira","visitante":"Universitario de Vinto","cuotaLocal":1.8,"empate":3.3,"cuotaVisitante":4.2,"cantidadDeApuestas":41,"cuotaCualquiera":1.42,"ambosAnotan":1.8,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"YE-RUM1","mitad":false,"mitadFavorito":true,"codigoWplay":46019,"local":"CFR Cluj","visitante":"Universitatea Cluj","cuotaLocal":2.15,"empate":3.35,"cuotaVisitante":3,"cantidadDeApuestas":94,"cuotaCualquiera":1.4,"ambosAnotan":1.7,"over":1.93,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":2.3,"favorito":""},
	{"hora":11500,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Internacional RS","visitante":"Palmeiras SP","cuotaLocal":2.4,"empate":3.1,"cuotaVisitante":3.1,"cantidadDeApuestas":306,"cuotaCualquiera":1.571,"ambosAnotan":2.1,"over":2.55,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":2.6,"favorito":""},
	{"hora":11500,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Nacional Asuncion","visitante":"Sportivo Ameliano","cuotaLocal":2.1,"empate":3.2,"cuotaVisitante":3.4,"cantidadDeApuestas":88,"cuotaCualquiera":1.48,"ambosAnotan":2,"over":2.35,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":2.625,"favorito":""},
	{"hora":11500,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Atlanta United","visitante":"Santos Laguna","cuotaLocal":1.55,"empate":4.5,"cuotaVisitante":5.25,"cantidadDeApuestas":185,"cuotaCualquiera":1.285,"ambosAnotan":1.65,"over":1.571,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.571,"visitanteMitad":2.5,"favorito":""},
	{"hora":11520,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Asociacion Deportiva Tarma","visitante":"Atlético Grau","cuotaLocal":1.35,"empate":4.2,"cuotaVisitante":8.5,"cantidadDeApuestas":44,"cuotaCualquiera":1.363,"ambosAnotan":2.05,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Boca Juniors","visitante":"CA Barracas Central","cuotaLocal":1.363,"empate":4.5,"cuotaVisitante":9,"cantidadDeApuestas":183,"cuotaCualquiera":1.4,"ambosAnotan":2.3,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.615,"visitanteMitad":3.7,"favorito":""},
	{"hora":11530,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Patriotas Boyaca","visitante":"América de Cali","cuotaLocal":3.55,"empate":3.2,"cuotaVisitante":2.25,"cantidadDeApuestas":169,"cuotaCualquiera":1.571,"ambosAnotan":2.1,"over":2.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.75,"visitanteMitad":2.25,"favorito":""},
	{"hora":11530,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Macara","visitante":"LDU Quito","cuotaLocal":3.85,"empate":3.3,"cuotaVisitante":2,"cantidadDeApuestas":112,"cuotaCualquiera":1.48,"ambosAnotan":1.95,"over":2.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.55,"visitanteMitad":1.909,"favorito":""},
	{"hora":11600,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Tigres FC","visitante":"CD Real Santander","cuotaLocal":1.666,"empate":3.5,"cuotaVisitante":4.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1.9,"over":2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11630,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Universidad de Chile","visitante":"Deportes Copiapo","cuotaLocal":1.4,"empate":4.5,"cuotaVisitante":6.25,"cantidadDeApuestas":93,"cuotaCualquiera":1.25,"ambosAnotan":1.666,"over":1.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.48,"visitanteMitad":2.65,"favorito":""},
	{"hora":11630,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Operario PR","visitante":"CRB Maceio AL","cuotaLocal":2.15,"empate":2.85,"cuotaVisitante":4,"cantidadDeApuestas":113,"cuotaCualquiera":1.7,"ambosAnotan":2.4,"over":3.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":3,"favorito":""},
	{"hora":11630,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Novorizontino SP","visitante":"Goias GO","cuotaLocal":2.1,"empate":2.9,"cuotaVisitante":3.95,"cantidadDeApuestas":112,"cuotaCualquiera":1.7,"ambosAnotan":2.5,"over":3.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.25,"visitanteMitad":3,"favorito":""},
	{"hora":11630,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"The Strongest","visitante":"Club Independiente Petrolero","cuotaLocal":1.4,"empate":4.333,"cuotaVisitante":6.5,"cantidadDeApuestas":41,"cuotaCualquiera":1.285,"ambosAnotan":1.727,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11710,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Defensores de Belgrano","visitante":"Chacarita Juniors","cuotaLocal":2.05,"empate":2.875,"cuotaVisitante":3.7,"cantidadDeApuestas":38,"cuotaCualquiera":1.6,"ambosAnotan":2.3,"over":2.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11730,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Cerro Porteño","visitante":"Sportivo Luqueno","cuotaLocal":1.571,"empate":3.7,"cuotaVisitante":5.25,"cantidadDeApuestas":88,"cuotaCualquiera":1.42,"ambosAnotan":2,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":3,"favorito":""},
	{"hora":11745,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"CD Junior","visitante":"Alianza FC","cuotaLocal":1.48,"empate":4.333,"cuotaVisitante":7.5,"cantidadDeApuestas":173,"cuotaCualquiera":1.444,"ambosAnotan":2.3,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":3.55,"favorito":""},
	{"hora":11800,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Atletico Tucuman","visitante":"Independiente Rivadavia","cuotaLocal":2,"empate":3.1,"cuotaVisitante":4.2,"cantidadDeApuestas":181,"cuotaCualquiera":1.615,"ambosAnotan":2.3,"over":2.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":3.2,"favorito":""},
	{"hora":11800,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Atletico Lanus","visitante":"CA Tigre","cuotaLocal":1.8,"empate":3.5,"cuotaVisitante":4.75,"cantidadDeApuestas":183,"cuotaCualquiera":1.5,"ambosAnotan":2.15,"over":2.35,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":3,"favorito":""},
	{"hora":11800,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Club Sport Emelec","visitante":"Deportivo Cuenca","cuotaLocal":1.65,"empate":3.6,"cuotaVisitante":5.5,"cantidadDeApuestas":112,"cuotaCualquiera":1.42,"ambosAnotan":1.95,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.666,"visitanteMitad":2.75,"favorito":""},
	{"hora":11830,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Jorge Wilstermann","visitante":"Real Tomayapo","cuotaLocal":1.6,"empate":3.5,"cuotaVisitante":5.25,"cantidadDeApuestas":41,"cuotaCualquiera":1.42,"ambosAnotan":1.95,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11900,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Orlando City SC","visitante":"Atletico San Luis","cuotaLocal":1.6,"empate":4,"cuotaVisitante":5.25,"cantidadDeApuestas":186,"cuotaCualquiera":1.285,"ambosAnotan":1.55,"over":1.55,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.55,"visitanteMitad":2.375,"favorito":""},
	{"hora":11900,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Philadelphia Union","visitante":"Cruz Azul","cuotaLocal":3.1,"empate":3.6,"cuotaVisitante":2.15,"cantidadDeApuestas":186,"cuotaCualquiera":1.35,"ambosAnotan":1.615,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.15,"visitanteMitad":1.85,"favorito":""},
	{"hora":11900,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Pachuca","visitante":"Toronto FC","cuotaLocal":2.4,"empate":3.2,"cuotaVisitante":3,"cantidadDeApuestas":187,"cuotaCualquiera":1.363,"ambosAnotan":1.65,"over":1.833,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.15,"favorito":""},
	{"hora":11950,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Deportivo Cali","visitante":"Independiente Medellin","cuotaLocal":2.65,"empate":3.2,"cuotaVisitante":2.9,"cantidadDeApuestas":173,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2.2,"visitanteMitad":2.3,"favorito":""},
	{"hora":12000,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Universitario de Deportes","visitante":"UTC Cajamarca","cuotaLocal":1.2,"empate":5.25,"cuotaVisitante":12,"cantidadDeApuestas":43,"cuotaCualquiera":1.3,"ambosAnotan":2.35,"over":1.7,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":12000,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Saint Louis FC","visitante":"FC Juarez","cuotaLocal":2,"empate":3.55,"cuotaVisitante":3.65,"cantidadDeApuestas":186,"cuotaCualquiera":1.35,"ambosAnotan":1.615,"over":1.75,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":2.3,"favorito":""},
	{"hora":12130,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Chivas Guadalajara","visitante":"L.A. Galaxy","cuotaLocal":2.9,"empate":3.6,"cuotaVisitante":2.3,"cantidadDeApuestas":187,"cuotaCualquiera":1.3,"ambosAnotan":1.533,"over":1.65,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":2,"visitanteMitad":1.85,"favorito":""},
	{"hora":12130,"liga":"I-LEAC","mitad":true,"mitadFavorito":true,"codigoWplay":29935,"local":"Seattle Sounders","visitante":"Necaxa","cuotaLocal":1.65,"empate":4.2,"cuotaVisitante":4.75,"cantidadDeApuestas":185,"cuotaCualquiera":1.285,"ambosAnotan":1.6,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1.6,"visitanteMitad":2.4,"favorito":""},
]