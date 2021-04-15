var sol1 = Math.floor((Math.random() * 6));
var sol2 = Math.floor((Math.random() * 6));
console.log(sol1 , sol2);

let pointA = document.getElementById('claca');
let pointB = document.getElementById('clacb');
let countera = 1;
let counterb = 1;
var tab = [+50, +100];

function devinScr() {
  let joer1 = document.getElementById('nom1').value;
  let joer2 = document.getElementById('nom2').value;
  let NmbrEssA = document.getElementById('cloca');
  NmbrEssA.value = countera;
  countera ++;
  let vaa = document.getElementById('valaa').value;
  let vba = document.getElementById('valba').value;
  var afcha = document.getElementById('aficha');
  let NmbrEssB = document.getElementById('clocb');
  NmbrEssB.value = counterb;
  counterb ++;
  let vab = document.getElementById('valab').value;
  let vbb = document.getElementById('valbb').value;
  var afchb = document.getElementById('afichb');

  if ((vaa == sol1 && vba == sol2) && (vab == sol1 && vbb == sol2)) {
    afcha.innerHTML = "Bravo " + joer1 + " ! Score trouvé (" + sol1 + " - " + sol2 +"). Vous êtes à égalité.";
    afchb.innerHTML = "Bravo " + joer2 + " ! Score trouvé (" + sol1 + " - " + sol2 +"). Vous êtes à égalité.";
  } else if (((vaa == sol1 && vba != sol2) || (vaa != sol1 && vba == sol2)) && (vab == sol1 && vbb == sol2)) {
    afcha.innerHTML = "Ayyayyay " + joer1 + "! Tu as 50% du score, mais" + joer2 + " a trouvé le score." + joer2 + " gagne tes points.";
    afchb.innerHTML = "Bravo " + joer2 +" ! Score trouvé (" + sol1 + " - " + sol2 +"). Tu gagnes les points de " + joer1 +".";
    pointA.value = 0;
    pointB.value = 200;
  } else if ((vaa == sol1 && vba == sol2) && ((vab == sol1 && vbb != sol2) || (vab != sol1 && vbb == sol2))) {
    afcha.innerHTML = "Bravo " + joer1 + " ! Score trouvé (" + sol1 + " - " + sol2 +"). Tu gagnes les points de " + joer2 + ".";
    afchb.innerHTML = "Ayyayyay " + joer2 + " ! Tu as 50% du score, mais " + joer1 + " a trouvé le score." + joer1 +  " gagnes tes points.";
    pointA.value = 200;
    pointB.value = 0;
  } else if ((((vaa == sol1 && vba != sol2) || (vaa != sol1 && vba == sol2)) && ((vab != sol1 && vbb == sol2) || (vab == sol1 && vbb != sol2)))) {
    afcha.innerHTML = "Pas mal " + joer1 + ", tu as 50% de la réponse, tout comme " + joer2 + ". Vous gardez vos points.";
    afchb.innerHTML = "Pas mal " + joer2 + ", tu as 50% de la réponse, tout comme " + joer1 + ". Vous gardez vos points.";
  } else if ((vaa != sol1 && vba != sol2) && ((vab != sol1 && vbb == sol2) || (vab == sol1 && vbb != sol2))) {
    afcha.innerHTML = "Dommage " + joer1 + " ! " + joer2 + " a 50% de la réponse." + joer2 + " gagne 50 de tes points.";
    afchb.innerHTML = "Pas mal " + joer2 + ", tu as 50% de la réponse. Tu gagnes 50 points.";
    pointA.value = parseFloat(pointA.value) - parseFloat(tab[0]);
    pointB.value = parseFloat(pointB.value) + parseFloat(tab[0]);
  } else if (((vaa != sol1 && vba == sol2) || (vaa == sol1 && vba != sol2)) && (vab != sol1 && vbb != sol2)) {
    afcha.innerHTML = "Pas mal " + joer1 + ", tu as 50% de la réponse. Tu gagnes 50 points.";
    afchb.innerHTML = "Dommage " + joer2 + " ! " + joer1 + " a 50% de la réponse. " + joer1 + " gagne 50 de tes points.";
    pointA.value = parseFloat(pointA.value) + parseFloat(tab[0]);
    pointB.value = parseFloat(pointB.value) - parseFloat(tab[0]);
  } else if ((vaa != sol1 && vba != sol2) && (vab != sol1 && vbb != sol2)) {
    afcha.innerHTML = "Noo " + joer1 + " ! Score pas trouvé, vous gardez toujours vos points.";
    afchb.innerHTML = "Noo " + joer2 + " ! Score pas trouvé, vous gardez toujours vos points.";
  }
  // else if (pointA.value = 200) {
  //   afcha.innerHTML = "Bravo, " + joer1 + " a gagné le jeu !";
  //   afchb.innerHTML = "Ayyayyay, " + joer2 + " a Perdu le jeu !";
  // } else if (pointB.value = 200) {
  //   afcha.innerHTML = "Ayyayyay, " + joer1 + " a Perdu le jeu !";
  //   afchb.innerHTML = "Bravo, " + joer2 + " a gagné le jeu !";
  // }
}





