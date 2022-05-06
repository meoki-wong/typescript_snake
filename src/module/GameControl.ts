// 游戏控制器  控制游戏

// 引入其他类  
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
export default class GameControl{

    snake: Snake;
    scorePanel: ScorePanel;
    food: Food

    // 创建一个存储蛇移动方向的属性  也就是键盘按键的方向
    direction: string = 'ArrowRight' // 赋值初始方向
    // 判断游戏是否结束状态
    isLive: boolean = true
    constructor(){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    init(){
        // 键盘按下事件
        document.addEventListener('keydown', (event)=>this.keyDownHandler(event))
        // 鼠标点击事件
        document.addEventListener('click', (event)=>this.mouseClickHandler(event))
        // 调用run方法  使蛇跑起来
         let runInterVal = setInterval(() => {
            this.run()
            !this.isLive && clearInterval(runInterVal)
        }, 300);
        
    }
    mouseClickHandler(event: any){
        this.direction = event.target.classList[0]
    }
    
    // 创建键盘的响应函数方法
    keyDownHandler(event: KeyboardEvent){
        // 修改direction的值
        this.direction = event.key
    }

    // 创建让蛇移动的函数方法
    run(){
        // 根据direction来判断蛇的移动方向
        let x = this.snake.X
        let y = this.snake.Y
        // 根据方向修改方向
        switch(this.direction){
            case 'top':
            case 'ArrowUp': 
                y -= 10
                break;
            case 'down':
            case 'ArrowDown':
                y += 10
                break;
            case 'left':
            case 'ArrowLeft':
                x -= 10
                break;
            case 'right':
            case 'ArrowRight':
                x += 10
                break;
            
        }
        
        
        if(this.snake.X == this.food.X && this.snake.Y == this.food.Y){
            this.snake.addBody() // 吃到食物  添加蛇的身体
            this.food.change()
        }
        try{
            this.snake.X = x
            this.snake.Y = y
        } catch(err:any){
            alert(`${err.message} Game Over` )
            this.isLive = false
        }
        this.snake.moveBody()
    }
}


