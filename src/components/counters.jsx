import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    
    
    render() {
        return (  
            <div>
                <button onClick={()=>this.props.onReset()}
                    className = "btn btn-primary btn-sm m-2">
                         Reset
                     </button>
               {this.props.counters.map((v,i) => (
                   <Counter 
                   key={v.id}
                   onDelete={tab=>this.props.onDelete(tab)}
                   onIncrement={tab=>this.props.onIncrement(tab)}
                   onDecrement={tab=>this.props.onDecrement(tab)}

                  v={v}/>
                         ))}
            </div>
        )
    }
}

export default Counters
