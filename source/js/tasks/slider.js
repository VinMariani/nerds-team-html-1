// Тут твой код по реализации слайдера

// Переменные такого вида.
// const slider = document.querySelector('.slider');

// export function slider() {
// 	// Тут пишешь свой код
// }

const data = [1, 2, 3, 4, 5];
const data1 = ['name', 'city', 'village', 'age', 'gender'];
let obj = {};
let arr = [];

data1.forEach((el) => {
	obj.name = el;
	arr.push(obj);
})

console.log(arr, 'arr');
arr = [{
	"name": 1,
	"city": 2,
	"village": 3,
},
{
	"age": 5
},
{
	"city": 4,
	"name": 3
}
]