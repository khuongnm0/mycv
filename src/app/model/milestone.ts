export class MileStone {
  public time: string;
  public company: string;
  public projects?: Array<Project>;
}

export class Project {
  public name: string;
  public role?: string;
  public technologies?: Array<string>;
  public description?: string;
}
