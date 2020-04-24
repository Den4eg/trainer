function textParser(text,max) {
	let result=[];
	function support (line, maxW){
		let testLine = []
		line = line.split(' ')
		for(let i = 0; i < line.length; i++){
			if(testLine.join(' ').length < maxW){
				testLine.push(line[i])
			} else {
				result.push(testLine.splice(0, testLine.length - 1 ).join(' '))
				testLine.push(line[i])
			}
			if (i === line.length - 1){
				result.push(testLine.splice(0, testLine.length ).join(' '))
			}
		}
	}
	for(let line of text.split(/^/m)){
		support(line, max)
	}
	return result
}

let text = `Вроде бы, элемент и был удалён, но при проверке оказывается, что массив всё ещё имеет 3 элемента arr.length == 3.
Это нормально, потому что всё, что делает delete obj.key – это удаляет значение с данным ключом key. Это нормально для объектов, но для массивов мы обычно хотим, чтобы оставшиеся элементы сдвинулись и заняли освободившееся место. Мы ждём, что массив станет короче.
Поэтому для этого нужно использовать специальные методы.
Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.
Его синтаксис:
Но наша задача — познакомиться с языком html, и следуя ей давайте посмотрим, какие теги принимают участие в форматировании текста
Вообще то, многие многие из этих тегов, по версии html 5, считаются уже устаревшими, и вместо них рекомендуется использовать стили, но тем не менее знать их всё равно нужно.
Так как переход на пятую версию произошёл совсем недавно, то Вы непременно с ними столкнётесь, и будете знать, как они работают.`

let text2 = ``;

console.log(textParser(text, 40));