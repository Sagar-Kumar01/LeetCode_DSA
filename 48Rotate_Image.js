/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    for(let i = 0; i<matrix.length; i++){
        let rowstart = 0;
        let rowend = matrix.length-1;

        while(rowstart<rowend){
            let temp = matrix[rowstart][i];
            matrix[rowstart][i] = matrix[rowend][i];
            matrix[rowend][i] = temp;
            rowstart += 1;
            rowend -= 1;
        }

    }
    for(let i = 0; i<matrix.length-1; i++){
        for(let j = i+1; j<matrix.length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};