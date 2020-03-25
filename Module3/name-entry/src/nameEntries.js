import React from "react"

class NameEntries extends React.Component{
    
    render(){
        const {nameList} = this.props
     const names = nameList.map((inputBox, index) =>{
        return <h1 key = {index}>{inputBox}</h1>
     
     })
        return(
            <div>
                {names}
            </div>
        )
      
}
}

export default NameEntries