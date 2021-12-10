import { Component } from "@angular/core";

@Component({
    selector : 'monocept-contact',
    templateUrl : 'contact.component.html'
})
export class contactComponent {
    message: String[];
    constructor() {
        this.message = ['Employee1','Employee2','Employee3']
    }
    
}