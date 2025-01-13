export function mergeStringsAlternatively(str1, str2) {
    let A = str1.length;
    let B = str2.length;

    let a = 0
    let b = 0

    let s = []

    let word = 1

    while (a < A && b < B) {
        if(word === 1) {
            s.push(str1[a]);
            a++
            word = 2
        }

        else {
            s.push(str2[b]) 
            b++
            word = 1
        }
    }

    while (a < A ) {
        s.push(str1[a])
        a++
    }

    while(b < B) {
        s.push(str2[b])
        b++
    }

    return s.join('')

}