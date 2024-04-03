class Line {
    name: string
    type: string
    visible: boolean
    showlegend: boolean
    opacity: number
    mode: string
    line: {
        color: string,
        dash: string,
        width: number
    }
    x: Array<number>
    y: Array<number>

    constructor(xData: Array<number>, yData: Array<number>, byOrderName: string) {
        this.name = byOrderName
        this.type = 'scatter'
        this.visible = true
        this.showlegend = true
        this.opacity = 1
        this.mode = 'lines'
        this.line = {
            color: 'black',
            dash: 'solid',
            width: 3
        }
        this.x = xData
        this.y = yData
    }
}