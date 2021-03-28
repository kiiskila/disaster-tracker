import { Icon } from '@iconify/react'
import icebergIcon from '@iconify/icons-mdi/lifebuoy'

// returns an iceberg icon

const IcebergMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker iceberg-marker" onClick={onClick}>
            <Icon icon={icebergIcon} className="location-icon" />
        </div>
    )
}

export default IcebergMarker
