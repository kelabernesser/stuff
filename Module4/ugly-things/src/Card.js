import React from "react"
import {UglyContextConsumer} from "./uglyContext"

class Card extends React.Component {
    state ={
        editToggle: false, 
        imgSrc : null
    }
    edit = () => {
        this.setState(prevState => ({
            editToggle: true
        }))
    }
    reSubmit = (e) => {
        
        e.preventDefault()
        this.props.editMethod(this.props.id,e.target.parentNode[0].value, e.target.parentNode[1].value, e.target.parentNode[2].value)
        e.target.parentNode[0].value = "";
        e.target.parentNode[1].value = "";
        e.target.parentNode[2].value = "";
        this.setState({editToggle: false});
    }
    returnImg = (e) => {
        const{value} = e.target
        this.setState({imgSrc : value})
    }
    


    render() {
        return (
       
                    
                    
                    <div>
                        
                        <div className = "inputMain"> 

                            <h3 className = "result-title">{this.props.title}</h3>
                            <h4 className = "result-description">{this.props.description}</h4>
                            <img className = "result-image"src={this.props.imgUrl} />
                            <div className = "button-container">
                                <button className = "delete-button"onClick = {() => this.props.deleteMethod(this.props.id)}>Delete Ugly</button>
                                <button className = "edit-button" onClick = {this.edit}>Edit Ugly</button>
                            </div>
                        </div>
                        {this.state.editToggle === true ? 
                        <div>
                            <h1 className = "edit-title">edit</h1>
                            <form className = "editContainer">
                            <input className = "edits" placeholder = "title" defaultValue = {this.props.title}/>
                            <input className = "edits" placeholder = "description" defaultValue = {this.props.description}/>
                            <input className = "edits" onClick = {this.returnImg} placeholder = "img" defaultValue = {this.props.img}/>
                            <button onClick = {this.reSubmit}>Submit</button>
                            </form>
                            <img className = "result-image"src = {this.state.imgSrc !== null ? this.state.imgSrc : this.props.imgUrl} />
                        </div>
                        : null}

                    </div>

            
        )













        // return(
        //     <div>
        //         <div id = {this.props.count}>
        //             <h3>{this.props.title}</h3>
        //             <h4>{this.props.description}</h4>
        //             <img src = {this.props.imgUrl}/>
        //             <button onClick = {this.delete}>Delete</button>
        //         </div>

        //     </div>
        // )
    }

}

export default Card