function QuickSort(array, left, right){

    let i, j;
    let pivot;

    i = left;
    j = right;

    pivot = array[Math.floor((left + right)/2)];

    while(true){

        while(array[i] < pivot) i++;

        while(pivot < array[j]) j--;

        if(i >= j) break;

        Swap(array, i, j);

        i++;
        j--;

    }

    if(left < (i-1)) QuickSort(array, left, (i-1));

    if((i+1) < right) QuickSort(array, (j+1), right);

}

function Swap(x, i ,j){
    let temp;
    temp = x[i];
    x[i] = x[j];
    x[j] = temp;
}

exports.quickSort = QuickSort;