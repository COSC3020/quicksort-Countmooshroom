function quicksort(array) {
    var arr = [array];
    var finished = false;
    while (!finished) {
        let tempArr = []
        finished = true;
        for (const item of arr) {
            if (item.length > 1) {

                finished = false;
                let pivot = item[0];
                let left = [], right = [];
                for (let j = 1; j < item.length; j++) {
                    if (item[j] < pivot) { left.push(item[j]); }
                    else { right.push(item[j]); }
                }

                if (left.length > 0) { tempArr.push(left); }
                tempArr.push([item[0]])
                if (right.length > 0) { tempArr.push(right); }
            }
            else { tempArr.push(item) }
        }
        arr = [...tempArr];
    }
    return arr.flat();
}
