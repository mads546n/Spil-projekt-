# 3.g programmering og Kommunikation/IT spilprojekt 
Gruppe: 
 - Mads Edvardsen.
 - Ian Reenberg.
 - Asger Dokkedal.
 
 Brainstorm: 
  - Virtual novel.
  - 2D side-scroller. 
  - 2D platformer.
  - Snake-game. 
  - Dodger. 

Ny projektbeskrivelse:

Udvalgt ide = Snake-platformer.

Vi vil gerne lave et Snake-game som har platformer-elementer i formen af forhindringer på banen. Snake-Platformer skal fungere som det typiske Snake-spil, som kan findes på Google osv. - hvor man starter ud som en kort "slange", og målet med spillet er at indsamle så mange "frugter" eller "powerups" som muligt. Hvert "powerup" gør slangen længere, og spillet handler om at blive så lang som muligt. Hvis man rører væggene, en forhindring eller sig selv, så afsluttes spillet og genstartes. Før spillet genstarter, får man vist antallet af powerups, som man har indsamlet, så man har en highscore at slå. Forhindringerne på banen består af små vægge, som er tilfældigt placeret, hver gang man spiller spillet. "Powerups" placeres tilfældigt, hver gang man spiller, og når man samler et "powerup" op, så spawner der et nyt. Der er aldrig mere end et "powerup" af gangen. 

Spillet skal designes vha. Javascript, P5, HTML og muligvis CSS. 

Alle medlemmer i gruppen skal gerne stå for en 1/3 af arbejdet, der er krævet for at færdiggøre spillet.
Vi kommer til at føre fælles logbog under hele processen og have små versioner af spillet klar til aflevering til de små milestones. 

# LOGBOG #

 - 12-11-2020:
I dag er programmeringsfasen gået igang. Vi er længere bagud, end vi havde forventet, da vi valgte at genoverveje vores emne og endte med at skifte emne. Vi har dog arbejdet hårdt i dag med både programmering, idegénerering og research. Vores basiske Snake-game er snart færdiggjort, men med den tid er den svære fase af programmeringen igangsat, da vi ønsker at lave power-ups og forhindringer i spillet. Arbejdsindsatsen og gruppekommunikationen har været yderst effektiv i dag, og vi er alle optimistiske med opgaven, og at vi gerne skal have noget at aflevere til første milestone. 

 - 17-11-2020:
I dag har vi oplevet problemer med GitHub, og der har derfor ikke været nogle commits, men kodningsprocessen er fortsat. Fremskridt vil blive commited næste gang, hvor vi får mulighed for at arbejde med projektet. Selvom vi har haft denne udfordring, har vi stadig fortsat arbejdsindsatsen, men pga. udfordringen har vi desværre ikke nået at lave lige så meget arbejde, som vi havde håbet på.  

 - 18-11-2020:
I dag er programmeringsfasen fortsat. Vi er stadig langt fra færdige med det endelige produkt, men de grundlæggende elementer i Snake er ved at være færdiggjorte. Næste gang vil vi gerne have tilføjet en death-screen med en genstart-knap og evt. et scoreboard. Vi vil også gerne forbedre grænserne, som bestemmer, hvornår slangen er død. Der har været problemer for bestemte medlemmer af gruppen med at få adgang til vores Git-hub-repository, men disse problemer skulle gerne være løst. Der har ikke været meget tid at arbejde i i dette modul, så vores fremskridt er meget begrænset. Vi er optimistiske om, at vi får endnu mere lavet næste gang, da der meget gerne ikke skulle være nogle problemer, som spænder ben.   

 - 16-12-2020:
Programmeringsfasen er midlertidigt stoppet, eftersom vi har arbejdet på sprites og lign. grafiske ideer til vores projekt. Vi har udarbejdet en sprite til slangen og et logo, i form af en gif, til vores spil. Vi har også brainstormet ideer til, hvordan vi integrerer vores ideer i vores spil, f.eks. hvordan vi laver powerups og obstacles. Vi udarbejder også nuværende sprites til vores powerups, obstacles og banen. 

 - 08-01-2021:
 Vi har ikke skrevet logbog visse dage i forløbet grundet SOP og andre opgaver, samt at vi har haft gang i at udvikle sprites og lave research, om hvordan vi skal udvide spillet. I dag har vi gennemgået koden, så alle er indforstået med, hvordan koden fungerer, også har vi sat fælles mål og opgaver, så alle kan lave noget uden at skulle vente på andre medlemmer af gruppen til at færdiggøre deres gøremål. Vi har fundet en løsning på et problem i vores kode, men har har ikke nået at integrere løsningen i koden. Det må vi få gjort næste gang. 
 
 - 13-01-2021: 
