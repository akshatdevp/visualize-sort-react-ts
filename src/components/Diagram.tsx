import React, { useContext } from 'react';
import {ItemsContext } from './Context';
const Diagram = () => {
	let { items, setItems } = useContext(ItemsContext);	
	return (

		<div className="flex items-end row-span-4">
			{
				items.map(
					(item,idx) => {
						return (
							<div className = "flex-1"
							     key = {`${item*7}-${idx}`}
							     style = {
							     {
							     	backgroundColor : "teal",
								height : `${item/7}%`
							     }
							    }
							    id = {`${idx}`}
							>
							</div>
						)
					}
					)
			}	
		</div>
	)
}

export default Diagram;
