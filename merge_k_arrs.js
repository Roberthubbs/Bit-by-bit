function myMergeSort(arr) {
    let totalArr = flatten(arr).sort()
    return totalArr;
}

function flatten(items) {
    console.log(items)
    let flat = [];

    items.forEach((item) => {
        item.forEach((it) => {
            flat.push(it)
        })
    });
    return flat
}