Vi har fortsat programmeringsfasen. Vi har opdelt opgaverne, så vi kan arbejde hurtigere, og alle i gruppen kan få lavet noget arbejde. Vi har tilføjet en meget primitiv death-screen, som senere skal udvikle sig grafisk. Vi har også iværksat power-up-programmeringsfasen af vores spil, men denne er dog langt fra færdiggjort endnu.

 - 20-01-2021:
Programmeringsfasen fortsætter, og vi har hver især igangsat forskellige gøremål. Asger Dokkedal er gået igang med at arbejde på at opstille murer og forhindringer på spil-banen. Ian er gået igang med at lave powerups, poisons og effekterne, som spilleren opnår, hvis man optager poisons eller powerups. Mads fortsætter med at udbygge en main-menu og arbejde på nogle grafiske optimiseringer og undersøger, hvordan vi kan integrere vores sprites ind i spillet, og hvordan andre elementer som f.eks. murerne skal se ud, når spillet bliver færdiggjort.

 - 27-01-2021: 
Programmeringsfasen fortsætter, og vi har hver især fortsat med at udvikle vores forskellige aspekter af spillet. Poisons-projektet er nu fungerende, men der mangler stadig nogle små tilpasninger, og powerups mangler stadig at integreres. Selve essensen eller skelettet af vores "consumeables" fungerer, men vi mangler stadig at integrere grafiske  effekter. Obstacle-projektet er skredt frem, men stadig langt fra færdigt. 

 - 29-01-2021:
Programmeringsfasen fortsætter igen. Vi er igang med at designe powerups, og dette burde ikke være sønderligt besværgeligt, eftersom powerups skal programmeres på samme måde som poisons. Det er lykkedes at opstille obstacles i form af mure og vægge, men de har stadig ikke en direkte affekt på spillet, hvis spilleren interagerer med dem.

 - 03-02-2021:
Programmeringsfasen fortsætter endnu en gang. Vi har videreudviklet main-menuen, men den er stadig meget primitiv. Vi ønsker at opstille et CSS-script og tilpasse nogle elementer både i script.js og index.html, så vi kan få customiseret vores main-menu yderligere, så den ser pænere ud, og så vi gerne skal kunne display en highscore og et evt. leaderboard. Vi skal også benytte CSS-scriptet til at integrere vores sprites ind i spillet. Udover det har vi lavet nogle små fremskridt med hver vores gøremål. 

 - 05-02-2021:
Programmeringsfasen fortsætter endnu en gang. Vi har igen videreudviklet main-menuen og integreret en death-screen. Vi har også integreret og tilpasset et såkaldt "mode"-system, som beskriver, hvilket stadie spillet er i. Spillet kan enten ikke være i gang, være igang eller være stoppet resulteret af, at spilleren har tabt spillet. Både main-menu og death-screen er stadig MEGET primitive, og de kræver meget optimisation endnu for at se godt ud, men de fungerer nogenlunde, som de skal. Vi har også lavet en genstart-knap, som dog ikke er tilpasset canvas endnu. Vi har også videreudviklet obstacle-systemet, og der er sket meget fremskridt. 

 - 10-02-2021:
Programmeringsfasen fortsætter endnu en gang. Vi har videreudviklet death-screen og arbejdet på at skjule mad-elementet, når spillet ikke er igang, men vi har haft meget svært ved dette. Vi har også skrevet en smule på rapporten og brainstormet over en flowchart, som beskriver, hvordan vores kode hænger sammen og fungerer. Obstacle-delen af programmeringsfasen er ved at være færdiggjort, men poison- og hovedspil-delene mangler stadig en smule, men vi er optimistiske om, at vi gerne skulle kunne nå disse opgaver inden deadline. Næste gang vil vi gerne arbejde videre med powerup-systemet, eftersom det stadig ikke er fuldt funktionelt. Vi vil også gerne løse problemet med, at maden stadig befinder sig på skærmen, når spillet enten er i hovedmenu-mode eller død-mode. Vi vil også gerne løse nogle små bugs i spillet, som f.eks. at slangen ikke dør, når den rammer kanten af canvas, hvis den ikke har samlet noget mad op, og at slangen kan gå direkte i modsatte retning.  

 - 12-02-2021:
Programmeringsfasen er ved at være færdiggjort, eftersom vi har færdiggjort to ud af de tre forskellige aspekter af spillet. Hovedspillet samt main-menu og death-screen er færdige, og vi har lavet nogle små bugfixes og rettet småfejl i koden. Menuerne har dog ikke fået et mere optimiseret udseende, som vi ellers oprindeligt havde håbet, da vi er ved at nå projektets ende. Menuerne er dog fuldt funktionelle, som er det vigtigste. Obstacle-elementet er også færdiggjort, og branchen skal blot merges med main-branchen. Poison- og powerupsystemet er også snart færdiggjort, der skal dog ordnes nogle fejl og bugs i powerup-systemet, som forhåbentligvis bliver rettet henover weekenden. Når alle branches er færdiggjorte, så merges alle branches sammen og rettes efter evt. fejl. Det sidste mål på dagsordenen er så at integrere vores sprites ind i spillet. 

 - 21-02-2021:
