//bai1
// let arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23]

//1
// let temp = 0
// let turn = 0
// for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] % 2 == 0) {
//         temp += arrayNumber[i]
//         turn++
//     } 
// }
// let avrg = temp/turn
// console.log(avrg)

//4
// for (let i = 0; i< arrayNumber.length; i++) {
//         if ((arrayNumber[i]**(1/2))%1  == 0){
//             console.log(arrayNumber[i],"La so chinh phuong")
//         }else {
//             console.log(arrayNumber[i],"Khong la so chinh phuong")
//         }
        
// }

//5
// for(let i = 0; i < arrayNumber.length; i++) {
//     if(arrayNumber[i]%2 != 0 && arrayNumber[i] %3 != 0 && arrayNumber[i]%5 != 0) {
//         console.log(arrayNumber[i],"la so nguyen to")
//     }
// }

//6
// for(let i = 0; i < arrayNumber.length; i++) {
//     if(arrayNumber[i] < 0) {
//         arrayNumber[i] = 0
//     }
// }
// console.log(arrayNumber)

//7
// for(let i = 0; i < arrayNumber.length; i++) {
//     if(arrayNumber[i]<0) {
//         arrayNumber.slice(i,1)
//     }
// }
// console.log(arrayNumber)

//bai5
// let temp = 0
// let turn = 0
// let arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23]
// for (let i = 0; i < arrayNumber.length; i++) {
//     if(arrayNumber[i]%3==0) {
//         temp += arrayNumber[i]
//         turn++
//     }
// }
// let avrg = temp/turn
// console.log(avrg)
// let x = prompt("Nhap so X can chen:")
// let k = prompt("Nhap vi tri k:")
// arrayNumber[k].slice(x,1)
// console.log(arrayNumber)

//bai6
// let arrayA = [1,2,3,4,5,6,7,8,9]
// let arrayB = [5,4,22,62,11,44,51,1]
// let count = 0

// for (let i = 0; i<arrayA.length;i++) {
//     for(let y = 0; y<arrayB.length; y++) {
//         if (arrayA[i] == arrayB[y]){
//             count++
//         }
//     }
// }
// console.log("So lan xuat hien gia tri giong nhau la:",count)

//bai7
// let array = [1,2,3,4,5,6,5,4,3,2,1]
// for (let i = 0; i<array.length; i++) {
//     for (let y = 11; y>array.length; y--) {
//         if(array[i]==array[y]){
//             console.log("1")
//             continue
//         }else {
//             console.log("0")
//             break
//         }
//     }
// }

//bai8
// let newArray = [2,10,1,6,8,7,9,14,22,40]
// let temp = 0
// for (let i = 0; i<newArray.length; i++) {
//     if(newArray[i]%2==0) {
//         temp ++
//         if(temp == newArray.length) {
//             console.log(1)
//         }
//     }else{
//         console.log(0)
//         break
//     }
// }

//bai3
// let n = prompt("Nhap so nguyen n:")
// for(n;n>1;n--){
//     if(n%2!=0 && n%3!=0 && n%5!=0) {
//         console.log("So nay la so nguyen to:",n)
//     }
// }