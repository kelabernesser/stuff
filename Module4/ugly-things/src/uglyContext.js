import React from "react"

const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends React.Component {
    state = {
        uglyArr: [],
    }
    
    submitArr = (title, description, imgUrl, e) => {
        let addArr = this.state.uglyArr.map(item => item)
        let newObj = {
            title: title,
            description: description,
            imgUrl: imgUrl,
            id: this.state.count,
            
            
        }
        addArr.push(newObj)
        this.setState(prevState =>{
            return{
                uglyArr: addArr,
            }
        })
        
    }
    

    deleteArr = (id) => {
        let filteredArr = this.state.uglyArr.filter((item, i) => {
            if(id !== i){
                return item
            }
        })
        this.setState(prevState => {
            return{
                uglyArr: filteredArr,
            }
        })
        
    }

    editArr = (id, title, description, imgUrl) => {
        this.state.uglyArr[id].title = title;
        this.state.uglyArr[id].description = description;
        this.state.uglyArr[id].imgUrl = imgUrl;
        // this.setState(prev => {
        //     return{
                
        //     }
        // });
        this.setState({})
    }
    
    
    render() {
        return (
            <Provider value={{uglyArr: this.state.uglyArr, submitArr: this.submitArr, deleteArr: this.deleteArr, editArr : this.editArr}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}