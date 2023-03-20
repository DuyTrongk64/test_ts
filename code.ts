class person{
    private name: string;
    
    private age: number;

    private gender: boolean;

    private static count =0;
    public get get_name(): string {
        return this.name;
    }

    public set set_name(value: string) {
        this.name = value;
    }

    public get get_get_age(): number {
        return this.age;
    }

    public set set_age(value: number) {
        this.age = value;
    }

    public get get_gender(): boolean {
        return this.gender;
    }

    public set set_gender(value: boolean) {
        this.gender = value;
    }

    constructor(name: string, age: number, gender: boolean) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        person.count++;
    }

    public show(){
        return `Name: ${this.name}, age: ${this.age}`;
    }

    public static dem(){
        return `\nHave ${person.count} people.`;
    }
}

class employee extends person{
    private job: string; 

    // tạo contructor của lớp con
    constructor(name: string, age: number, gender: boolean, job: string) 
    {
        super(name,age,gender); //khởi tạo lớp cha trong contructor của lớp con
        this.job=job;
    }

    public show() {
        return super.show() + ` job: ${this.job}`;
    }
}
let Long = new person('Long',21,true);
let Phong = new person('Phong',22,true);
let Trang = new person('Trang',21,false);
let new_em = new employee('Nam',22,true,'dev');

console.log(person.dem());

