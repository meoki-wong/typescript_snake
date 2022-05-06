// 定义记分牌
export default class ScorePanel {
    score: number = 0;
    level: number = 1;
    /* 声明score  level所在的元素 在构造函数中进行初始化*/
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(){
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
    }

    // 设置加分方法
    addScore(){
        this.scoreEle.innerHTML = `${this.score ++}`
        if(this.score % 10 === 0){ // 每10分会升一级
            this.addLevel()
        }
    }
    // 提升等级的方法
    addLevel(){
        if(this.level <10 ){ // 暂定最高等级为10级
            this.levelEle.innerHTML = `${++ this.level}`
        }
    }

}