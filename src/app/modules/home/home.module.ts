import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { PortfolioPictureComponent } from "./portfolio-picture/portfolio-picture.component";
import { ResumeHireButtonComponent } from "./resume-hire-button/resume-hire-button.component";
import { SkillsComponent } from "./skills/skills.component";
import { WelcomTextComponent } from "./welcome-text/welcome-text.component";

@NgModule({
    declarations : [
        HomeComponent,
        WelcomTextComponent,
        SkillsComponent,
        ResumeHireButtonComponent,
        PortfolioPictureComponent
    ],
    imports : [
        CommonModule,
        HomeRoutingModule
    ]
})

export class HomeModule {}