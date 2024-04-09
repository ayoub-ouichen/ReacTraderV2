class Line {
    name: string
    type: string
    visible: boolean
    showlegend: boolean
    opacity: number
    mode: string
    line_color: string
    line_dash: string
    line_width: number
    x: Array<number>
    y: Array<number>

    constructor(xData: Array<number>, yData: Array<number>, byOrderName: string) {
        this.name = byOrderName
        this.type = 'scatter'
        this.visible = true
        this.showlegend = true
        this.opacity = 1
        this.mode = 'lines'
        this.line_color = 'black'
        this.line_dash = 'solid'
        this.line_width = 3
        this.x = xData
        this.y = yData
    }
    getLine() {
        return {
            name: this.name,
            type: this.type,
            visible: this.visible,
            showlegend: this.showlegend,
            opacity: this.opacity,
            mode: this.mode,
            line: {
                color: this.line_color,
                dash: this.line_dash,
                width: this.line_width
            },
            x: this.x,
            y: this.y
        }
    }
}

export default Line