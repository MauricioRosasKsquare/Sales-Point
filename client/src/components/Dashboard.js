//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Dashboard( { tickets } ) {
    
    var totalCancel = 0
    var totalCancelLost = 0
    var totalSell = 0
    var totalEarned = 0
    var sellersStats = []
    var bestSellers = []
    var worstSellers = []
    
    tickets.map(ticket =>{
        
            if(ticket.status === "Canceled"){
               totalCancel = totalCancel + 1
               totalCancelLost = totalCancelLost + ticket.total
            }else{
                totalSell = totalSell + 1
                totalEarned = totalEarned + ticket.total
            }


        return [totalCancel, totalCancelLost,totalSell,totalEarned]
    })

    const asd = {
        name: product.name
    }

    tickets.map(ticket =>{
        ticket.products.map(product =>{
            
            if(sellersStats.find( {name: product.name})){
                
            }else{
                sellersStats.push(product.name)
            }
        })
    })
    
    
    
    return (
        <>
        <div>
            <h1>Total Cancelations: {totalCancel}</h1>
            <h1>Total money lost from Cancelations: ${totalCancelLost}</h1>
            <h1>Total Sells: {totalSell}</h1>
            <h1>Total money earned: ${totalEarned}</h1>
        </div>
        </>
    )
}

export default Dashboard
