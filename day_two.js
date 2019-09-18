//Day 2 Robert Solution
let items = [ {w: 1, v: 6}, {w:2, v: 10}, {w:3, v:12} ]


const knapsack = (items, maxWeight) => {
    let grid = [];
    for (let i = 0; i < items.length; i++){
        let row = [];
        for (let max = 1; max <= maxWeight; max++){
            row.push(helper(i, max))
        }
        grid.push(row);
    }
    return (getLast());
    function getLast(){
        let lastRow = grid[grid.length-1];
        return lastRow[lastRow.length-1]
    }
    function helper(row, max){
        const NO_SOLUTION = {maxValue:0, subset:[]};
        let col = max-1;
        let lastItem = items[row];
        let remaining = max - lastItem.w;


        let lastSolution = row > 0 ? grid[row-1][col] || NO_SOLUTION : NO_SOLUTION;

        let lastSubSolution = row > 0 ? grid[row-1][remaining-1] || NO_SOLUTION : NO_SOLUTION;
        
        if (remaining < 0){
            return lastSolution;
        }

        let lastValue = lastSolution.maxValue
        let lastSubValue = lastSubSolution.maxValue;

        let newVal = lastSubValue + lastItem.v;
        if (newVal >= lastValue){
            let _lastSubSet = lastSubSolution.subset.slice();
            _lastSubSet.push(lastItem);
            return { maxValue: newVal, subset :_lastSubSet};
        } else {
            return lastSolution;
        }
    }
}


