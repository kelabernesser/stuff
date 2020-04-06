import React from "react"
import HitComponent from "./hitComponent"


class hitList extends React.Component {
    constructor() {
        super()
        this.state = {
            hits: []
        }
    }
    //storing an array of targets in state
    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then((data) =>{
            this.setState({
                hits: data
            })
        })
    }

    
  
    render() {
        let Hits = this.state.hits.map((hit) => {
            return <HitComponent name={hit.name} image={hit.image} />
        })
        return Hits
    }
}

export default hitList