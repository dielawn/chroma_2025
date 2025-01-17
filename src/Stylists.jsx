import {  salonInfo, stylists} from '/src/salon_info.js'

const StylistCard = () => {

    return (
        <div>
            {stylists.map((stylist, index) => (
                <div key={index}>
                    <h3>{stylist.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default StylistCard