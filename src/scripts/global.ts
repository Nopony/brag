document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		let hr = document.querySelector("#sliding-hr");
		if(hr) hr.id += '-animate';
	}, 300)

}, false);
console.log()