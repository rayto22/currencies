class ModelCurrConv{
    constructor(contr){
        this.controller = contr;
        this.myKey = 'b07c284cb3c3aa5db4fe';
        // this.apiCurr = 'https://free.currconv.com/api/v7/currencies?apiKey=';
    }

    getCurr(){
        fetch('/src/curr.json')
            .then(response => response.json())
            .then(result => Object.entries(result.results))
            .then(arrOfCurr => this.controller.buildSelects(arrOfCurr));
    }

    convertCurr(obj){
        this.currFrom = obj.from;
        this.currTo = obj.to;
        this.originValue = obj.value;

        console.log(this.currFrom, this.currTo, this.originValue);

        fetch(`https://free.currconv.com/api/v7/convert?q=${this.currFrom}_${this.currTo}&compact=ultra&apiKey=${this.myKey}`)
            .then(response => response.json())
            .then(ratio => this.calculation(ratio));
    }

    calculation(ratio){
        this.resultValue = (ratio[`${this.currFrom}_${this.currTo}`] * this.originValue).toFixed(2);
        this.controller.outputResult(this.resultValue);
    }
}

export { ModelCurrConv };