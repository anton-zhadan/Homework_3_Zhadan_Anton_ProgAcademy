let arrStyles = ["Джаз", "Блюз"];
document.write("</br>" + arrStyles);


document.write('<br>');
document.write('<br>');


arrStyles.push("Рок-н-ролл");
document.write("</br>" + arrStyles);


document.write('<br>');
document.write('<br>');


arrStyles.splice(1, 1, "Классика");
document.write("</br>" + arrStyles);


document.write('<br>');
document.write('<br>');


arrAfterDelete = arrStyles.splice(1);
document.write("</br>Удален: " + arrStyles);


document.write('<br>');
document.write('<br>');


document.write("</br>Остались: " + arrAfterDelete);


document.write('<br>');
document.write('<br>');


arrAfterDelete.unshift("Рэп", "Регги");
document.write("</br>" + arrAfterDelete);

document.write('<br>');
document.write('<br>');

//Додатковi завдання

//1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

let arrOne = ['a', 'b', 'c'];
let arrTwo = [1, 2, 3];
let arrFinal = arrOne.concat(arrTwo);
document.write('<br>' + 'Task-1 - ' + arrFinal);


//2. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

let arrAddElemEnd = ['a', 'b', 'c'];
arrAddElemEnd.push(1, 2, 3);
document.write('<br>' + 'Task-2 - ' + arrAddElemEnd);

//3. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

let arrReverse = [1, 2, 3];
arrReverse.reverse();
document.write('<br>' + 'Task-3 - ' + arrReverse);

//4. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

let arrAddElemEndTwo = [1, 2, 3];
arrAddElemEndTwo.push(4, 5, 6);
document.write('<br>' + 'Task-4 - ' + arrAddElemEndTwo);

//5. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let arrAddElemBegin = [1, 2, 3];
arrAddElemBegin.unshift(4, 5, 6);
document.write('<br>' + 'Task-5 - ' + arrAddElemBegin);

//6. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

let arr_Show_Display_First_Element = ['js', 'css', 'jq'];
document.write('<br>' + 'Task-6 - ' + arr_Show_Display_First_Element[0]);

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

let arr_Exsercise_7_Old = [1, 2, 3, 4, 5];
let arr_Exsercise_7_New = [];
arr_Exsercise_7_New = arr_Exsercise_7_Old.slice(0, 3);
document.write('<br>' + 'Task-7 - ' + arr_Exsercise_7_New);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

let arr_Exsercise_8_Splice = [1, 2, 3, 4, 5];
arr_Exsercise_8_Splice.splice(1, 2);
document.write('<br>' + 'Task-8 - ' + arr_Exsercise_8_Splice);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 2, 10, 3, 4, 5].

let arr_Exsercise_9_Splice = [1, 2, 3, 4, 5];
arr_Exsercise_9_Splice.splice(2, 4, 10, 3, 4, 5);
document.write('<br>' + 'Task-9 - ' + arr_Exsercise_9_Splice);


//10. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

let arr_Exsercise_10 = [3, 4, 1, 2, 7];

document.write('<br>' + 'Task-10 - ' + arr_Exsercise_10.sort());

//11. Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.

let arr_Exsercise_11 = ['Привет, ', 'мир', '!'];
let arr_Exsercise_11_Join;
arr_Exsercise_11_Join = arr_Exsercise_11.join('');
document.write('<br>' + 'Task-11 - ' + arr_Exsercise_11_Join);

//12. Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').

let arr_Exsercise_12 = ['Привет, ', 'мир', '!'];
arr_Exsercise_12[0] = 'Пока, ';
document.write('<br>' + 'Task-12 - ' + arr_Exsercise_12.join(''));

//13. Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.

//Перший спосiб

let arr_Exsercise_13_First_Way = [];

for (let i = 0; i <= 4; i++) {
	arr_Exsercise_13_First_Way[i] = i + 1;
}


//Другий спосiб

let arr_Exsercise_13_Second_Way = [1, 2, 3, 4, 5];

//15. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

let arr_Exsercise_15 = ['a', 'b', 'c', 'd'];

document.write('<br>' + 'Task-15 - ' + arr_Exsercise_15[0] + '+' + arr_Exsercise_15[1] + ', ' + arr_Exsercise_15[2] + '+' + arr_Exsercise_15[3]);

// 16. Запросите у пользователя количество элементов массива. 
// Исходя из данных которые ввел пользователь создайте массив на то количество элементов которое передал пользователь. 
// В каждом индексе массива храните чило которе будет показывать номер элемента массива. 

let enterValue = +prompt('Введiть кiлькiсть элементiв массиву');

let arr_Exsercise_16 = [];

for (let i = 1; i <= enterValue; i++) {
	arr_Exsercise_16[i] = i;
}

document.write('<br>' + 'Task-16 - ' + arr_Exsercise_16.join(' '));


//17. Сделайте так, чтобы из массива который вы создали выше вывелись все нечетные числа в параграфе, а четные в спане с красным фоном.

for (let j of arr_Exsercise_16) {
	if (arr_Exsercise_16[j] % 2 !== 0) {
		document.write('<p>' + j + '---');
		console.log(j);
	} 
	else {
		document.write('<span style=background-color:red>' + j);
	}
}

//18. Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. 

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let str1 = vegetables.join(', ');
document.write('<p>' + 'Task-18 - ' + str1);