import Plot from 'react-plotly.js'
import { fetchPrice, priceData, setLoading } from '../../features/price/priceSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import Candlestick from '../../Classes/Candlestick';
import { plotlyData, addPlotlyData, deletePlotlyData, setPlotlyLayout } from '../../features/plotlyData/plotlyDataSlice';
import { SMAData } from '../../features/indicators/SMA_Slice';
import Line from '../../Classes/Line';

export default function ChartBody() {
    const price = useAppSelector(priceData)
    const dispatch = useAppDispatch()
    const plt_data = useAppSelector(plotlyData)
    const sma = useAppSelector(SMAData)

    useEffect(() => {
        if(price.loading === 'idle') {
            dispatch(fetchPrice(price.params))
        }
        if (price.loading === 'succeeded') {
            dispatch(deletePlotlyData('main-trace'))
            const trace1 = new Candlestick([],[],[],[],[],'main-trace')
            trace1.seTx(price.x)
            trace1.seTopen(price.open)
            trace1.seThigh(price.high)
            trace1.seTlow(price.low)
            trace1.seTclose(price.close)
            dispatch(addPlotlyData(trace1.getCandlestick()))
        }
    }, [price.loading])

    useEffect(() => {
        if (price.loading === 'succeeded') {
            dispatch(setLoading('idle'))
        }
    }, [price.params.time_frame])


    useEffect(() => {
        if (sma.loading === 'succeeded') {
            const trace1 = new Line([],[],'sma-trace')
            trace1.seTx(sma.x)
            trace1.seTy(sma.y)
            dispatch(addPlotlyData(trace1.getLine()))
        }
    }, [sma.loading])

    useEffect(() => {
        let startX = (price.x).length - parseInt(price.params.period)
        let endX  = (price.x).length - 1
        let startY = Math.min(...price.low.slice(startX, endX))
        let endY = Math.max(...price.high.slice(startX, endX))
        let xrange = [startX, endX + 10]
        let yrange = [startY, endY]
        
        dispatch(setPlotlyLayout({xRangeData: xrange, yRangeData: yrange}))
        
    }, [sma.loading, price.loading, price.params.period, price.params.time_frame])

    const data2 = structuredClone(plt_data.data);
    const layout2 = structuredClone(plt_data.layout);
    console.log(layout2);
    

    return (
        <div>
            <Plot
                data={data2}
                layout={layout2}
                useResizeHandler={true}
                style={{width: '100%', height: '100%', position: 'absolute'}}
                config={{scrollZoom: true}}
                divId='myPlot'
            />
        </div>
    )
}
