
module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    var result = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == undefined) {
            result = result.slice(0, result.length - 1);
            continue;
        }

        if (arr[i] === '--double-next') {
            if (i !== (arr.length - 1)) {
                result.push(arr[i + 1]);
            }
            continue;
        }

        if (arr[i] === '--double-prev') {
            if (i !== 0) {
                result.push(arr[i - 1]);
            }
            continue;
        }

        if (arr[i] === '--discard-next') {
            i++;
            continue;
        }

        if (arr[i] === '--discard-prev') {
            result = result.slice(0, result.length - 1)
            continue;
        }

        result.push(arr[i]);
    }
    return result;
}
