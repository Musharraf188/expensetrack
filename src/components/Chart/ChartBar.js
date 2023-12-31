import './ChartBar.css';

const CharBar = (props) => {
    let barFullHeight = '0%';
    if (props.maxValue > 0) {
        barFullHeight = Math.round((props.value / props.maxValue * 100)) + '0%'
    }
    return <div className='chart-bar'>
        <div className='chart-bar__inner '>
            <div
                className='chart-bar__fill'
                style={{ height: barFullHeight }}>

            </div>
        </div>
        <div className='chart-bar__label'>
            {props.label}
        </div>
    </div>
}

export default CharBar;