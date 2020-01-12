function pArr(sArr,gArr,ansArr) {
   if (gArr.length == 1) {
    let sArrTemp = Object.assign([],sArr);
    sArrTemp.push(gArr[0]);
    console.log(sArrTemp);
    ansArr.push(sArrTemp);
    return ansArr;
  }
  for (var itr = 0; itr < gArr.length; itr++) {
    let sArrTemp = Object.assign([],sArr);
    sArrTemp.push(gArr[itr]);
    let gArrTemp = Object.assign([],gArr);
    gArrTemp.splice(itr,1);
    pArr(sArrTemp,gArrTemp,ansArr);
  }
}
