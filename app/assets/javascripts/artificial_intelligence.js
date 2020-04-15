class AI {
//     constructor(tagID) {
//       this._currentID = tagID;
//     }
//     get currentID() {
//       return this._currentID;
//     }
//     set currentID(inCurrentID) {
//       this._currentID = inCurrentID;
//     }

    
  }

// class GameAI extends AI {
//   gameStatus() {

//   }
// }

// class Learn extends GameAI {
//   learnMovement() {
//     boardStatus();
//     var determinedPotentialMoves = [];
//     var currentBoardString = JSON.stringify(boardJSON);
//     if (!(readCo(currentBoardString) in eliminatedMovesJSON)) {
//       eliminatedMovesJSON[readCo(currentBoardString)] = [];
//     }
//     for (const [key, value] of Object.entries(boardJSON)) {
//       if (value[0] == 'b') {
//         var mgArr = movementGoverner(key);
//         for (const i in mgArr) {
//           if (!(eliminatedMovesJSON[readCo(currentBoardString)].includes(([key, mgArr[i]]).toString()))) {
//             determinedPotentialMoves.push(([key, mgArr[i]]).toString());
//           } else {
//             console.log('Removed Move:', ([key, mgArr[i]]).toString());
//           }
//         }
//       }
//     }

//     var chosenMove = '';
//     do {
//       chosenMove = determinedPotentialMoves[Math.round((Math.random() * determinedPotentialMoves.length)-1)];
//     }
//     while ((chosenMove == undefined) && (determinedPotentialMoves.length > 0));
//     console.log('chosenMove:', chosenMove);

//     if (chosenMove != undefined) {
//       chosenMove = chosenMove.split(',');
//       boardMovement(chosenMove[0],chosenMove[1]);
//       finalMove = [currentBoardString, chosenMove.toString()];
//       chosenMoves.push([currentBoardString, chosenMove.toString()]);
//     }
    
//   }

//   learnOutcome(lastToMove) {
//     var determinedWinner = checkWinner(lastToMove);
//     if (determinedWinner == 'white') {
//       setTimeout(function(){boardReset()},2500);
//       eliminatedMovesJSON[readCo(finalMove[0])].push(finalMove[1]);
//     } else if (determinedWinner == 'black') {
//       setTimeout(function(){boardReset()},2500);
//     }
//   }
// }

// class MatchboxAI extends AI {

//   get eliminatedMovesJSON() {
//     return this._eliminatedMovesJSON;
//   }

//   set eliminatedMovesJSON(inEliminatedMovesJSON) {
//     this._eliminatedMovesJSON = inEliminatedMovesJSON;
//   }

//   get currentTree() {
//     return this._currentTree;
//   }

//   set currentTree(inCurrentTree) {
//     this._currentTree = inCurrentTree;
//   }

//   get possibleMoves() {
//     return this._possibleMoves;
//   }

//   set possibleMoves(inPossibleMoves) {
//     this._possibleMoves = inPossibleMoves;
//   }

//   get boardJSON() {
//     return this._boardJSON;
//   }

//   set boardJSON(inBoardJSON) {
//     this._boardJSON = inBoardJSON;
//   }

//   mbMove() {
//     var tPossibleMoves = possibleMoves();
//     var randomMove;

//     if (tPossibleMoves.length > 0) {
//       randomMove = Math.floor(Math.random() * (tPossibleMoves.length-1));
//       return tPossibleMoves[randomMove];
//     } else {
//       return false;
//     }
    
//   }

//   mbFeedback(inResult, inFinalMove, inFinalTree) {
//     var outEliminatedMoves = eliminatedMovesJSON();
//     if (inFinalMove != undefined) {
//       if (inResult == true) {
//         if (JSON.stringify(inFinalTree) in Object.keys(outEliminatedMoves)) {
//           if (!(outEliminatedMoves[JSON.stringify(inFinalTree)].includes(inFinalMove.toString()))) {
//             outEliminatedMoves[JSON.stringify(inFinalTree)].push(inFinalMove.toString());
//           }
//         } else {
//           outEliminatedMoves[JSON.stringify(inFinalTree)].push(inFinalMove);
//         } 
//       }
//     }
//     return outEliminatedMoves;
//   }
  
  
// }

