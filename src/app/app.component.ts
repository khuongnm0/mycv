import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";

import { MileStone, Skill } from "./model";

import { SKILLS_DATA, EXPERIENCE_DATA } from "./data";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "mycv";
  public timelineList: MileStone[];
  public skillList: Skill[];
  constructor() {
    this.timelineList = EXPERIENCE_DATA;
    this.skillList = SKILLS_DATA;
  }
  ngOnInit() {
    AOS.init();
  }
}
