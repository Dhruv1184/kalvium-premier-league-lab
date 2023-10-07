//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  manager= [managerName,managerAge,currentTeam,trophiesWon];
  return manager;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if (formation.length==0){
    return null;
  }
  var letplay ={
    defender:formation[0],
    midfield:formation[1],
    forward:formation[2]
  }
  return letplay;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterbydebut(year){
  var data= players.filter(players => players.debut == year);
  return data;
}
//Progression 4 - Filter players that play at the position _______
function fiterbyposition(position){
  var data = players.filter(players => players.position == position);
  return data;
}
//Progression 5 - Filter players that have won ______ award
function filterbyaward(awardname){
  let arr = [];
  for (let i = 0;i<players.length;i++){
    for ( let k = 0; k<players[i].award.length;k++){
      if (players[i].awards[k].name === awardname){
        arr.push(players[i]);
      }
    }
    return arr;
  }
 
}
// filterbyaward();

//Progression 6 - Filter players that won ______ award ____ times
function filterbyawardxtimes(awardname,nooftimes){
  let array=[];
  let count = 0;
  let j;
  for (let i =0;i<players.length;i++){
    for (j = 0;j<players[i].award.length; j++){
      if (players[i].award[j].name == awardname){
        count++
      }
    }
    if (count == nooftimes){
      array.push(players[i]);
    }
    count = 0
  }
  return array;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterbyawardxcountry(awardname,country){
  var awarddata = filterbyaward(awardname);
  var data = awarddata.filter(players => players.country == country);
  return data;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterbynoofawardxteamxage(noofawards, team, age){
var data = players.filter(players =>(players.age<age 
  && players.team == team 
  && playeraward.length >= noofawards))
  return data;
}
//Progression 9 - Sort players in descending order of their age
function sortbyage(){
  for (let i = 0; i < players.length; i++){
    for (let j = i+1; j<players.length; j++ ){
      if (players[i].age < player[j].age){
        let tempage = players[i];
        players[i] = players[j];
        players[j] = tempage;
      }
    }
  }
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterbtteamxsortbynoofaward(team){
  let count = 0;
  let sortedplayers = [];
  for (let i =0; i<players.length; i++){
    if (players[i].team == team){
      sortedplayers[count++] = player[i];
    }
  }
  for (let i = 0; i<sortedplayers.length;i++){
    for (let j = i+1; j<sortedplayers.length;j++){
      if (sortedplayers[i].awards.length < sortedplayers[j].awards.length){
        let temp = sortedplayers[i];
        sortedplayers[i] = sortedplayers[j];
        sortedplayers[j] = temp;
      }
    }
  }
  return sortedplayers;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a,b){
  let value = 0;
  if (a.name > b.name){
    value = 1;
  }else if(a.name < b.name){
    value = -1;
  }else{
    value = 0;
  }
}
function sortbynamexawardxtime(awardname,nooftimes,country){
  var dataone = filterbyawardxtimes(awardname,nooftimes);
  var datatwo = dataone.filter(player=>player.country == country);
  return datatwo.sort(compare);
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortbynamexolderthan(age){
  var data = players.filter(player => player.age > age);
  return data;
}