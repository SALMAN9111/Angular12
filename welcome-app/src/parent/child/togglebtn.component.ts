import { Component, EventEmitter, Input, Output } from "@angular/core"

@Component({
    selector: 'monocept-toggler',
    templateUrl: 'togglebtn-component.html'
})

export class ToggleBtnComponenet {
    oldState:number
    @Input()
    titleContent: String
    @Input()
    state:number
    @Input()
    textContent: String
    @Output()
    stateChanged: EventEmitter<String>;

    constructor() {
        this.textContent = "toggler";
        this.titleContent = "toggle me";
        this.stateChanged = new EventEmitter<String>();
        this.state = 0;
         this.oldState = this.state;
    }

    handleClick(){
        console.log("handleClick fired");
        
        console.log(this.oldState);
        if(this.oldState == 0){
            this.stateChanged.emit("State change from "+this.oldState+" to "+(this.oldState=this.oldState+1));
        }
        else{
            this.stateChanged.emit("State change from "+this.oldState+" to "+(this.oldState=this.oldState-1));
        }

    }

}