import { NgModule } from "@angular/core";

import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent] 
    // Above u can add more components and by importing SharedModule somewhere else, export these components in bulk
    // This is works well for shared modules like this. Now u can remove CardComponent from app.module and just import SharedModule
})
export class SharedModule {}