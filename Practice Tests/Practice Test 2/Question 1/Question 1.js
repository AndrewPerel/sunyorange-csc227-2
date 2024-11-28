const a = [];

function main() {
    for (i = 5; i != 0; i--) {
        let n = Number(prompt("Enter a number"));
        a.push(n);
    }

    document.getElementById("ta").innerHTML += JSON.stringify(getStats(a));
}

function getStats(a) {
    let sum = a[0] + a[1] + a[2] + a[3] + a[4];
    const b = a.sort((a, b) => a - b);

    const stats = {
        count: a.length,
        sum: sum,
        average: sum / 5,
        median: b[2],
        max: Math.max(...a),
        min: Math.min(...a)
    }

    return stats;
}