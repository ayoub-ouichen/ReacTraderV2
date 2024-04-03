class Marker {
    name: string
    type: string
    visible: boolean
    showlegend: boolean
    opacity: number
    mode: string
    marker: {
        color: string,
        size: number
    }
    x: Array<number>
    y: Array<number>

    constructor(xData: Array<number>, yData: Array<number>, byOrderName: string) {
        this.name = byOrderName
        this.type = 'scatter'
        this.visible = true
        this.showlegend = true
        this.opacity = 1
        this.mode = 'markers'
        this.marker = {
            color: 'black',
            size: 8
        }
        this.x = xData
        this.y = yData
    }
}