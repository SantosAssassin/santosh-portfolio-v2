import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { SharedRoutingModule } from "./shared-routing.module";

@NgModule({
    declarations : [
        SidebarComponent
    ],
    imports : [
        CommonModule,
        SharedRoutingModule
    ],
    exports : [
        SidebarComponent
    ]
})

export class SharedModule {}