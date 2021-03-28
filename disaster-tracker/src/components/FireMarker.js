import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/pine-tree-fire'

// Returns an fire icon 

const FireMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker fire-marker" onClick={onClick}>
            <Icon icon={fireIcon} className="location-icon" />
        </div>
    )
}

export default FireMarker
