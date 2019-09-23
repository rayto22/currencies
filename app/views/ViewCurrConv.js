class ViewCurrConv{
    constructor(contr){
        this.controller = contr;

        this.originalSelectDOM = document.querySelector('#origin_currency');
        this.resultSelectDOM = document.querySelector('#result_currency');
        this.originValueInputDOM = document.querySelector("#origin_value");
        this.resultValueInputDOM = document.querySelector("#result_value");

        document.querySelector('.curr_conv_form').addEventListener('submit', this.controller.convertCurr.bind(this.controller));
        document.querySelector('.reset_button').addEventListener('click', this.resetForm.bind(this));
    }

    buildSelects(arrOfCurr){
        arrOfCurr.sort().forEach(optionArr => {
            let optionSelect = document.createElement('option');
            optionSelect.setAttribute('value', optionArr[0]);
            optionSelect.innerText = `${optionArr[0]} - ${optionArr[1].currencyName}`;

            this.originalSelectDOM.appendChild(optionSelect);
            this.resultSelectDOM.appendChild(optionSelect.cloneNode(true));
        });
    }

    getCurrData(){
        return {
            from : this.getCurrFrom(),
            to: this.getCurrTo(),
            value: this.getOriginValue()
        }
    }

    getCurrFrom(){
        return this.originalSelectDOM.value;
    }
    getCurrTo(){
        return this.resultSelectDOM.value;
    }
    getOriginValue(){
        return this.originValueInputDOM.value;
    }

    outputResult(res){
        this.resultValueInputDOM.value = res;
    }

    resetForm(){
        this.originValueInputDOM.value = '';
        this.resultValueInputDOM.value = '';
        this.originalSelectDOM.value = 'UAH';
        this.resultSelectDOM.value = 'USD';
    }
}

export { ViewCurrConv };