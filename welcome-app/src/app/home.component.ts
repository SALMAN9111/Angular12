import { Component } from "@angular/core"

@Component({
    selector : 'monocept-home',
    templateUrl : 'home.component.html'
})
export class HomeComponent {
    message: String = ''
    constructor() {
        this.message = 'developed by monocept team'
    }
    
}