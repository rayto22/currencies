import { ViewCurrConv } from '/app/views/ViewCurrConv.js';
import { ModelCurrConv } from '/app/models/ModelCurrConv.js';

class ControllerCurrConv{
    constructor(){
        this.model = new ModelCurrConv(this);
        this.view = new ViewCurrConv(this);

        this.getCurr();
    }

    getCurr(){
        this.model.getCurr();
    }

    buildSelects(arrOfCurr){
        this.view.buildSelects(arrOfCurr);
    }

    convertCurr(){
        event.preventDefault();
        this.model.convertCurr(this.view.getCurrData());
    }

    outputResult(res){
        this.view.outputResult(res);
    }
}

export { ControllerCurrConv };