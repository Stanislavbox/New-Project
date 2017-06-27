
************************************ Занятие №7 Презентация******************************
ДЗ
Задача №1 
Решить задание из 11 задачи лекции №7 "Массивы" с
использованием filter()(вместо цикла) 

function filterCollection (arr, p1, p2){
  
  var newArr = arr.filter (function(element){
  return element.price >= p1 && element.price <= p2;
  });
  newArr.sort(function(a,b){
    return a.price - b.price;
  });
  console.log(newArr);
  return newArr;
}


filterCollection ([
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
], 15, 30);

Задача №2
На основе масива [1, 2, 3, 5, 8, 9, 10] сформировать новый масси,
каждый элемент которого будет хранить информацию о числе и его
четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 1, odd: true}...]

function oddElement (arr) {
  var newArr = arr.map( function (element, index){
    if (element % 2 == 0) return {digit: element, odd: true};
    if (element % 2 != 0) return {digit: element, odd: false};
  });
  console.log(newArr);
  console.log(newArr.digit);
  return newArr;
}
oddElement ([1, 2, 3, 5, 8, 9, 10]);

Задача № 3
Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы,
равные нулю. Если да - вернуть false.

var arr = [12, 4, 50, 1, 0, 18, 40],
  result;
  result = arr.some(function(element){
    if (element === 0) return false;
  });
  console.log(result);

Задача № 4
Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what']
хотябы одно слово длиной больше 3х букв. Если да вернуть true


var arr = ['yes', 'hello', 'no', 'easycode', 'what'],
  result;
  result = arr.some(function(element){
    if (element.length >=3 ) return true;
  });
  console.log(result);

Задача №5
Дан массив объектов, где каждый объект  содержит информацию о
букве и месте её положения в строке {буква: 'a', позиция_в_предложении: 1}:
[{shar:'a', index:12}, {shar:'w', index:8},{shar:'Y', index:10},{shar:'p', index:3}, {shar:'p', index:2},
{shar:'N', index:6},{shar:' ', index:5},{shar:'y', index:4},{shar:'r', index:13}, {shar:'H', index:0},
{shar:'e', index:11},{shar:'a', index:1},{shar:' ', index:9},{shar:'!', index:14}, {shar:'e', index:7}];

var str = '',
    arr = [
          {shar:'a', index:12}, {shar:'w', index:8},{shar:'Y', index:10},{shar:'p', index:3}, {shar:'p', index:2},
          {shar:'N', index:6},{shar:' ', index:5},{shar:'y', index:4},{shar:'r', index:13}, {shar:'H', index:0},
          {shar:'e', index:11},{shar:'a', index:1},{shar:' ', index:9},{shar:'!', index:14}, {shar:'e', index:7}
];

  arr.sort(function(a, b){
    return a.index - b.index;
  });
  console.log(arr);
  str = arr.reduce (function(previous, letter2){
    return previous + '' + letter2.shar;
  }, '');

  console.log(str);