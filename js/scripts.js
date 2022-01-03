var p = document.querySelector("p");

// var regex = new RegExp("\\w+@\\w+\\.\\w{2,4}", "ig");
var regex = /\w+@(\w+\.\w{2,4})/;

var search = p.textContent.match(regex);

//var search = regex.exec(p.textContent);

//------------- oba zapisy są równoznaczne
//var search = p.textContent.match(regex);
// var regex = /\w+@(\w+\.\w{2,4})/g; - jeżeli posłużymy się regex z flagą g otrzymamy ['anna@kowalska.com', 'tomasz@nowak.pl']
// var regex = /\w+@(\w+\.\w{2,4})/; - jeżeli posłużymy się regex bez flagi g otrzymamy ['anna@kowalska.com', 'kowalska.com', index: 28 ....]

//var search = regex.exec(p.textContent);
//var regex = /\w+@(\w+\.\w{2,4})/g; - nie zależnie czy posłużymy się regex z flagą g czy bez otrzymamy ['anna@kowalska.com', 'kowalska.com', index: 28 ....]