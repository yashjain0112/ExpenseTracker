import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{textAlign: "center", padding: "0 10%"}}>
            Try saying: <br />
            Add {isIncome?"Income ":"Expense "}
            for &#8377;{isIncome?"100000 ":"20000 "} 
            in category {isIncome?"salary ":"food "} 
            for {isIncome?"monday ":"tuesday "}
        </div>
    )
}

export default InfoCard
