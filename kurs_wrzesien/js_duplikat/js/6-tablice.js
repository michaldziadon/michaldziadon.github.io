

let names = [`michal` , `ania` , `jarkek`]


names[1] = `Basia`;

console.log(names);


let [imieProgramisty, imieSekretarki, imieGrafika] = names;


console.log(imieGrafika);


//metody

//push
// let arrayLenght = names.push(`monika`);


// console.log(arrayLenght);


//join
// let stringArray = names.join(` `);


// console.log(stringArray);

//reverse
// let reverseArray = names.reverse();
// console.log(names);

// names = names.sort();
// console.log(names);


let secondtable = [`szkrzynka` , `baca` , `laska` ];

let newtable = names.concat(secondtable);
console.log(newtable);


function reverseString(napis) {
	var pobierzNapis;
	var odwrocNapis;
	var scalNapis;

	pobierzNapis = napis.split('');
	odwrocNapis = pobierzNapis.reverse();
	scalNapis = odwrocNapis.join('');
	
	return scalNapis;
}

console.log( reverseString('Akademia108') );



let show = [`michal` , `jurek` , `baciar`];

console.log(show);

show[0] = `worek`;

console.log(show);

let [wok , czol , buc] = show;

console.log(wok);

czol = `new`;

console.log(1);

let superShow = show.push(`monika`);


console.log(superShow);

console.log(show);

let burza = [`burakow`, `amigos`];

let stringShow = show.join(` `);
console.log(stringShow);

let kupa = show.concat(burza);

console.log(kupa);


let filetrShow = show.filter(function(elemen) {
	return elemen.startsWith(`A`);

})

console.log(elemen);









