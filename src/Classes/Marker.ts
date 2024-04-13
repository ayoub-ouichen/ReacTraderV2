class Marker {
    name: string
    type: string
    visible: boolean
    showlegend: boolean
    opacity: number
    mode: string
    marker_color: string
    marker_size: number
    x: Array<any>
    y: Array<number>

    constructor(xData: Array<number>, yData: Array<number>, byOrderName: string) {
        this.name = byOrderName
        this.type = 'scatter'
        this.visible = true
        this.showlegend = true
        this.opacity = 1
        this.mode = 'markers'
        this.marker_color = 'black'
        this.marker_size = 8
        this.x = xData
        this.y = yData
    }

    getMarker() {
        return {
            name: this.name,
            type: this.type,
            visible: this.visible,
            showlegend: this.showlegend,
            opacity: this.opacity,
            mode: this.mode,
            marker_color: this.marker_color,
            marker_size: this.marker_size,
            x: this.x,
            y: this.y
        }
    }
}