class OHLC {
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
        line: {
            color: string,
            dash: string,
            width: number
        }
    }
    decreasing: {
        line: {
            color: string,
            dash: string,
            width: number
        }
    }

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
        this.increasing = {
            line: {
                color: 'green',
                dash: 'solid',
                width: 1
            }
        }
        this.decreasing = {
            line: {
                color: 'red',
                dash: 'solid',
                width: 1
            }
        }
    }
}