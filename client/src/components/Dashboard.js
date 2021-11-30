import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Dashboard( { tickets } ) {
    
    var totalCancel = 0
    var totalCancelLost = 0
    var totalSell = 0
    var totalEarned = 0
    var sellersStats = []
    var sellersStatsPro = []
    var sellersStatsSuperPro = []
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

    tickets.map(ticket =>{
        ticket.products.forEach(product =>{
            sellersStats.push({name:product.name, qty:product.qty })
        })
        return true         
    })

    sellersStats.forEach(product =>{
        let exist = sellersStatsPro.findIndex( (obj) => obj.name === product.name)
        if(exist === -1){
            sellersStatsPro.push(product)
        }else{
            sellersStatsPro[exist] = {name: product.name,
                                    qty: sellersStatsPro[exist].qty + product.qty
                                    }
        }
    })


    sellersStatsSuperPro = sellersStatsPro.sort((a, b) => {
        return a.qty - b.qty;
    });
    
    bestSellers = sellersStatsSuperPro.slice(-5)
    worstSellers = sellersStatsSuperPro.slice(0,5)

    return (
        <>
        <div className="wrapper2">
            <h1>Total Cancelations: {totalCancel}</h1>
            <h1>Total money lost from Cancelations: ${totalCancelLost}</h1>
            <h1>Total Sells: {totalSell}</h1>
            <h1>Total money earned: ${totalEarned}</h1>
        </div>
        <div className="wrapper2">
            <h2 style={{textAlign:"center"}}>Best Sellers</h2>
            <BarChart
            width={700}
            height={300}
            data={bestSellers}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="qty" fill="#8884d8" />
            </BarChart> 
        </div>
        <div className="wrapper2">
            <h2 style={{textAlign:"center"}}>Worst Sellers</h2>
            <BarChart
            width={700}
            height={300}
            data={worstSellers}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="qty" fill="#8884d8" />
            </BarChart> 
        </div>
        </>
    )
}

export default Dashboard
