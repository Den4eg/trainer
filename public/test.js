let test = [];
function mainIterator(string, array) {
	function* iter(str) {
		for (let i = 0; i < str.length; i++) yield str[i];
	}
	let s = iter(string);

	let fart = setTimeout(function test() {
		let g = s.next();
		if (!g.done) {
			array.push(g.value)
			console.log(g.value)
			fart = setTimeout(test, Math.floor(Math.random() * 600));
		} else {
			clearTimeout(fart);
		}
	}, 500);
}

mainIterator('hgtred', test)


//
// let interval = setInterval(() => {
//   if (!s.done) {
//     console.log(s.value);
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);

// function appendLabels(label){
// 	let gen = iter(label);
//
// 		setInterval(() => {
// 			console.log(gen.next().value);
// 			if (gen.next().done) clearInterval();
// 		}, 1000);
//
//
//
// }
//
// appendLabels('1234')
