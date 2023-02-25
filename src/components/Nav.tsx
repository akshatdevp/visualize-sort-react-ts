import React, { useContext } from 'react';
import {ItemsContext, SettingsContext,SettingsContextType} from './Context';
export default function Nav() {
	let {sort, settings,setSettings} = useContext(SettingsContext);
	let { items, setItems } = useContext(ItemsContext);
	let onArrayUpdate : React.ChangeEventHandler<HTMLInputElement> = e => {
	if(setSettings)
		setSettings(x => ({...x,arrayLength : +e.target.value  }));
	}

	let onTimerUpdate : React.ChangeEventHandler<HTMLInputElement> = e => {
		if(setSettings)
			setSettings(x => ({...x,timer : +e.target.value}));
	}


	return (
			<div className = "grid grid-flow-row w-screen bg-gray-200">
				<div className = " flex -items-center justify-center">
					<button className = "border shadow-md border-gray-400 py-2 px-4 "
					onClick = 
						{
						() =>
							{
								if(sort)
									sort(settings.algoType,items,setItems,settings)
							}
						}
					>
					Sort</button>
				</div>
				<div className= " flex flex-col items-center w-full pb-3">
				<label> Array length  : {settings.arrayLength}</label>
				<input type = "range" name = "item_count" id = "item_count" className = "w-full max-w-xl" defaultValue = {settings.arrayLength || 10} min = {5} onChange = {onArrayUpdate}/>
				</div>
				<div className= " flex flex-col items-center w-full">
				<label> Time  : {settings.timer}</label>
				<input type = "range" name = "timer" id = "timer" className = "w-full max-w-xl" defaultValue = {settings.timer || 10} min = {10} onChange = {onTimerUpdate}/>
				</div>
			</div>

	       )
}

