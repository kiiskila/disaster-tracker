import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify/icons-wi/volcano'

// returns a volcano icon

const VolcanoMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker volcano-marker" onClick={onClick}>
            <Icon icon={volcanoIcon} className="location-icon" />
        </div>
    )
}

export default VolcanoMarker
