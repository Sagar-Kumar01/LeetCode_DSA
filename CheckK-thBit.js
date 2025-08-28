class Solution {
    checkKthBit(n, k) {
        // code here
        let ans = n&(1<<k);
        if(ans == 0){
            return false;
        }else{
            return true;
        }
    }
}
//the logic is pretty simple left shift 1 to kt position then perform bitwise & operator if we get 0 then
// bit is not set
// Question link :- https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1