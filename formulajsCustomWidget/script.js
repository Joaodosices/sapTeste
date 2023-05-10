// import * as formulajs from '/@formulajs/formulajs' // import entire package
    function makeFormula(typeFormula, arg1, arg2, arg3){
        let formula = typeFormula
        
        return formulajs.formula(arg1, arg2, arg3)
    }

    makeFormula("DATE", 2008, 7, 8)
// console.log(formulajs.DATE(2008, 7, 8))
// console.log(formulajs.SUM([1, 2, 3]))
