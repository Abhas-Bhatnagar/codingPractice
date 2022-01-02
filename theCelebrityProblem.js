function celebrity(M, n)
    {
        let rowItr = 0, colItr = M.length-1;
        while(rowItr < colItr) {
            if(M[rowItr][colItr] == 1) { // rowItr cannot be a celebr.
                rowItr++;
            } else { // colItr cannot be a celebr.
                colItr--;
            }
        }
        let celebIndex = rowItr;
        for(let itr =0 ; itr < M.length; itr++) {
            if(itr != celebIndex) {
                if(M[celebIndex][itr] == 1 || M[itr][celebIndex] == 0) {
                    return -1;
                }    
            }
        }
        return celebIndex;
        /** 
        let person_InwardFreq = {}, person_OutwardFreq = {};
        for(let itrRow =0; itrRow < M.length; itrRow++) {
            for(let itrCol = 0; itrCol < M[0].length; itrCol++) {
                if(M[itrRow][itrCol] == 1) {
                    !person_InwardFreq.hasOwnProperty(itrCol) && (person_InwardFreq[itrCol] = 0);
                    person_InwardFreq[itrCol]++;
                    
                    !person_OutwardFreq.hasOwnProperty(itrRow) && (person_OutwardFreq[itrRow] = 0);
                    person_OutwardFreq[itrRow]++;
                }
            }
        }
        // console.log(person_InwardFreq)
        // console.log(person_OutwardFreq)
        for(let personIndex =0; personIndex < M.length; personIndex++) { 
            if(!person_OutwardFreq.hasOwnProperty(personIndex) && 
                person_InwardFreq.hasOwnProperty(personIndex) &&
                person_InwardFreq[personIndex] ==  M.length -1
                ) {
                return personIndex;
            }
        }
        return -1;
        */
    }
    //https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1