Programmeringsfasen er helt færdiggjort, og spillet er færdiggjort. Vi har sammensat hele vores spil og implementeret alle branches ind i main-branchen. Det vil sige, at main-branchen nu indeholder det færdiggjorte spil. Dette er dermed også det sidste indlæg i logbogen, da det blot er rapporten, som skal skrives færdig nu. Vi valgte ikke at merge vores branches sammen, eftersom det ville være problematisk, da de to branches: powerups og obstacles er skrevet ud fra en tidligere version af main-branchen. Dette vil sige, at de ikke er tilpassede efter de seneste ændringer i main. Vi implementerede derfor koden separat og omskrev den hvis nødvendigt. Dette har ikke ledt til noget problemer. Vi har desuden også besluttet ikke at implementere vores sprites, da vi allerede er gået over tid med afleveringen.  
Gruppen er tilfredse med det færdige produkt, og vi er alle tilfredse med vores indsats. Forløbet har været langt og problematisk til tider, men generelt har forløbet været underholdende spændende og en rar måde at arbejde på. Det endelige produkt afspejler vores mål, som vi havde sat os selv i starten af forløbet. 
________________________________________________________________________________________________________________________________________________________________________________

Gammel projektbeskrivelse:

Udvalgt ide = Virtual Novel.

Vi vil gerne lave en virtuel novelle som har en tilhørende storyline, som potentielt kan ændre sig ved at foretage valg under udspilningen af spillet. Spillet skal indeholde en masse forskellige karakterer, scener samt en masse dialog imellem karakterene. Historien skal kunne udspille sig på forskellige måder vha. valgene, man skal træffe i spillet, og spillet skal have forskellige slutninger afhængig af disse valg. Nogle negative slutninger og nogle positive slutninger. Man spiller selv en karakter i spillet, som spiller en rolle. Da det kan være udfordrende at skrive en kode og nok historie til, at spillet kan udvikle sig på mange forskellige måder, så vil vi kun lave få spil-ændrende valg og flere valg, som ikke nødvendigvis ændrer handlingen lige så drastisk. Vi tænker i øjeblikket, at spillet skal have 2 spil- og handlings-ændrende valg, så der i alt er 4 mulige resultater og slutninger. 

Spillet skal tage form som et uskyldigt, positivt og glad spil, men spillet skal gennemgå en dramatisk ændring ind til et horror og gyser spil. Spillet skal ikke nødvendigvis indeholde jump-scares, men rettere en skræmmende atmosfære. 

Spillet skal opstilles som en baggrund, som ændrer sig afhængigt af, hvor man befinder sig i spillet. Så skal karaktererne stå foran baggrunden som et ekstra lag, hvor karaktererne kan forlade og træde ind på skærmen. Der skal også være en tekst-boks i bunden af skærmen, som altid er tilstedeværende, som skal indeholde alt dialogen og hovedpersonens tanker. Spilkaraktererne skal også have forskellige tilstande. Nogle gange er de glade, nogle gange er de neutrale, nogle gange vrede og skræmte eller triste. 
Spillet skal fungere ved, at når man trykker hvor som helst på skærmen, så fortsætter spillet og skriver ny dialog eller ændrer karakteren eller baggrunden. Så man gennemgår spillet ved at trykke på skærmen. 

Vi vil selv designe karakterer vha. grafisk design i programmer som f.eks. Photoshop. Vi vil også selv producere musik, lyd-effekter, baggrunde og historien. Vi vil nogle gange hente hjælp udefra hvis nødvendigt, da alle disse opgaver kan være tidskrævende. Spillet skal gerne være 30-60 minutter langt hvis ikke længere. Vi vil altid dokumentere, hvis der er hentet hjælp udefra. 

Spillet skal gerne kunne designes vha. HTML, Javascript, P5 og evt. Unity. 

Projektplan: 
Alle medlemmer i gruppen skal gerne stå for en 1/3 af arbejdet, der er krævet for at færdiggøre spillet. Vi har alle i gruppen forskellige styrker og svagheder, så vi har fordelt visse opgaver i gruppen: 
 - Mads står for musik med udefrakommende hjælp.
 - Asger står for karakter- og baggrunds-design med udefrakommende hjælp. 
 - Ian står for at hjælpe andre medlemmer i gruppen, hvis de har behov for ekstra hjælp og desuden at koordinere og planlægge, så vi overholder vores tidsplan. 
Kodningsprocessen og historien laves fælles af alle medlemmer af gruppen. 

Vi kommer til at føre fælles logbog under hele processen og have små versioner af spillet klar til aflevering til de små milestones. 
