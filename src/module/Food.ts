export default class Food {
    // 定义一个属性  表示食物对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中对应的food元素  并将其赋值给element
        this.element = document.getElementById('food')!; // 结尾加!表示非空断言  一定不是空
    }


    get X() { // 获取x轴坐标
        return this.element.offsetLeft
    }
    get Y() { // 获取Y轴坐标
        return this.element.offsetTop
    }

    // 修改食物位置的方法
    change() {
        // 生成随机位置
        // 食物最小是0  最大是290  边界   且蛇移动一次就是一个格 10px（需要时10的倍数）
        let calc = Math.round(Math.random() * 29) * 10
        let top = calc // 生成0-29之间的数字  整体乘以10
        let left = calc // 生成0-29之间的数字  整体乘以10
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`

    }
}
