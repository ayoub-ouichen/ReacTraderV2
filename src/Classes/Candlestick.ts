class Candlestick {
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
    increasing_fillcolor: string
    increasing_line_color: string
    increasing_line_width: number
    decreasing_fillcolor: string
    decreasing_line_color: string
    decreasing_line_width: number
    connectgaps: boolean

    constructor(xData: Array<number>, highData: Array<number>, closeData: Array<number>, openData: Array<number>, lowData: Array<number>, byOrderName: string) {
        this.name = byOrderName
        this.type = 'candlestick'
        this.visible = true
        this.showlegend = true
        this.opacity = 1
        this.x = xData
        this.high = highData
        this.close = closeData
        this.open = openData
        this.low = lowData
        this.increasing_fillcolor = 'yellow'
        this.increasing_line_color = 'green'
        this.increasing_line_width = 1
        this.decreasing_fillcolor = 'orange'
        this.decreasing_line_color = 'red'
        this.decreasing_line_width = 1
        this.connectgaps = true
    }

    getCandlestick() {
        return {
            name: this.name,
            type: this.type,
            visible: this.visible,
            showlegend: this.showlegend,
            opacity: this.opacity,
            x: this.x,
            high: this.high,
            close: this.close,
            open: this.open,
            low: this.low,
            increasing: {
                fillcolor: this.increasing_fillcolor,
                line: {
                    color: this.increasing_line_color,
                    width: this.increasing_line_width
                }
            },
            decreasing: {
                fillcolor: this.decreasing_fillcolor,
                line: {
                    color: this.decreasing_line_color,
                    width: this.decreasing_line_width
                }
            },
            connectgaps: this.connectgaps
        }
    }

    seTx(x: Array<any>){
        this.x = x
    }

    seTopen(open: Array<number>){
        this.open = open
    }

    seThigh(high: Array<number>){
        this.high = high
    }

    seTlow(low: Array<number>){
        this.low = low
    }

    seTclose(close: Array<number>){
        this.close = close
    }
    seTconnectgaps(connectgaps: boolean) {
        this.connectgaps = connectgaps
    }
}

export default Candlestick