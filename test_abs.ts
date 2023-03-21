abstract class Device{
    private _type: string;
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    private _color: string;
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    constructor(_type: string,_color: string){
        this._type = _type;
        this._color = _color;
    }
    abstract show(): string;
}

class Car extends Device{
    constructor(private _type: string,private _color: string, private model: string){
        super(_type,_color);

    }
    show(): string {
        return ``
    }
}