import {Lib} from "../../Lib";
import {Subscriber} from "rxjs";
// import {
//     Subscriber,
//     Subject,
//     Observable
// } from "rxjs";
// type UnSubscriber = Function | Subscriber<any>;
// var c:UnSubscriber = Observable.create((a)=>{}).subscribe(()=>{});


export class Compbaser {
    private unsubFunctions: Array<any> = [];
    protected me = '';

    constructor() {
        this.me = Lib.GetCompSelector(this.constructor)
    }

    protected cancelOnDestroy(i_function: any): void {
        this.unsubFunctions.push(i_function);
    }

    private ngOnDestroy() {
        // console.log('unsubscribing on behalf of ' + this.me);
        this.unsubFunctions.map((f:any) => {
            if (f instanceof Subscriber) {
                f.unsubscribe();
            } else {
                f()
            }
        });
        this.destroy();
        this.unsubFunctions = null;
        this.me = null;
    }

    // override by sub class component
    destroy() {
    };
}