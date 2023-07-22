import React from "react";

function Clock({ Seconds }) {

    console.log(Seconds)
    return <div className="card d-flex flex-row digit bigCounter" style={{ width: "18rem" }}>


    <div className="card-body bigCounter digit ">
        <div className="card-body bigCounter digit ">
           <div className="littlebox"> <i class="fa-regular fa-clock "></i></div>
        </div>
        
        </div>
        <div className="card-body bigCounter digit ">
            <div className="littlebox">{Math.floor((Seconds / 100000) % 10)}</div>
        </div>

        <div className="card-body bigCounter digit ">
            <div className="littlebox">{Math.floor((Seconds / 10000) % 10)}</div>
        </div>

        <div className="card-body bigCounter digit ">
            <div className="littlebox">{Math.floor((Seconds / 1000) % 10)}</div>
        </div>
        
        <div className="card- bigCounter digit ">
            <div className="littlebox">{Math.floor((Seconds / 100) % 10)}</div>
        </div>
        
        <div className="card- bigCounter digit ">
            <div className="littlebox">{Math.floor((Seconds / 10) % 10)}</div>
        </div>
        <div className="card- bigCounter digit ">
            <div className="littlebox">{Math.floor(Seconds % 10)}
        </div>
</div>
    </div>
}
export default Clock