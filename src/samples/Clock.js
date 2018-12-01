import React, {useState, useEffect} from 'react'

export default () => {
    const [clock, setClock] = useState((new Date()).toISOString())

    useEffect(() => {
        setTimeout( () => setClock((new Date).toISOString()), 1100)
    })

    return (
        <div style={{fontWeight: '900'}}>{clock}</div>
    )
}