class OHLC {
    name: string
    type: string
    visible: boolean
    showlegend: boolean
    opacity: number
    x: Array<any>
    high: Array<number>
    close: Array<number>
    open: Array<number>
    low: Array<number>
    increasing_line_color: string
    increasing_line_dash: string
    increasing_line_width: number
    decreasing_line_color: string
    decreasing_line_dash: string
    decreasing_line_width: number

    constructor(xData: Array<number>, highData: Array<number>, closeData: Array<number>, openData: Array<number>, lowData: Array<number>, byOrderName: string) {
        this.name = byOrderName
        this.type = 'ohlc'
        this.visible = true
        this.showlegend = true
        this.opacity = 1
        this.x = xData
        this.high = highData
        this.close = closeData
        this.open = openData
        this.low = lowData
        this.increasing_line_color = 'green'
        this.increasing_line_dash = 'solid'
        this.increasing_line_width = 1
        this.decreasing_line_color = 'red'
        this.decreasing_line_dash = 'solid'
        this.decreasing_line_width = 1
    }

    getOHLC() {
        return {
            name : this.name,
            type : this.type,
            visible : this.visible,
            showlegend : this.showlegend,
            opacity : this.opacity,
            x : this.x,
            high : this.high,
            close : this.close,
            open : this.open,
            low : this.low,
            increasing : {
                line: {
                    color: this.increasing_line_color,
                    dash: this.increasing_line_dash,
                    width: this.increasing_line_width
                }
            },
            decreasing : {
                line: {
                    color: this.decreasing_line_color,
                    dash: this.decreasing_line_dash,
                    width: this.decreasing_line_width
                }
            }
        }
    }
}