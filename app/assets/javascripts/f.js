class Arr {
  constructor(thisArr) {
    this._currentArr = thisArr;
  }
  get currentArr() {
    return this._currentArr;
  }
  set currentArr(inCurrentArr) {
    this._currentArr = inCurrentArr;
  }

  stringify() {
    if (typeof this._currentArr == 'object') {
      var i;
      var outString = '[';
      for (i in this._currentArr) {
        if (typeof this._currentArr[i] == 'string') {
          outString += "'"+this._currentArr[i]+"'";
        } else {
          outString += this._currentArr[i];
        }
        outString += ',';
      }
      outString += ']';
      outString = outString.replace(',]',']')
      return outString;
    } else if (typeof this._currentArr == 'string') {
      return this._currentArr;
    }
  }

  parse() {
    if (typeof this._currentArr == 'string') {
      var outArr = this._currentArr.replace('[','').replace(']','').split(',');
      var i;
      for (i in outArr) {
        console.log(outArr[i]);
        if (isNaN(parseInt(outArr[i]))) {
          outArr[i] = outArr[i].replace("'","").replace("'","");
        } else {
          outArr[i] = parseInt(outArr[i]);
        }
        
        console.log(outArr[i]);
      }
      return outArr;
    } else if (typeof this._currentArr == 'object') {
      return this._currentArr;
    }
  }






}


