import sun from '../assets/sun.svg'
import water from '../assets/water.svg'


function CareScale ({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? 
    <img src={sun} alt='Soleil' /> : <img src={water} alt='Eau' />
    
    function alertQuantity() {
        const quantityLabel = {
            1: 'peu',
            2: 'modérément',
            3: 'beaucoup'
        }
    
        alert(
            `Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`
        )
    }

    return (
        <div onClick={() => alertQuantity()}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale