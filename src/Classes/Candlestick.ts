class Candlestick {
    name: string
    type: string
    visible: boolean
    showlegend: boolean
    opacity: number
    x: Array<number>
    high: Array<number>
    close: Array<number>
    open: Array<number>
    low: Array<number>
    increasing: {
        fillcolor: string,
        line: {
            color: string,
            width: number
        }
    }
    decreasing: {
        fillcolor: string,
        line: {
            color: string,
            width: number
        }
    }

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
        this.increasing = {
            fillcolor: 'green',
            line: {
                color: 'green',
                width: 1
            }
        }
        this.decreasing = {
            fillcolor: 'red',
            line: {
                color: 'red',
                width: 1
            }
        }
    }
}