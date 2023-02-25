
const merge = (arr : number[], left : number, right : number, mid : number, setItems : any) => {
	let L = arr.slice(left, mid+1)
	let R = arr.slice(mid + 1, right+1)
	let i = 0
	let j = 0
	let ind = left;
	while ( i <=  L.length-1 && j <= R.length - 1){
		if(L[i] < R[j]){
				
			arr[ind++] = L[i++]
		}
		else {
			arr[ind++] = R[j++]
		}
	}
	while ( i <= L.length-1){
		arr[ind++] = L[i++]
	}
	while (j <= R.length - 1){
		arr[ind++] = R[j++]
	}
}

export const mergeSort = (arr : number[],left : number ,right : number,setItems : any) => {
	if(left < right) {
		let mid = Math.floor(left + (right - left) / 2);
		mergeSort(arr,left,mid,setItems);
		mergeSort(arr,mid+1,right,setItems);
		merge(arr,left,right,mid, setItems)
	}
	return arr;
}
