// import * as formulajs from '/@formulajs/formulajs' // import entire package
    function makeFormula(typeFormula, arg1, arg2, arg3, arg4, arg5, arg6, arg7){
        let ListArguments = [arg1, arg2, arg3, arg4, arg5, arg6, arg7]
        let formula = "formulajs." + typeFormula + "("
        for (let x = 0; x < ListArguments.length; x++) {
            const element = ListArguments[x];
            if (element != null) {
                formula = formula + element + ", "
            }
        }
        formula = formula + ")"

        // + arg1 + ", " + arg2 + ", " + arg3 + ")"
        console.log(formula)
        return eval(formula)
    }

    // let data = makeFormula("DATE", 2008, 7, 8)
    // let sum = makeFormula("SUM", [1, 2, 3])
    // let now = makeFormula("NOW")
    let imsub = makeFormula("IMSUB", "3+4i", "1+2i")
    
    // console.log(data)
    // console.log(sum)
    // console.log(now)
    console.log(imsub)
// console.log(formulajs.DATE(2008, 7, 8))
// console.log(formulajs.SUM([1, 2, 3]))
