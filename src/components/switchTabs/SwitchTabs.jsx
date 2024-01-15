import React, { useState } from 'react'
import "./style.switchTabs.scss"

function SwitchTabs({data, onTabChange}) {
    const [selectedTab, setSelectedTab] = useState(0) //passing index as initial state
    const [left, setLeft] = useState(0)

    const activeTab= (tab, index) => {
        setLeft(index * 100)
        setTimeout(()=>{
            setSelectedTab(index)
        },300)
        onTabChange(tab, index)
    }

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {
                    data.map((tab, i)=>(
                        <span
                            key={i}
                            className={`tabItem ${selectedTab === i ? "active" : ""}`}
                            onClick={()=> activeTab(tab, i)}
                        >
                            {tab}
                        </span>
                    ))
                }
                <span className="movingBg" style={{left:left}} />
            </div>
        </div>
    )
}

export default SwitchTabs