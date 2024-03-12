<script>
import { goto, invalidateAll, invalidate } from '$app/navigation'
    
async function deleteAgent(id) {
    const agent = await fetch(`http://backend:8000/backend/agents/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'DELETE'
    })
    .then(res => {
        if (res.status == 204){ // hot reloads the table
            // Flights.update(prev => prev.filter(flight => flight.uuid != uuid))
            // invalidate('http://127.0.0.1:5173/')
            invalidateAll()
        }
    });
}

async function deleteProtocol(id) {
    const protocol = await fetch(`http://backend:8000/backend/protocols/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'DELETE'
    })
    .then(res => {
        if (res.status == 204){ // hot reloads the table
            // Flights.update(prev => prev.filter(flight => flight.uuid != uuid))
            // invalidate('http://127.0.0.1:5173/')
            invalidateAll()
        }
    });
}

async function deleteEndpoint(id) {
    const endpoint = await fetch(`http://backend:8000/backend/endpoints/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'DELETE'
    })
    .then(res => {
        if (res.status == 204){ // hot reloads the table
            // Flights.update(prev => prev.filter(flight => flight.uuid != uuid))
            // invalidate('http://127.0.0.1:5173/')
            invalidateAll()
        }
    });
}

</script>