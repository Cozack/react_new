import {Deputy} from "./classes/Deputy";
import {Faction} from "./classes/Faction";
import {Rada} from "./classes/Rada";
import {EGender} from "./enums/EGender";

// Створити такі класи:
//     1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
//
// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)
//
// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір
//
// Мають бути присутні такі можливості:
//     - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//     Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

// ADD DEPUTIES <--------------------------------------------------------------------------------------------------

let firstDeputy = new Deputy(25,EGender.male,'Konopnenko',50,350)
let secondDeputy = new Deputy(45,EGender.male,'Potapenko',30,1500)
let thirdDeputy = new Deputy(38,EGender.female,'Chernenko',12,600)
let fourthDeputy = new Deputy(50,EGender.male,'Yanukovych',79,500)
let fiveDeputy = new Deputy(34,EGender.male,'Kyva',2,20000)
// console.log(firstDeputy);

// ADD FACTIONS <--------------------------------------------------------------------------------------------------

let udar = new Faction('Udar',firstDeputy,[firstDeputy,secondDeputy])
let batkivshchyna = new Faction('Batkivshchyna',thirdDeputy,[thirdDeputy,fiveDeputy])
udar.AllWhoTookMoney()

udar.biggestBribeDeputies()
// console.log(udar)
batkivshchyna.allDeputies()
batkivshchyna.addDeputy(firstDeputy)
// console.log(batkivshchyna)
// ADD Rada <--------------------------------------------------------------------------------------------------

let rada = new Rada([udar,batkivshchyna],fourthDeputy)
console.log(rada)