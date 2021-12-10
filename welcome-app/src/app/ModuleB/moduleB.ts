import { Component, NgModule } from "@angular/core";
import { ComponentB } from "./moduleB.componentB";

@NgModule({
    declarations:[ComponentB],
    exports:[ComponentB]
})
export class ModuleB
{

}