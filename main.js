const mots = [
  'Chat', 'chien', 'oiseau', 'maison', 'arbre', 'voiture', 'vélo', 'ordinateur', 'livre', 'plante',
  'fleur', 'montagne', 'rivière', 'mer', 'soleil', 'lune', 'étoile', 'planète', 'galaxie', 'univers',
  'pomme', 'banane', 'orange', 'fraise', 'raisin', 'kiwi', 'ananas', 'poisson', 'poulet', 'bœuf',
  'salade', 'tomate', 'poivron', 'aubergine', 'pomme de terre', 'frite', 'hamburger', 'pizza', 'pâtes',
  'gâteau', 'chocolat', 'bonbon', 'glace', 'café', 'thé', 'eau', 'jus', 'bière', 'vin',
  'football', 'basketball', 'tennis', 'golf', 'natation', 'ski', 'cyclisme', 'escalade', 'surf',
  'course','musique', 'film', 'livre', 'théâtre', 'peinture', 'danse', 'photographie', 'sculpture',
  'architecture', 'poésie','école', 'université', 'étudiant', 'professeur', 'classe', 'mathématiques',
  'science', 'histoire', 'géographie', 'français','amour', 'amitié', 'famille', 'bonheur', 
  'tristesse', 'peur', 'colère', 'joie', 'espoir', 'confiance','étoile', 'planète', 'galaxie', 
  'cosmos', 'astronomie', 'astrophysique', 'constellation', 'nébuleuse', 'comète', 'éclipse',
  'ordinateur', 'programmation', 'internet', 'technologie', 'smartphone', 'réseau', 'données', 
  'sécurité', 'logiciel', 'matériel'
];

const input = document.querySelector('input');
input.addEventListener('input', (e)=> {
  // console.log(e.data);
  //console.log(e.target.value); 
  // console.log(input.value); 
  const results = search(e.target.value, mots);
  console.log(results);
  let liste = "";
  for (let i = 0; i < results.length; i++) {
    liste += "<li>" + results[i] + "</li>";
  }
  div.innerHTML = liste ; 
})

const div = document.querySelector('#suggest');

const search = (str, wordList)=>{
  /* wordList = wordList.map((it)=>{
    return it.toLowerCase();
  }); */
  const results = [];
  if (str.length === 0) {
    return results
  }
  for (let i = 0; i < wordList.length; i++) {
    const item = wordList[i];
    if (item.toLowerCase().startsWith(str.toLowerCase()) ) {
      results.push(item);
    }
    if (item.toUpperCase().startsWith(str.toUpperCase)) {
      results.push(item);
    }
  }
  return results;
}