// function devinScrA() {
// let NmbrEssA = document.getElementById('cloca');
// NmbrEssA.value = countera;
//   countera ++;
// let vaa = document.getElementById('valaa').value;
// let vba = document.getElementById('valba').value;
// var afcha = document.getElementById('aficha');
//
//   if (vaa == sol1 && vba == sol2) {
//     afcha.innerHTML = "Bravo ! Score trouvé (" + sol1 + " , " + sol2 +") Tu as gagner les 100 point.";
//     pointA.value = parseFloat(pointA.value) + parseFloat(tab[2]);
//   } else if ((vaa != sol1 && vba == sol2) || (vaa == sol1 && vba != sol2)) {
//     afcha.innerHTML = "Pas mal, Tu as gagner 50 points.";
//     pointA.value = parseFloat(pointA.value) + parseFloat(tab[1]);
//   } else if (vaa != sol1 && vba != sol2) {
//     afcha.innerHTML = "Raté ! Pas de point pour vous.";
//     pointA.value = parseFloat(pointA.value) + parseFloat(tab[0]);
//   }
//   }
//
//   function devinScrB() {
//   let NmbrEssA = document.getElementById('clocb');
//   NmbrEssA.value = countera;
//     countera ++;
//   let vaa = document.getElementById('valab').value;
//   let vba = document.getElementById('valbb').value;
//   var afcha = document.getElementById('afichb');
//
//     if (vaa == sol1 && vba == sol2) {
//       afcha.innerHTML = "Bravo ! Score trouvé (" + sol1 + " , " + sol2 +") Tu as gagner les 100 point.";
//       pointB.value = parseFloat(pointB.value) + parseFloat(tab[2]);
//     } else if ((vaa != sol1 && vba == sol2) || (vaa == sol1 && vba != sol2)) {
//       afcha.innerHTML = "Pas mal, Tu as gagner 50 points.";
//       pointB.value = parseFloat(pointB.value) + parseFloat(tab[1]);
//     } else if (vaa != sol1 && vba != sol2) {
//       afcha.innerHTML = "Raté ! Pas de point pour vous.";
//       pointB.value = parseFloat(pointB.value) + parseFloat(tab[0]);
//     }
//     }







// var sol = Math.floor((Math.random() * 100) + 1);
// console.log(sol);

// let counter = 1;

// function devinJeu() {
//   var NmbrEss = document.getElementById("cloc");
//   NmbrEss.value = counter;
//   counter ++;
//   var NmbrC = counter-1;
//
//   var afch = document.getElementById('afich');
//   var nmbr = document.getElementById('valeur').value;
//
//     if (nmbr != sol && nmbr > sol) {
//       afch.innerHTML = nmbr + " est trop grand";
//       afch.style.background = "lightskyblue";
//     } else if (nmbr != "" && nmbr < sol) {
//       afch.innerHTML = nmbr + " est trop petit";
//       afch.style.background = "lightgray";
//     } else if (nmbr == sol && counter <= 6) {
//       afch.innerHTML = "Bravo ! La solution était " + sol + " vous l'avez trouvé au " + NmbrC + " essaie.";
//       afch.style.background = "lightgreen";
//       document.getElementById('cloc').style.background = "lightgreen";
//     } else if (nmbr == "") {
//       afch.innerHTML = "Veuiler saisir un nombre.";
//       afch.style.background = "salmon";
//     } if (nmbr != sol && counter >= 6){
//       afch.innerHTML = "Perdu ! Tu as dépasser le nombre d'essaie autoriser, la soutio étais " + sol + "\n" + "Veuiller rafrichir la page svp. Merci";
//       afch.style.background = "salmon";
//     } else if (nmbr != sol && counter >= 5) {
//       document.getElementById('essaie').textContent = "Attention vous êtes au dernier essaie:"
//       document.getElementById('cloc').style.background = "salmon";
//     }
//   }
