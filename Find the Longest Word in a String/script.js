function longestWord (str) {
    return str.match(/[a-z]+/gi).sort((a, b) => a.length > b.length ? 1 : -1).reverse()[0].length;
}

const answer = longestWord('What if we try a super-long word such as otorhinolaryngology')
answer

