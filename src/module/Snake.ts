
export default class Snake {
    // 蛇头
    head: HTMLElement;
    // 蛇的身体
    bodies: HTMLCollection; // 变化以后  出现新元素会自动刷新
    element: HTMLElement; // 获取存储蛇的容器
    constructor() {
        // 创建蛇头
        this.head = document.querySelector('#snake>div')
        this.bodies = document.getElementById('snake').getElementsByTagName('div')
        this.element = document.getElementById('snake')
    }

    // 获取蛇头的坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    // 整体处理X Y轴的蛇头行为参数
    checkSnakeBody(value: number, locale: number) {
        // 首先判断是否前后值相同  相同则不修改
        if (value == locale) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        
    }
    // 设置蛇头的坐标
    set X(value: number) {
        this.checkSnakeBody(value, this.X)
        this.head.style.left = `${value}px`
    }
    set Y(value: number) {
        this.checkSnakeBody(value, this.Y)
        this.head.style.top = `${value}px`
    }

    // 添加蛇的身体
    addBody() {
        // 向蛇element中添加一个div beforeend  在元素的结尾中添加一个新的元素
        this.moveBody()
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody(){
        let body = this.element.children
        for(let i=body.length-1; i>0; i--){
            (body[i] as HTMLElement).style.left = (body[i-1] as HTMLElement).style.left;
            (body[i] as HTMLElement).style.top = (body[i-1] as HTMLElement).style.top
        }
        // if(this.X == Number((body[1] as HTMLElement).style.left) && this.Y == Number((body[1] as HTMLElement).style.top)){
        //     return
        // }
        // 判断是否会撞到自身
        for (let i=0; i<body.length; i++){
            if(Number((body[i] as HTMLElement).style.left) === this.X && Number((body[i] as HTMLElement).style.top) === this.Y){
                throw new Error('撞到了自己')
            }
        }
    }
}