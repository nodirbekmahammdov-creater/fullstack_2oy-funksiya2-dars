// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.



// function oyoqlar(tovuq, qoy, sigir) {
//     return tovuq*2+qoy*4+sigir*4
// }
// console.log(oyoqlar(2,3,5));
// console.log(oyoqlar(1,2,3));
// console.log(oyoqlar(5,2,8));



// ==================================================================================================================


// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!


// function and(x,y){
//     return x && y
// }

// console.log(and(true,true));




// ==================================================================================================================



// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.


// function tengMi(x, y) {

//     if(x===y){
//         return true
//     } else return false
// }
// console.log(tengMi(2,"2"));
// ==================================================================================================================


// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.


// function futbolOchko(yutishlar, duranglar,maglubiyatlar) {
//     return yutishlar*3+duranglar*1+maglubiyatlar*0
// }
// console.log(futbolOchko(3,4,2));



// ==================================================================================================================


// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin


// function sekundlar(soat, minut) {
//     return((soat*60)+minut)*60
// }
// console.log(sekundlar(1,3));



// ==================================================================================================================



// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang
// function tubmi(son){
//     if(son == 0 || son == 1){
//         return 'tubson 2 dan boshlanadi'
//     }
//     let count = 0
//     for(let i = 1 ; i<=son ; i++){
//         if(son%i == 0){
//             count++

//         } 
//     }
//     if(count == 2) return true
//     else return false
// }
// console.log(tubmi(1));
// console.log(tubmi(4));


// ==================================================================================================================


// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.

// function tengMi(x, y) {
//     return x===y
// }

// console.log(tengMi(1,1));

// console.log(tengMi(0,'0'));


// ==================================================================================================================


// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin.

// function booleanToString(bool) {
//     return String(bool)
// }

// console.log(booleanToString(true));
// console.log(booleanToString(false));


// ==================================================================================================================

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.

// const arrowFunc = (qiymat) => qiymat;

// console.log(arrowFunc(3));      
// console.log(arrowFunc("3"));   
// console.log(arrowFunc(true));   



// ==================================================================================================================


// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin

// function frames(minut, fps) {
//     return minut * 60 * fps;
// }

// console.log(frames(1, 30));
// console.log(frames(2, 24));
// console.log(frames(3, 60));

// ==================================================================================================================



// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.


// function calc(str) {
//  return eval(str)
// }
// console.log(calc("23+4") );
// console.log(calc("13+2-5*2") );



// ==================================================================================================================


// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on.


// function teng10(a,b) {
//     if(a==10 || b == 10 || a+b ==10){
//         return true
//     }  else return false
// }
// console.log(teng10(9, 10));
// console.log(teng10(9, 9));
// console.log(teng10(1, 9));






// ==================================================================================================================

// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.

// function litrMasofa(km) {
//     let litr = km / 10;
//     return litr < 100 ? 100 : litr;
// }

// console.log(litrMasofa(500));
// console.log(litrMasofa(1500));

// ==================================================================================================================

// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.

// function fun(x,y){
//     return x > y ? x : y
// }

// console.log(fun(3, -7));


// ==================================================================================================================


// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin

// function arr(x, y) {
//  return `${x} , ${y}`.split(',')
// }
// console.log(arr(1, 2));

// ==================================================================================================================

// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir17
// birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold
// // yolg’on.

// function tengStrings(str1, str2) {
//     return str1.length === str2.length;
// }
// console.log(tengStrings("AB", "CD"));
// console.log(tengStrings("ABC", "DE"));
// console.log(tengStrings("hello", "world"));




// ==================================================================================================================

// ==================================================================================================================

// 37.Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo'sh bo'lsa funksiya true qaytaradi,
// aks holda false.

// function boshStr(str) {
//     return str === ""
// }
// console.log(boshStr(""));
// console.log(boshStr(" "));
// console.log(boshStr("a"));



// ==================================================================================================================

// 38.Shunday funksiya yasang. Unda butun son argument qilib
// beriladi. Agar ushbu butun son 5ga bo'linsa, funksiya true
// qaytarsin, aks holda false.

// function bolinsin5(son) {
//     return son % 5 === 0
// }
// console.log(bolinsin5(5));
// console.log(bolinsin5(-55));
// console.log(bolinsin5(37));



// ==================================================================================================================

// 39.Shunday funksiya yasang. Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100ga bo'linsa, funksiya true
// qaytarsin, aks holda false.

// function bolinsin100(son) {
//     return son % 100 === 0
// }
// console.log(bolinsin100(1));
// console.log(bolinsin100(1000));
// console.log(bolinsin100(100));



// ==================================================================================================================

// 40.Shunday funksiya yasangki, ushbu funksiya string ichida
// nechta belgi borligini aniqlasin. Bunda length xususiyatidan
// foydalanmang va rekursiv funksiya ishlating.

// function uzunlik(str) {
//     if (str === "") {
//         return 0
//     }
//     return 1 + uzunlik(str.slice(1))
// }
// console.log(uzunlik("apple"));
// console.log(uzunlik("make"));
// console.log(uzunlik("a"));
// console.log(uzunlik(""));
// console.log(uzunlik(" "));



// ==================================================================================================================