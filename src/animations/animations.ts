import {Settings} from '../components/Context';
const animateEach = ( arr : number[][], settings : Settings ) => {
	let i = 0; // left index
	arr.forEach(([ind, _val], idx) => {
		const div = document.getElementById(`${i++}`);
		const div2 = document.getElementById(`${ind}`);
		if (!div || !div2) return;
		setTimeout(() => {
			div.style.backgroundColor = "blue";
			div2.style.backgroundColor = "red";
			const divHeight = div.style.height;
			div.style.height = div2.style.height;
			div2.style.height = divHeight;
			setTimeout(() => {
				div.style.backgroundColor = "teal";
				div2.style.backgroundColor = "teal";
				// if (idx === arr.length - 1) {
				//   setItems(newArr);
				// }
			}, (settings?.timer || 50) * 2);
		}, (settings?.timer || 50) * idx * 2);
	});
};

export default animateEach;
