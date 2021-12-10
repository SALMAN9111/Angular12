import { Component, Input } from "@angular/core"

@Component({
    selector: 'monocept-parent',
    templateUrl: 'parent-component.html'
})

export class ParentComponenet {

    constructor() {
    }
    handleStateChange(message:String) {
        console.log(message);

    }

}