import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { MileStone } from "./model/milestone";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "mycv";
  public timeline: Array<MileStone>;

  constructor() {
    this.timeline = [
      {
        time: "Oct 2017 - Now ",
        company: "KYANON DIGITAL",
        projects: [
          {
            name: "Wecheer.IO",
            role: "Front-end Developer",
            technologies: ["VueJS", "FeatherJS", "Lavarel"],
            description:
              "<p>Develop CMS UI. Working with realtime data and map.</p>"
          },
          {
            name: "IDEM Lab",
            role: "Front-end Developer",
            technologies: ["HAML,", "Coffeescript", "SCSS"],
            description:
              "<p>Build CMS and website for Hotel/Event Management (Singapore).</p>"
          },
          {
            name: "Stadium Mapping",
            role: "Front-end Developer",
            technologies: ["AngularJS", "FabricJS", "SCSS"],
            description:
              "<p>Build interactive map for ANZ Stadium (Australia), develop modules for facilities/seats management.</p>"
          }
        ]
      },
      {
        time: "Mar 2017 - Oct 2017 ",
        company: "3FORCOM",
        projects: [
          {
            name: "Hoa Sen Group",
            role: "Full-stack Developer",
            technologies: ["ASP.NET MVC 3", "CSS 3", "Socket.io"],
            description: "<p>Develop new website for Ton Hoa Sen Group. </p>"
          },
          {
            name: "Outsource",
            role: "Collaborator (role as PM)",
            technologies: ["Firebase Realtime DB", "Native App", "Socket.io"],
            description:
              "<p>Manage timeline and delivery mobile apps for customer from Singapore. </p>"
          }
        ]
      },
      {
        time: "Feb 2016 - Mar 2017 ",
        company: "FPT Software HCM",
        projects: [
          {
            name: "SPIKA",
            role: "Front-end Developer",
            technologies: ["AnugularJS", "Web RTC", "Socket.io"],
            description:
              "<p>Develop chat-bot app for a big customer from Japan. End-user can use app for chatting, video call (Web RTC) or make question for robots. (as Skype)</p>"
          }
        ]
      }
    ];
  }
  ngOnInit() {
    AOS.init();
  }
}
