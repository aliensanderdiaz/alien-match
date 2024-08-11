let PARTIDOS_OPTIMIZADOS = [
	{"hora":11000,"liga":"R-ING2","mitad":true,"mitadFavorito":true,"codigoWplay":19156,"local":"Sheffield Wednesday","visitante":"Plymouth Argyle","cuotaLocal":1.833,"empate":3.5,"cuotaVisitante":4.333,"cantidadDeApuestas":191,"cuotaCualquiera":1.4,"ambosAnotan":1.769,"over":1.93,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":2.6,"favorito":"local"},
	{"hora":11000,"liga":"YE-REP1","mitad":false,"mitadFavorito":true,"codigoWplay":19403,"local":"FK Mlada Boleslav","visitante":"SK Dynamo Ceske Budejovice","cuotaLocal":1.571,"empate":3.95,"cuotaVisitante":5,"cantidadDeApuestas":83,"cuotaCualquiera":1.285,"ambosAnotan":1.6,"over":1.6,"cuotaFavorito":1.571,"rate":1,"stake":0,"localMitad":1.571,"visitanteMitad":2.45,"favorito":"local"},
	{"hora":11000,"liga":"YE-REP1","mitad":false,"mitadFavorito":true,"codigoWplay":19403,"local":"Banik Ostrava","visitante":"FC Hradec Kralove","cuotaLocal":1.666,"empate":3.65,"cuotaVisitante":4.75,"cantidadDeApuestas":82,"cuotaCualquiera":1.363,"ambosAnotan":1.727,"over":1.8,"cuotaFavorito":1.7,"rate":1,"stake":0,"localMitad":1.7,"visitanteMitad":2.65,"favorito":"local"},
	{"hora":11000,"liga":"YE-UCR1","mitad":false,"mitadFavorito":false,"codigoWplay":19383,"local":"Shakhtar Donetsk","visitante":"Polissya Zhytomyr","cuotaLocal":1.25,"empate":5,"cuotaVisitante":9.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.285,"ambosAnotan":2.1,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11030,"liga":"YE-POLE","mitad":true,"mitadFavorito":true,"codigoWplay":19336,"local":"Puszcza Niepolomice","visitante":"Legia Warsaw","cuotaLocal":4.5,"empate":3.6,"cuotaVisitante":1.8,"cantidadDeApuestas":166,"cuotaCualquiera":1.4,"ambosAnotan":1.8,"over":1.95,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":2.625,"visitanteMitad":1.769,"favorito":"visitante"},
	{"hora":11100,"liga":"ITAC","mitad":true,"mitadFavorito":true,"codigoWplay":19417,"local":"Brescia","visitante":"Venezia","cuotaLocal":2.8,"empate":3.1,"cuotaVisitante":2.35,"cantidadDeApuestas":39,"cuotaCualquiera":1.444,"ambosAnotan":1.75,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11100,"liga":"YE-RUM1","mitad":false,"mitadFavorito":true,"codigoWplay":46019,"local":"Sepsi OSK","visitante":"CS U Craiova","cuotaLocal":2.55,"empate":3.2,"cuotaVisitante":2.55,"cantidadDeApuestas":97,"cuotaCualquiera":1.38,"ambosAnotan":1.615,"over":1.85,"cuotaFavorito":2.05,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":2.05,"favorito":"visitante"},
	{"hora":11115,"liga":"YE-TUR1","mitad":true,"mitadFavorito":true,"codigoWplay":19363,"local":"Sivasspor","visitante":"Trabzonspor","cuotaLocal":3.5,"empate":3.45,"cuotaVisitante":2.05,"cantidadDeApuestas":213,"cuotaCualquiera":1.363,"ambosAnotan":1.7,"over":1.85,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":1.85,"favorito":"visitante"},
	{"hora":11115,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Boluspor","visitante":"Igdir Belediyespor","cuotaLocal":2.35,"empate":3.2,"cuotaVisitante":2.8,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":1.909,"over":2.25,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11115,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Karagumruk","visitante":"Amedspor","cuotaLocal":2.1,"empate":3.35,"cuotaVisitante":3.1,"cantidadDeApuestas":38,"cuotaCualquiera":1.363,"ambosAnotan":1.6,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11130,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"Charleroi","visitante":"KAA Gent","cuotaLocal":2.85,"empate":3.5,"cuotaVisitante":2.3,"cantidadDeApuestas":118,"cuotaCualquiera":1.333,"ambosAnotan":1.5,"over":1.65,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.909,"visitanteMitad":1.769,"favorito":"visitante"},
	{"hora":11130,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"Audax Italiano","visitante":"Union Espanola","cuotaLocal":2.55,"empate":3.35,"cuotaVisitante":2.5,"cantidadDeApuestas":93,"cuotaCualquiera":1.333,"ambosAnotan":1.533,"over":1.7,"cuotaFavorito":1.95,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":1.95,"favorito":"visitante"},
	{"hora":11130,"liga":"YE-BIE1","mitad":false,"mitadFavorito":false,"codigoWplay":19493,"local":"Neman Grodno","visitante":"FC Gomel","cuotaLocal":1.333,"empate":4.333,"cuotaVisitante":9,"cantidadDeApuestas":37,"cuotaCualquiera":1.4,"ambosAnotan":2.35,"over":1.95,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11130,"liga":"ITAC","mitad":true,"mitadFavorito":true,"codigoWplay":19417,"local":"Parma","visitante":"Palermo","cuotaLocal":1.85,"empate":3.3,"cuotaVisitante":3.9,"cantidadDeApuestas":45,"cuotaCualquiera":1.38,"ambosAnotan":1.7,"over":1.9,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11200,"liga":"YE-POR1","mitad":true,"mitadFavorito":true,"codigoWplay":19211,"local":"FC Famalicao","visitante":"Benfica","cuotaLocal":7,"empate":4.75,"cuotaVisitante":1.444,"cantidadDeApuestas":293,"cuotaCualquiera":1.285,"ambosAnotan":1.727,"over":1.571,"cuotaFavorito":1.48,"rate":1,"stake":0,"localMitad":2.75,"visitanteMitad":1.48,"favorito":"visitante"},
	{"hora":11200,"liga":"YE-POR1","mitad":true,"mitadFavorito":true,"codigoWplay":19211,"local":"Sporting Farense","visitante":"Moreirense","cuotaLocal":2.9,"empate":3.25,"cuotaVisitante":2.5,"cantidadDeApuestas":272,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.15,"cuotaFavorito":2.15,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":2.15,"favorito":"visitante"},
	{"hora":11200,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"FC Porto B","visitante":"Alverca","cuotaLocal":1.85,"empate":3.2,"cuotaVisitante":4,"cantidadDeApuestas":79,"cuotaCualquiera":1.42,"ambosAnotan":1.833,"over":2.05,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.65,"favorito":"local"},
	{"hora":11200,"liga":"YE-RUS1","mitad":false,"mitadFavorito":false,"codigoWplay":19388,"local":"Spartak Moscow","visitante":"FC Akhmat Grozny","cuotaLocal":1.363,"empate":4.5,"cuotaVisitante":6.5,"cantidadDeApuestas":40,"cuotaCualquiera":1.285,"ambosAnotan":1.8,"over":1.6,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11215,"liga":"YE-BEL1","mitad":true,"mitadFavorito":true,"codigoWplay":19372,"local":"Cercle Brugge","visitante":"Beerschot","cuotaLocal":1.533,"empate":4.333,"cuotaVisitante":5.5,"cantidadDeApuestas":117,"cuotaCualquiera":1.3,"ambosAnotan":1.727,"over":1.65,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":2.45,"favorito":"local"},
	{"hora":11230,"liga":"ALE3","mitad":false,"mitadFavorito":true,"codigoWplay":19366,"local":"1.FC Saarbrücken","visitante":"SV Sandhausen","cuotaLocal":1.7,"empate":3.65,"cuotaVisitante":4.333,"cantidadDeApuestas":86,"cuotaCualquiera":1.3,"ambosAnotan":1.571,"over":1.65,"cuotaFavorito":1.65,"rate":1,"stake":0,"localMitad":1.65,"visitanteMitad":2.4,"favorito":"local"},
	{"hora":11300,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Central Cordoba","visitante":"Defensa Y Justicia","cuotaLocal":2.95,"empate":3.2,"cuotaVisitante":2.45,"cantidadDeApuestas":183,"cuotaCualquiera":1.48,"ambosAnotan":1.9,"over":2.25,"cuotaFavorito":2.2,"rate":1,"stake":0,"localMitad":2.375,"visitanteMitad":2.2,"favorito":"visitante"},
	{"hora":11300,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Instituto AC Cordoba","visitante":"Platense","cuotaLocal":2,"empate":3.1,"cuotaVisitante":4.2,"cantidadDeApuestas":179,"cuotaCualquiera":1.7,"ambosAnotan":2.55,"over":3.1,"cuotaFavorito":2.3,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":3.3,"favorito":"local"},
	{"hora":11300,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Club Almagro","visitante":"CA San Telmo","cuotaLocal":3.1,"empate":2.6,"cuotaVisitante":2.55,"cantidadDeApuestas":38,"cuotaCualquiera":1.75,"ambosAnotan":2.35,"over":3.2,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Gimnasia Y Esgrima Mendoza","visitante":"Almirante Brown","cuotaLocal":1.55,"empate":3.35,"cuotaVisitante":6.25,"cantidadDeApuestas":37,"cuotaCualquiera":1.6,"ambosAnotan":2.65,"over":2.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Defensores de Belgrano","visitante":"Chaco For Ever","cuotaLocal":1.909,"empate":2.9,"cuotaVisitante":4.333,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.5,"over":3.1,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Guillermo Brown","visitante":"Quilmes AC","cuotaLocal":3.1,"empate":2.7,"cuotaVisitante":2.45,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.3,"over":3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Nueva Chicago","visitante":"Club Atletico Atlanta","cuotaLocal":2.05,"empate":2.9,"cuotaVisitante":3.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.7,"ambosAnotan":2.45,"over":3,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Brown de Adrogue","visitante":"Atletico Rafaela","cuotaLocal":2.625,"empate":2.65,"cuotaVisitante":2.9,"cantidadDeApuestas":38,"cuotaCualquiera":1.666,"ambosAnotan":2.15,"over":2.9,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Club Atletico Alvarado","visitante":"CA Aldosivi","cuotaLocal":2.7,"empate":2.7,"cuotaVisitante":2.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.666,"ambosAnotan":2.15,"over":2.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"El Nacional","visitante":"Macara","cuotaLocal":2.1,"empate":3.4,"cuotaVisitante":3.3,"cantidadDeApuestas":115,"cuotaCualquiera":1.444,"ambosAnotan":1.8,"over":2.05,"cuotaFavorito":1.909,"rate":1,"stake":0,"localMitad":1.909,"visitanteMitad":2.3,"favorito":"local"},
	{"hora":11300,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Leones Negros","visitante":"Mineros de Zacatecas","cuotaLocal":2,"empate":3.6,"cuotaVisitante":3.5,"cantidadDeApuestas":93,"cuotaCualquiera":1.35,"ambosAnotan":1.615,"over":1.769,"cuotaFavorito":1.727,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":2.15,"favorito":"local"},
	{"hora":11300,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Atlético Grau","visitante":"Sporting Cristal","cuotaLocal":3.2,"empate":3.35,"cuotaVisitante":2.05,"cantidadDeApuestas":44,"cuotaCualquiera":1.333,"ambosAnotan":1.55,"over":1.727,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11300,"liga":"YE-REP1","mitad":false,"mitadFavorito":true,"codigoWplay":19403,"local":"Viktoria Plzen","visitante":"MFK Karvina","cuotaLocal":1.42,"empate":4.5,"cuotaVisitante":6,"cantidadDeApuestas":83,"cuotaCualquiera":1.285,"ambosAnotan":1.7,"over":1.571,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":2.75,"favorito":"local"},
	{"hora":11300,"liga":"ZA-URU2","mitad":false,"mitadFavorito":false,"codigoWplay":26834,"local":"Rentistas","visitante":"Juventud de Las Piedras","cuotaLocal":2,"empate":3.1,"cuotaVisitante":3.6,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":2.1,"over":2.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11315,"liga":"YE-POLE","mitad":true,"mitadFavorito":true,"codigoWplay":19336,"local":"Widzew Lodz","visitante":"Slask Wroclaw","cuotaLocal":2.25,"empate":3.2,"cuotaVisitante":3.3,"cantidadDeApuestas":167,"cuotaCualquiera":1.45,"ambosAnotan":1.8,"over":2.1,"cuotaFavorito":2.05,"rate":1,"stake":0,"localMitad":2.05,"visitanteMitad":2.4,"favorito":"local"},
	{"hora":11330,"liga":"ZA-URU2","mitad":false,"mitadFavorito":false,"codigoWplay":26834,"local":"Tacuarembo","visitante":"Club Oriental de La Paz","cuotaLocal":2.35,"empate":2.95,"cuotaVisitante":2.95,"cantidadDeApuestas":38,"cuotaCualquiera":1.5,"ambosAnotan":2,"over":2.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11345,"liga":"ITAC","mitad":true,"mitadFavorito":true,"codigoWplay":19417,"local":"Sampdoria","visitante":"Como","cuotaLocal":2.95,"empate":3.2,"cuotaVisitante":2.25,"cantidadDeApuestas":39,"cuotaCualquiera":1.4,"ambosAnotan":1.666,"over":1.93,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11345,"liga":"YE-TUR1","mitad":true,"mitadFavorito":true,"codigoWplay":19363,"local":"Samsunspor","visitante":"Besiktas","cuotaLocal":4.2,"empate":3.7,"cuotaVisitante":1.8,"cantidadDeApuestas":243,"cuotaCualquiera":1.363,"ambosAnotan":1.769,"over":1.85,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":2.55,"visitanteMitad":1.769,"favorito":"visitante"},
	{"hora":11345,"liga":"YE-TUR1","mitad":true,"mitadFavorito":true,"codigoWplay":19363,"local":"Alanyaspor","visitante":"Eyupspor","cuotaLocal":2,"empate":3.6,"cuotaVisitante":3.55,"cantidadDeApuestas":184,"cuotaCualquiera":1.363,"ambosAnotan":1.7,"over":1.833,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.3,"favorito":"local"},
	{"hora":11345,"liga":"YE-TUR2","mitad":false,"mitadFavorito":false,"codigoWplay":19370,"local":"Ankaragucu","visitante":"Sanliurfaspor","cuotaLocal":1.35,"empate":4.5,"cuotaVisitante":7.5,"cantidadDeApuestas":38,"cuotaCualquiera":1.333,"ambosAnotan":1.95,"over":1.727,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Patronato Parana","visitante":"Gimnasia Jujuy","cuotaLocal":2.45,"empate":2.8,"cuotaVisitante":3,"cantidadDeApuestas":38,"cuotaCualquiera":1.65,"ambosAnotan":2.2,"over":2.875,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Mitre Santiago Del Estero","visitante":"Estudiantes Rio Cuarto","cuotaLocal":2.2,"empate":2.7,"cuotaVisitante":3.65,"cantidadDeApuestas":37,"cuotaCualquiera":1.769,"ambosAnotan":2.6,"over":3.5,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Agropecuario Argentino","visitante":"CA San Miguel","cuotaLocal":2.3,"empate":2.8,"cuotaVisitante":3.3,"cantidadDeApuestas":38,"cuotaCualquiera":1.615,"ambosAnotan":2.1,"over":2.625,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11400,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Sao Paulo SP","visitante":"Atletico GO","cuotaLocal":1.571,"empate":3.85,"cuotaVisitante":6.25,"cantidadDeApuestas":237,"cuotaCualquiera":1.45,"ambosAnotan":2.2,"over":2.15,"cuotaFavorito":1.769,"rate":1,"stake":0,"localMitad":1.769,"visitanteMitad":3.3,"favorito":"local"},
	{"hora":11400,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Flamengo RJ","visitante":"Palmeiras SP","cuotaLocal":1.909,"empate":3.35,"cuotaVisitante":4.2,"cantidadDeApuestas":291,"cuotaCualquiera":1.42,"ambosAnotan":1.85,"over":2.05,"cuotaFavorito":1.85,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.6,"favorito":"local"},
	{"hora":11400,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Bahia BA","visitante":"EC Vitoria","cuotaLocal":1.65,"empate":3.75,"cuotaVisitante":5.5,"cantidadDeApuestas":225,"cuotaCualquiera":1.4,"ambosAnotan":1.93,"over":2,"cuotaFavorito":1.75,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":2.875,"favorito":"local"},
	{"hora":11400,"liga":"ZA-CHI1","mitad":false,"mitadFavorito":true,"codigoWplay":19303,"local":"CD Everton Vina Del Mar","visitante":"Universidad Catolica","cuotaLocal":2.1,"empate":3.35,"cuotaVisitante":3.2,"cantidadDeApuestas":91,"cuotaCualquiera":1.38,"ambosAnotan":1.666,"over":1.85,"cuotaFavorito":2.3,"rate":1,"stake":0,"localMitad":1.9,"visitanteMitad":2.3,"favorito":"visitante"},
	{"hora":11400,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"Coritiba PR","visitante":"Ponte Preta SP","cuotaLocal":1.7,"empate":3.45,"cuotaVisitante":5.25,"cantidadDeApuestas":115,"cuotaCualquiera":1.48,"ambosAnotan":2.1,"over":2.3,"cuotaFavorito":1.8,"rate":1,"stake":0,"localMitad":1.8,"visitanteMitad":2.9,"favorito":"local"},
	{"hora":11400,"liga":"YE-RUM1","mitad":false,"mitadFavorito":true,"codigoWplay":46019,"local":"CFR Cluj","visitante":"Unirea Slobozia","cuotaLocal":1.5,"empate":3.85,"cuotaVisitante":6.25,"cantidadDeApuestas":95,"cuotaCualquiera":1.42,"ambosAnotan":2.1,"over":2.05,"cuotaFavorito":1.727,"rate":1,"stake":0,"localMitad":1.727,"visitanteMitad":3.35,"favorito":"local"},
	{"hora":11415,"liga":"ITAC","mitad":true,"mitadFavorito":true,"codigoWplay":19417,"local":"Torino","visitante":"Cosenza","cuotaLocal":1.285,"empate":5,"cuotaVisitante":8.5,"cantidadDeApuestas":45,"cuotaCualquiera":1.285,"ambosAnotan":1.93,"over":1.571,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11430,"liga":"YE-POR1","mitad":true,"mitadFavorito":true,"codigoWplay":19211,"local":"Sporting Braga","visitante":"CF Estrela","cuotaLocal":1.4,"empate":5,"cuotaVisitante":7.5,"cantidadDeApuestas":268,"cuotaCualquiera":1.25,"ambosAnotan":1.769,"over":1.55,"cuotaFavorito":1.48,"rate":1,"stake":0,"localMitad":1.48,"visitanteMitad":2.8,"favorito":"local"},
	{"hora":11430,"liga":"YE-POR2","mitad":false,"mitadFavorito":true,"codigoWplay":19338,"local":"Uniao Leiria","visitante":"FC Vizela","cuotaLocal":2.9,"empate":3,"cuotaVisitante":2.45,"cantidadDeApuestas":79,"cuotaCualquiera":1.45,"ambosAnotan":1.75,"over":2.1,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.3,"visitanteMitad":2.1,"favorito":"visitante"},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"Racing de Cordoba","visitante":"CA Guemes","cuotaLocal":2.05,"empate":2.75,"cuotaVisitante":4,"cantidadDeApuestas":38,"cuotaCualquiera":1.65,"ambosAnotan":2.25,"over":2.875,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"San Martin de Tucuman","visitante":"Chacarita Juniors","cuotaLocal":1.727,"empate":3.2,"cuotaVisitante":4.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.571,"ambosAnotan":2.35,"over":2.65,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Club Aurora","visitante":"Jorge Wilstermann","cuotaLocal":2.05,"empate":3.25,"cuotaVisitante":3.25,"cantidadDeApuestas":42,"cuotaCualquiera":1.48,"ambosAnotan":1.85,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Real Soacha Cundinamarca","visitante":"Atletico Huila","cuotaLocal":2.5,"empate":3.4,"cuotaVisitante":2.45,"cantidadDeApuestas":33,"cuotaCualquiera":1,"ambosAnotan":1.7,"over":1.909,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11500,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Olimpia Asuncion","visitante":"Libertad Asuncion","cuotaLocal":3,"empate":3.1,"cuotaVisitante":2.3,"cantidadDeApuestas":87,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.2,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.4,"visitanteMitad":2.15,"favorito":"local"},
	{"hora":11500,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Carlos Mannucci","visitante":"Club Sportivo Cienciano","cuotaLocal":2.05,"empate":3.1,"cuotaVisitante":3.4,"cantidadDeApuestas":40,"cuotaCualquiera":1.444,"ambosAnotan":1.8,"over":2.05,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11515,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Sport Huancayo","visitante":"Universitario de Deportes","cuotaLocal":2.75,"empate":3.1,"cuotaVisitante":2.4,"cantidadDeApuestas":44,"cuotaCualquiera":1.48,"ambosAnotan":1.833,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Banfield","visitante":"Velez Sarsfield","cuotaLocal":3.1,"empate":3,"cuotaVisitante":2.5,"cantidadDeApuestas":181,"cuotaCualquiera":1.6,"ambosAnotan":2.1,"over":2.625,"cuotaFavorito":2.4,"rate":1,"stake":0,"localMitad":2.625,"visitanteMitad":2.4,"favorito":"visitante"},
	{"hora":11530,"liga":"ZF-COL","mitad":false,"mitadFavorito":false,"codigoWplay":48455,"local":"Deportivo Cali (F)","visitante":"Independiente Santa Fe (F)","cuotaLocal":1.769,"empate":3.4,"cuotaVisitante":4.2,"cantidadDeApuestas":38,"cuotaCualquiera":1.42,"ambosAnotan":1.95,"over":2.15,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11530,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Delfin","visitante":"Imbabura SC","cuotaLocal":1.769,"empate":3.6,"cuotaVisitante":4.333,"cantidadDeApuestas":114,"cuotaCualquiera":1.4,"ambosAnotan":1.833,"over":2,"cuotaFavorito":2.45,"rate":1,"stake":0,"localMitad":1.75,"visitanteMitad":2.45,"favorito":"visitante"},
	{"hora":11600,"liga":"ZA-EST2","mitad":false,"mitadFavorito":true,"codigoWplay":20075,"local":"Indy Eleven","visitante":"New Mexico United","cuotaLocal":2.2,"empate":3.4,"cuotaVisitante":2.85,"cantidadDeApuestas":38,"cuotaCualquiera":1.35,"ambosAnotan":1.6,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11630,"liga":"ZA-BRA2","mitad":true,"mitadFavorito":true,"codigoWplay":19393,"local":"CRB Maceio AL","visitante":"Novorizontino SP","cuotaLocal":2.2,"empate":2.95,"cuotaVisitante":3.6,"cantidadDeApuestas":116,"cuotaCualquiera":1.6,"ambosAnotan":2.1,"over":2.65,"cuotaFavorito":2.65,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":2.65,"favorito":"visitante"},
	{"hora":11630,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"The Strongest","visitante":"Bolivar","cuotaLocal":2.3,"empate":3.5,"cuotaVisitante":2.5,"cantidadDeApuestas":42,"cuotaCualquiera":1.3,"ambosAnotan":1.48,"over":1.615,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-BRA1","mitad":true,"mitadFavorito":true,"codigoWplay":19297,"local":"Internacional RS","visitante":"Athletico PR","cuotaLocal":1.95,"empate":3.3,"cuotaVisitante":4,"cantidadDeApuestas":249,"cuotaCualquiera":1.5,"ambosAnotan":2,"over":2.3,"cuotaFavorito":2.8,"rate":1,"stake":0,"localMitad":1.95,"visitanteMitad":2.8,"favorito":"visitante"},
	{"hora":11700,"liga":"ZA-COL2","mitad":false,"mitadFavorito":false,"codigoWplay":29812,"local":"Llaneros FC","visitante":"Atletico de Cali","cuotaLocal":1.25,"empate":5,"cuotaVisitante":11,"cantidadDeApuestas":37,"cuotaCualquiera":1.35,"ambosAnotan":2.3,"over":1.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11700,"liga":"ZA-URU2","mitad":false,"mitadFavorito":false,"codigoWplay":26834,"local":"La Luz FC","visitante":"Albion FC","cuotaLocal":2.25,"empate":2.95,"cuotaVisitante":3.2,"cantidadDeApuestas":38,"cuotaCualquiera":1.55,"ambosAnotan":2.1,"over":2.65,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11730,"liga":"ZA-PAR1","mitad":false,"mitadFavorito":true,"codigoWplay":19359,"local":"Cerro Porteño","visitante":"Sol de America","cuotaLocal":1.333,"empate":4.75,"cuotaVisitante":8,"cantidadDeApuestas":89,"cuotaCualquiera":1.3,"ambosAnotan":1.95,"over":1.7,"cuotaFavorito":1.533,"rate":1,"stake":0,"localMitad":1.533,"visitanteMitad":3.2,"favorito":"local"},
	{"hora":11745,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Once Caldas","visitante":"Atletico Bucaramanga","cuotaLocal":2.15,"empate":3.1,"cuotaVisitante":3.95,"cantidadDeApuestas":159,"cuotaCualquiera":1.666,"ambosAnotan":2.45,"over":3.1,"cuotaFavorito":2.35,"rate":1,"stake":0,"localMitad":2.35,"visitanteMitad":3.2,"favorito":"local"},
	{"hora":11800,"liga":"ZA-ARG1","mitad":true,"mitadFavorito":true,"codigoWplay":19296,"local":"Estudiantes de La Plata","visitante":"CA Independiente","cuotaLocal":2,"empate":3,"cuotaVisitante":4.333,"cantidadDeApuestas":182,"cuotaCualquiera":1.571,"ambosAnotan":2.1,"over":2.55,"cuotaFavorito":2.1,"rate":1,"stake":0,"localMitad":2.1,"visitanteMitad":3,"favorito":"local"},
	{"hora":11800,"liga":"ZA-ARG2","mitad":false,"mitadFavorito":false,"codigoWplay":19342,"local":"CA All Boys","visitante":"Ferro Carril Oeste","cuotaLocal":2.8,"empate":2.7,"cuotaVisitante":2.75,"cantidadDeApuestas":38,"cuotaCualquiera":1.65,"ambosAnotan":2.15,"over":2.8,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11800,"liga":"ZA-ECU1","mitad":true,"mitadFavorito":true,"codigoWplay":19373,"local":"Mushuc Runa","visitante":"Club Sport Emelec","cuotaLocal":2.4,"empate":3.35,"cuotaVisitante":2.85,"cantidadDeApuestas":105,"cuotaCualquiera":1.4,"ambosAnotan":1.666,"over":1.909,"cuotaFavorito":2.05,"rate":1,"stake":0,"localMitad":1.93,"visitanteMitad":2.05,"favorito":"visitante"},
	{"hora":11800,"liga":"ZA-MEX2","mitad":true,"mitadFavorito":true,"codigoWplay":61826,"local":"Atlante","visitante":"Atletico Morelia","cuotaLocal":1.444,"empate":4.333,"cuotaVisitante":7,"cantidadDeApuestas":91,"cuotaCualquiera":1.4,"ambosAnotan":2.15,"over":2,"cuotaFavorito":1.6,"rate":1,"stake":0,"localMitad":1.6,"visitanteMitad":3.1,"favorito":"local"},
	{"hora":11800,"liga":"ZA-PER1","mitad":false,"mitadFavorito":false,"codigoWplay":19340,"local":"Cusco FC","visitante":"Universidad Cesar Vallejo","cuotaLocal":1.5,"empate":3.85,"cuotaVisitante":5.5,"cantidadDeApuestas":44,"cuotaCualquiera":1.363,"ambosAnotan":1.85,"over":1.85,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":11830,"liga":"ZA-BOL1","mitad":false,"mitadFavorito":false,"codigoWplay":19786,"local":"Oriente Petrolero","visitante":"Blooming","cuotaLocal":2.3,"empate":3.4,"cuotaVisitante":2.7,"cantidadDeApuestas":42,"cuotaCualquiera":1.35,"ambosAnotan":1.6,"over":1.769,"cuotaFavorito":1,"rate":1,"stake":0,"localMitad":1,"visitanteMitad":1,"favorito":""},
	{"hora":12000,"liga":"ZA-COL1","mitad":true,"mitadFavorito":true,"codigoWplay":19311,"local":"Alianza FC","visitante":"Envigado FC","cuotaLocal":1.8,"empate":3.55,"cuotaVisitante":5,"cantidadDeApuestas":163,"cuotaCualquiera":1.48,"ambosAnotan":2,"over":2.2,"cuotaFavorito":2.9,"rate":1,"stake":0,"localMitad":1.85,"visitanteMitad":2.9,"favorito":"visitante"},
]