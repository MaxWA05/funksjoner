//oppgave 1
//En funkjson er så at man kan skrive en spesefik kode eller flere koder en gang og kalle på den flere ganger.
//Dette gjør så du ikke trenger å skrive samme kode unødvendig mange ganger.


//oppgave 2
//A
function helloWorld(){
    console.log("Hello World!");
}

//B
//Ved å skrive den første linjen i eksempelet over har jeg laget og navngitt funksjonen så jeg kan kalle på den senere.
// "function" sier at dette er en funkjson.
// Der jeg har skrevet "helloWorld" er navnet på funksjonen som gjør at jeg kan kalle på den senere.
//Det jeg skriver inni scopet er selve funksjonen altså det jeg kaller på senere.
// "console.log();" betyr at det som er skrevet i parenteset bare dukker opp i konsollen på nettsiden så den er ikke synlig for noen andre.


//C
//For kalle på funksjonen må du skrive navnet på funksjonen og avslutte med semikolon.
helloWorld();


//oppgave 3
//Parameter er det du skriver mellom parantesene etter deklareringen av funksjonen.
//Parameter kan bli brukt sammen med noe som heter argument.
//Argument skriver du mellom parantesene når du kaller på koden.
//Sammenhengen mellom disse er at argumentet er på en måte en verdi du kan bytte på som du vil.


//oppgave 4
function oppg4(parameter){
    console.log(parameter);
}

oppg4("tøff");
oppg4("dårlig");



//oppgave 5
function oppg5(param1, param2){
    console.log("Jeg fikk to parametere " + param1 + " og " + param2);
}

oppg5("parameter 1", "parameter 2.")


//oppgave 6
//Return gir tilbake en verdi fra funksjonen etter funksjonen er kjørt.
//Det kan f.eks være et regnestykke og return gir tilbake svaret.


//oppgave 7 
function adder(a, b){
    let resultat = a + b;
    return resultat;
}

let returnValue = adder(5,5);
console.log(returnValue);




