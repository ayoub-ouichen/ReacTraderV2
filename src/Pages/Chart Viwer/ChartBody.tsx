import Plot from 'react-plotly.js'
import { fetchPrice, priceData } from '../../features/price/priceSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import Candlestick from '../../Classes/Candlestick';

export default function ChartBody() {
    const [data, setData] = useState(Array<any>)
    var layout: any
    const price = useAppSelector(priceData)
    const dispath = useAppDispatch()
    const trace1 = new Candlestick([],[],[],[],[],'trace-01')

    const params = {
        from_date: '2020-01-01',
        to_date: '2024-03-01',
        time_frame: 'D1',
        symbol: 'GBPJPY'
    }
    
    useEffect(() => {
        if(price.loading === 'idle') {
            dispath(fetchPrice(params))
        }
        if (price.loading === 'succeeded') {
            trace1.seTx(price.x)
            trace1.seTopen(price.open)
            trace1.seThigh(price.high)
            trace1.seTlow(price.low)
            trace1.seTclose(price.close)
            setData([trace1.getCandlestick()])
            
        }
    }, [price.loading])

    layout = {
        dragmode: 'zoom', 
        margin: {
        r: 60, 
        t: 60, 
        b: 60, 
        l: 60
        }, 
        showlegend: false, 
        xaxis: {
            rangebreaks:[
                {
                    bounds: ['sat', 'mon']
                }
            ],
            rangeslider: {
                visible: false
            }
        },
        yaxis: {
          side: 'right'
        }
    };

    return (
        <div>
            <Plot
                data={data}
                layout={layout}
                useResizeHandler={true}
                style={{width: '100%', height: '100%', position: 'absolute'}}
            />
        </div>
    )
}
