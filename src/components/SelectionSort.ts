export const selectionSort = (global : number[][]  , items : number[]) => {
	for(let i = 0 ;i < items.length; i++){
		let min_index = i;
		for(let j = i+1 ; j< items.length;j++)
		{
			if(items[min_index] > items[j])
				min_index = j;	
		}
		const temp = items[min_index]
		items[min_index] = items[i];
		items[i] = temp;
		global.push([min_index,items[min_index]]);
	}
}
