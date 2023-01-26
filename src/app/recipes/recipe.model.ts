export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}

// https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656030#content