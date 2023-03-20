var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        person.count++;
    }
    Object.defineProperty(person.prototype, "get_name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person.prototype, "set_name", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person.prototype, "get_get_age", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person.prototype, "set_age", {
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person.prototype, "get_gender", {
        get: function () {
            return this.gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person.prototype, "set_gender", {
        set: function (value) {
            this.gender = value;
        },
        enumerable: false,
        configurable: true
    });
    person.prototype.show = function () {
        return "Name: ".concat(this.name, ", age: ").concat(this.age);
    };
    person.dem = function () {
        return "\nHave ".concat(person.count, " people.");
    };
    person.count = 0;
    return person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    // tạo contructor của lớp con
    function employee(name, age, gender, job) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.job = job;
        return _this;
    }
    employee.prototype.show = function () {
        return _super.prototype.show.call(this) + " job: ".concat(this.job);
    };
    return employee;
}(person));
var Long = new person('Long', 21, true);
var Phong = new person('Phong', 22, true);
var Trang = new person('Trang', 21, false);
var new_em = new employee('Nam', 22, true, 'dev');
console.log(person.dem());
