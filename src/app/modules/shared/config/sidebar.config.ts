import { SidebarIconsModel } from "../model/image-assets.model";
import { ImageAssetsConfig } from "./image-assets.config";

export class SidebarConfiguration {
    sidebarIcon : SidebarIconsModel = new ImageAssetsConfig().getSidebarIcons();

    sidebarTabs = [
        {
            href : '',
            route : './home',
            icon : this.sidebarIcon.home,
            tabName : 'Home'
        },
        {
            href : '',
            route : './experience',
            icon : this.sidebarIcon.workExperience,
            tabName : 'Work Experience'
        },
        {
            href : '',
            route : './education',
            icon : this.sidebarIcon.education,
            tabName : 'Education'
        },
        {
            href : '',
            route : './achievement',
            icon : this.sidebarIcon.achievement,
            tabName : 'Achievement'
        },
        {
            href : '',
            route : './blog',
            icon : this.sidebarIcon.blog,
            tabName : 'Blog'
        }
    ]
}