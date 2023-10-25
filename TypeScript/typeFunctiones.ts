function add(n1:number, n2:number){
    return n1+n2
}

function printResult(num:number):void{
    console.log("Result"+ num)
    }

    printResult(add(5,12))

    let combinateValue: (a:number, b:number) => number

    combinateValue =add
    combinateValue= printResult
    console.log(combinateValue(8, 8))