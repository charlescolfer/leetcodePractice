// remove stars in a string w/ left characters

/**
 * @param {string} s
 * @return {string}
 */

let example = "leet**cod*e"
let example2 = "erase*****"

4

var removeStars = function(s) {
    let i =s.length;
    let oS = s;
    while (i>=oS.length){
        let index = i;
        let leftSpace = index - 1;
        if (oS[index] != "*"){
            if (oS[index + 1] === "*"){
                oS = oS.replace(index, "");
                oS = oS.replace(index, "");
            }
        }

        if (oS[index] === "*") {
            oS = oS.replace(index, "");
            if (leftSpace !== "*" && !null) {
                oS += oS.replace(index, "");
                index -= 1;
            }
        }
        i--;
    }
    return oS;
};



let firstChar = s[0];
    let lastChar = s[s.length - 1];
    let combo = firstChar.concat(lastChar);
    let parens = ["()","{}","[]"];
    let check = false;
    for (i=0; i<parens.length; i++) {
        if (combo === parens[i]){
            check = true;
            return check;
        }
    }
    return check;