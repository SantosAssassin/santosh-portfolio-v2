import { SkillsLogoModel } from "../model/image-assets.model";
import { ImageAssetsConfig } from "./image-assets.config";

export class HomeConfiguration {
    welcomeTexts : object = {
        "greetings" : "Hi ! I Am",
        "name" : "Santosh Kumar Sahoo",
        "description" : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`
    };

    skills : string[] = ['Angular', 'Node.js', 'JavaScript', 'HTML', 'SASS', 'CSS', 'Firebase'];

    getSkillsDetails() : SkillsLogoModel []{
        let skillsDetails = [];
        const skillsLogosObj = new ImageAssetsConfig().getSkillsLogos();
        let skillcount = 0;
        for(let prop in skillsLogosObj){
            skillsDetails.push({
                logo : skillsLogosObj[prop],
                name : this.skills[skillcount]
            })
            skillcount++;
        }
        return skillsDetails;
    }

}