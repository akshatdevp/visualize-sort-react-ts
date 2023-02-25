import  { createContext,useEffect,useState } from 'react';
import {mergeSort} from '../components/MergeSort';
import {selectionSort} from '../components/SelectionSort';
import animateEach from '../animations/animations';
interface Props{
	children : React.ReactNode;
}

export interface Settings {
	algoType : string,
	arrayLength : number,
	timer : number 
}

const initSettings : Settings = {
	algoType : "selectionSort",
	arrayLength : 15,
	timer : 15

}

export interface SettingContextType {
	settings : Settings,
	setSettings? : React.Dispatch<React.SetStateAction<Settings> >
	sort? : (algoType : string, items : number[]) => void;
}

export const SettingsContext = createContext<SettingContextType>({settings : initSettings})

export interface Items{
	items : number[],
	setItems? :  React.Dispatch<React.SetStateAction<number[]> >
}



const sort = (algoType : string, items : number[], setItems : any,settings : Settings) => {
	switch(algoType) {
		case "mergeSort" : return mergeSort([...items],0,items.length-1, setItems)
		case "selectionSort" : { 
		const global : number[][] = []
		selectionSort(global, [...items]) 
		animateEach(global,settings);
		// console.log(global,items)
		}
	}
	return []
}


export const ItemsContext = createContext<Items>({items : []});

const Context : React.FC<Props> = ({children}) => {
	let [settings, setSettings] = useState<Settings>(initSettings);
	let [items,setItems] = useState<number[]>([]);
	useEffect( () => {
		let arr = []
		for(let i = 0 ;i < settings.arrayLength; i++)
			arr.push(Math.floor(Math.random() * 510));
		setItems(arr);
		
	},[settings.arrayLength]
	)

	return (
	<ItemsContext.Provider value = {{items,setItems}}>
	<SettingsContext.Provider value = {{sort,settings,setSettings}}>
	{children}
	</SettingsContext.Provider>);
	</ItemsContext.Provider>
	)
}

export default Context;
