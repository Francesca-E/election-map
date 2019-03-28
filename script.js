
// creating an object within function
var createPolitician= function(name, votes, rgbColor){
var politician={};
politician.name= name;
politician.electionResults=null;
politician.totalVotes=votes;
politician.partyColor=rgbColor;
politician.announceVotes=function(){
  console.log(name + " has " + votes+ " votes.");};
politician.announceVotes();
console.log(politician);
return politician; };



var james=createPolitician("James",110, [132, 17, 11]);
var michael=createPolitician("Michael",60, [245, 141, 136]);

james.electionResults=[5, 1,	7,	2,	33,	6,	4,	2,	1,	14,	8,	3,	1,	11,	11,	0,	5,	3,	3,	3,	7,	4,	8,	9,	3,	7,	2,	2,	4,	2,	8,	3,	15,	15,	2,	12,	0,	4,	13,	1,	3,	2,	8,	21,	3,	2,	11,	1,	3,	7,	2];
michael.electionResults	=[4,	2,	4,	4,	22,	3,	3,	1,	2,	15,	8,	1,	3,	9,	0,	6,	1,	5,	5,	1,	3,	7,	8,	1,	3,	3,	1,	3,	2,	2,	6,	2,	14,	0,	1,	6,	7,	3,	7,	3,	6,	1,	3,	17,	3,	1,	2,	11,	2,	3,	1];



// var setStateResults=function(state){
//
//   theStates[state].winner = null;
//   if (james.electionResults[state] > michael.electionResults[state])
//   {
//   theStates[state].winner =james;
//   }
//   else if (james.electionResults[state] < michael.electionResults[state])
//   {
//   theStates[state].winner =michael;
//   }
//  else if (james.electionResults[state] == michael.electionResults[state])
//  {
//   theStates[state].winner =draw;
// }
//  var stateWinner=theStates[state].winner;
//  if (stateWinner !== null|| stateWinner !== "draw"){
//  theStates[state].rgbColor=stateWinner.partyColor;
//  }else {theStates[state].rgbColor = [11,32,57];}
// setStateRes(state);
//   };

// QUESTION FOR INSTRUCTOR so even though color has not been set as a property of
// StateWinner,(its set as a property of the politician,
// we can still use it in this function as the stateWinner will be a politician)

//setStateResults();


james.totalVotes=function()
{
  this.totalVotes=0;
  for( i=0; i<this.electionResults.length; i++)

  {this.totalVotes=this.totalVotes +this.electionResults[i];}
};


michael.totalVotes=function()
  {
    this.totalVotes=0;
  for(i=0; i<this.electionResults.length; i++)
  {
      this.totalVotes=this.totalVotes+this.electionResults[i];
  }
};


james.totalVotes();
console.log(james.totalVotes);
michael.totalVotes();
console.log(michael.totalVotes);


var totalWinner=function(){
if (james.totalVotes>michael.totalVotes)
  {
  totalWinner="james";
  }
  else if (james.totalVotes<michael.totalVotes)
  {
  totalWinner="michael";
  }else{
    totalWinner=null;
  }
  console.log(totalWinner);
}

totalWinner();
(console.log("AND THE WINNER IS..." + totalWinner + "!!!"));

var countryResults = document.getElementById('countryResults');
var row = countryResults.children[0].children[0];

row.children[0].innerText=james.name;
row.children[1].innerText=james.totalVotes;
row.children[2].innerText=michael.name;
row.children[3].innerText=michael.totalVotes;
row.children[5].innerText=totalWinner;

function setStateResults(state){

  theStates[state].winner = null;
  if (james.electionResults[state] > michael.electionResults[state])
  {
  theStates[state].winner =james;
  }
  else if (james.electionResults[state] < michael.electionResults[state])
  {
  theStates[state].winner =michael;
  }
 else if (james.electionResults[state] == michael.electionResults[state])
 {
  theStates[state].winner ="draw";
}
 var stateWinner=theStates[state].winner;
 if (stateWinner !== null|| stateWinner !== "draw"){
 theStates[state].rgbColor=stateWinner.partyColor;
 }else {theStates[state].rgbColor = [11,32,57];}

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0].children[0];
var stateName = header.children[0];
stateName.innerText = theStates[state].nameFull;
var stateAbbrev = header.children[1];


var cand1 = stateInfoTable.children[1].children[0];
var cand1Name = cand1.children[0];
var cand1Result = cand1.children[1];

  var cand2 = stateInfoTable.children[1].children[1];
  var cand2Name = cand2.children[0];
  var cand2Result = cand2.children[1];

  var resTable = stateInfoTable.children[1].children[2];
  var winnerResult = resTable.children[1];

  cand1Name.innerText=james.name;
  cand1Result.innerText=james.electionResults[state];

  cand2Name.innerText=michael.name;
  cand2Result.innerText=michael.electionResults[state];


     if (theStates[state].winner  !== "draw"){
    winnerResult.innerText=theStates[state].winner.name;
  }else{
     winnerResult.innerText="it's a draw";
   }}
