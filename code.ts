class person{
    private name: string;
    public get get_name(): string {
        return this.name;
    }
    public set set_name(value: string) {
        this.name = value;
    }
    private age: number;
    public get get_get_age(): number {
        return this.age;
    }
    public set set_age(value: number) {
        this.age = value;
    }
    private gender: boolean;
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
    }

    public show(){
        return `Name: ${this.name}, age: ${this.age}`;
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

let new_em = new employee('Nam',22,true,'dev');
console.log(new_em.show());
