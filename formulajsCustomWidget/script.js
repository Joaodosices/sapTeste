// import * as formulajs from '/@formulajs/formulajs' // import entire package
    function makeFormula(typeFormula, arg1, arg2, arg3){
        let formula = "formulajs." + typeFormula + "(" + arg1 + ", " + arg2 + ", " + arg3 + ")"
        // formulajs.formula(arg1, arg2, arg3)
        console.log(formula)
        console.log(eval(formula))
        // return formulajs.call(formula, arg1, arg2, arg3)
        // formulajs.DATE()
    }

    makeFormula("DATE", 2008, 7, 8)
// console.log(formulajs.DATE(2008, 7, 8))
// console.log(formulajs.SUM([1, 2, 3]))
