import React from "react"
import Card from "./Card"
class Container extends React.Component{
    
    
    render(){
        const show = this.props.uglyArr.map((item, i) => {
            return (
                
                <Card 
                     key = {i}
                     id = {i}
                     editMethod = {this.props.editMethod}
                     deleteMethod = {this.props.deleteMethod}
                     title = {item.title}
                     description = {item.description}
                     imgUrl = {item.imgUrl} 
                />
                
            )
            
        })
        
        return(
            
            <div>
                {show}
            </div>
        )
    }
}
export default Container