// class Synapse extends AI {

//   get dataInput() {
//     return this._dataInput;
//   }
//   set dataInput(inDataInput) {
//     this._dataInput = inDataInput;
//   }

//   get expectedOutput() {
//     return this._expectedOutput;
//   }
//   set expectedOutput(inExpectedOutput) {
//     this._expectedOutput = inExpectedOutput;
//   }

  
//   // synapseExample = [<id|input|[weighting@@operator::condition~nextID::output,weighting@@operator::elseCondition~nextID::output,...]~defaultNextId::defaultOutput>,...]
//   // synapseJSONExample = [{'id':id,'input':input,'conditions':[{'weighting':weighting,'operator':operator,'condition':condition,'nextID':nextID},...]},...];
//   // id = synapse id
//   // input = initial input value or output of previous synapse
//   // weighting = weighting coeffecient of the conditional statement
//   // operator = (optional, default: *, options: +,-,/,*) operator defining the relationship of the weighting coeffecient with the conditional statement
//   // condition = if part of if/then statement
//   // nextID = (optional, default: 0) then part of if/then statement, must either be the id of a following synapse, or 0 to signify that this was the final synapse
//   // output = output of the current synapse
//   // elseCondition = conditional statement to be executed if the previous conditional statement returned false
//   // defaultNextId = (optional, default: 0) id of next synapse if all conditional statements return false
//   // defaultOutput = synapse output if all conditional statements return false

//   parse(inSynapseArray) {
    
//   }

//   strBetween(inString, marker1,marker2) {
//     var index1, index2, i;
//     for (i=0;i<inString.length;i++) {
//       if (inString[i]==marker1) {
//         index1 = i+1;
//         break;
//       }
//     }

//     for (i=inString.length;i>0;i--) {
//       if (inString[i]==marker2) {
//         index2 = i;
//         break;
//       }
//     }

//     return inString.slice(index1,index2);
//     // var outString = inString.split(marker1)[1].split(marker2)[0];
//     // return outString;
//   }

//   process(inSynapseArray) {
//     var sypse = '[<id1|input1|[weighting1@@operator1::condition1~nextID1::output1,weighting11@@operator11::elseCondition11~nextID11::output11]~defaultNextId1::defaultOutput1>,\
//     <id2|input2|[weighting2@@operator2::condition2~nextID2::output2,weighting22@@operator22::elseCondition22~nextID22::output22]~defaultNextId2::defaultOutput2>]';
    
//     var sypse2 = [{
//       'id':"id1",'input':"input1",'conditions':[{
//         'weighting':"weighting1",'operator':"operator1",'condition':"condition1",'nextID':"nextID1"
//       },{
//         'weighting':"weighting11",'operator':"operator11",'condition':"condition11",'nextID':"nextID11"
//       }]
//     },{
//       'id':"id2",'input':"input2",'conditions':[{
//         'weighting':"weighting2",'operator':"operator2",'condition':"condition2",'nextID':"nextID2"
//       },{
//         'weighting':"weighting22",'operator':"operator22",'condition':"condition22",'nextID':"nextID22"
//       }]
//     }];

//     console.log('sypse',sypse);
//     var b1 = this.strBetween(sypse,'[',']');
//     console.log('b1',b1);
//     var b2 = this.strBetween(b1,'<','>');
//     console.log('b2',b2);
//     var b3 = b2.split('|');
//     console.log('b3',b3);
//     var b4 = this.strBetween(b3[2],'[',']');
//     console.log('b4',b4);
//   }

// }


// // class ProcessStrings extends AI {

// //   between(inString, marker1,marker2) {
// //     return inString.split(marker1)[1].split(marker2)[0];
// //   }

// // }