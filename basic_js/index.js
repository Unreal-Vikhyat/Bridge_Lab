// 1. Reverse Words in a Sentence
// Input: "Java is fun" → Output: "fun is Java"
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("Java is fun"));


// 2. Check for Rotation
// Input: "ABCD", "CDAB" → Output: true
function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    return (s1 + s1).includes(s2);
}
console.log(isRotation("ABCD", "CDAB"));


// 3. Run-Length Encoding
// Input: "aaabbc" → Output: "a3b2c1"
function runLengthEncode(str) {
    let res = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) count++;
        else {
            res += str[i - 1] + count;
            count = 1;
        }
    }
    return res;
}
console.log(runLengthEncode("aaabbc"));

// 7. Check for Anagram
// Input: "listen", "silent" → Output: true
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    const sort = s => s.split("").sort().join("");
    return sort(s1) === sort(s2);
}
console.log(isAnagram("listen", "silent"));


// 8. Find All Duplicates in a String
// Input: "programming" → Output: 'r', 'g', 'm'
function findDuplicates(str) {
    const map = {};
    const res = new Set();

    for (let ch of str) {
        map[ch] = (map[ch] || 0) + 1;
        if (map[ch] === 2) res.add(ch);
    }
    return [...res];
}
console.log(findDuplicates("programming"));