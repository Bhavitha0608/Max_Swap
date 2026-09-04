function maximumSwap(num) {
    let a = String(num).split('');
    let last = {};

    for (let i = 0; i < a.length; i++) {
        last[a[i]] = i;
    }

    for (let i = 0; i < a.length; i++) {
        for (let d = 9; d > a[i]; d--) {
            if (last[d] > i) {
                [a[i], a[last[d]]] = [a[last[d]], a[i]];
                return Number(a.join(''));
            }
        }
    }

    return num;
}

console.log(maximumSwap(2736));