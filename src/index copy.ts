// class Person {
//     name:string = '小红';
//     age:number = 12;
//     showFn:Function = function(){
//         alert('llll')
//     }

//     // constructor(){} 被称为构造函数
//     // 构造函数会在对象创建时调用 new的时候被调用
//     constructor(){
//         console.log('--->被调用了')

//         // this  表示的是当前的实例  
//         // let person = new Person()  this就是person
//     }       

// }

/* Dog extends Aniaml{
    
}

    此时， Animal被称为父类  Dog被称为子类
    使用继承后  子类回见更拥有父类的所有方法和属性
    通过继承  可以将多个类中共有的代码放在一个父类中
    这样只需要协议侧即可让所有的子类都可以同时拥有父类中的所有属性和方法
    如果子类中定义了跟父类一样的属性名  子类会覆盖父类  方法的重写

*/


// let person = new Person()
// person.showFn()

// console.log('--->person参数', person)


class Animal {
    name: string 
    age: number
    sayhays: Function = function(){
    }
    constructor(name:string, age: number, sayHay: string){
        this.name = name;
        this.age = age;
        this.sayhays = function(){
            alert(sayHay)
        }
    }
}

// class Dog extends Animal{

// }

// let dog = new Dog('够', 12, 'kkk')
// console.log('--->dog', dog)
// dog.sayhays()



// 2月24日
/* 

super  表示的是当前的父类

如果在子类中写了一个构造函数   必须调父类的构造函数  不然子类构造函数会覆盖父类的构造函数



*/

// class Dog extends Animal{

//     constructor(){
//         super()
//     }
// }

// abstract
/* 

    以abstract开头的类是抽象类
    无法创建实例
    只能被继承


    抽象类可以添加抽象方法
    抽象方法使用abstract开头， 没有方法体
    抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello(): void;

    class Dog extends Animal{
        sayHello(){
            console.log('lalala')
        }
    }
*/



/* 
    接口
    接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    同时接口也可以当成类型去声明
    接口可以重复去声明  相当于集合


    接口可以在定义类的时候去限制类的结构
    接口中的所有的属性都不能有实际的值
    接口只定义对象的结构  而不考虑实际的值
    在接口中所有的方法都是抽象方法


     interface myInterface {
        name: string,
        age: number
        sayHello(): void // 抽象方法
    }

    let obj: myInterface = {
        name: 'kk',
        age: 12
    }




    定义类时，可以使类去实现哪一个接口
    实现接口就是使类满足接口的要求

    interface myInterface {
        name: string;
        sayHello(): void
    }


    class MyInter extends myInterface {
        
    }




   


    属性修饰符

    public  可以在任何地方修改被修饰的属性
    private  私有属性  私有属性只能在类的内部进行修改和访问
    protected 受保护的属性  只能在当前类和当前类的子类进行使用
        可以通过再类中天啊及方法  使得私有属性可以被修改
        可以通过暴露get和set方法   来获取和修改值   getter和setter  属性的存取器
*/


/* 

泛型
如果遇到定义函数或者类的时候   遇到类型不明确的情况下   使用泛型
泛型可以同时指定多个
function fn<T>(a: T): T{ // <T>尖括号中定义T  才能在变量a 和函数返回值定义T
    return a
}

fn(a: 10) // 表示T 为number 不指定泛型  TS可以自动推断
let result = fn<string>(a: 'hello')   指定泛型为string


interface inter{
    name: string
}

function fn2<T extends inter>(a: T): T{
    return a.name
}

T extends inter  表示 泛型T必须是inter实现类（子类）


*/

