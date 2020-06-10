import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";

import { MileStone, Skill, About } from "./model";

import { SKILLS_DATA, EXPERIENCE_DATA, ABOUT_DATA, SUMMARY_DATA , HOBBIES_DATA} from "./data";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "KhuongNM";
  public skillList: Skill[];
  public summaryList: any[];

  public aboutList: About[];
  public hobbieList: any[];

  public timelineList: MileStone[];

  constructor() {
    this.skillList = SKILLS_DATA;
    this.aboutList = ABOUT_DATA;
    this.timelineList = EXPERIENCE_DATA;
    this.summaryList = SUMMARY_DATA;
    this.hobbieList = HOBBIES_DATA;
  }
  ngOnInit() {
    AOS.init();
  }
}
