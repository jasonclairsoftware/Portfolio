export class Tag{
  static readonly ANGULAR = new Tag("Angular", "red");
  static readonly TYPESCRIPT = new Tag("TypeScript", "darkred");
  static readonly CSHARP = new Tag("C#", "green");
  static readonly CPLUSPLUS = new Tag("C++", "blue");
  static readonly JAVA = new Tag("Java", "yellow");
  static readonly JAVASCRIPT = new Tag("JavaScript", "purple");

  private constructor(private readonly key: string, public readonly color: string){

  }

  public toString(){
    return this.key;
  }
}
