import React, {Component} from 'react';

class Counter extends Component{
	

	styles = {
		fontSize:20,
		fontWeight:'bold'
	}

	render(){
		
		return(
			<div>
			
				
				<button 
					onClick={() =>this.props.onDecrement(this.props.v)} 
					className="btn btn-secondary btn-sm">
						Decrement
						</button>
				<span style={this.styles}  className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button 
					onClick={() =>this.props.onIncrement(this.props.v)} 
					className="btn btn-secondary btn-sm">
						Increment
						</button>
				<button 
					onClick={()=>this.props.onDelete(this.props.v.id)}
					 className="btn btn-danger btn-sm m-2">
						 Delete
						 </button>
					
					
		 	</div>
		);
	}

	
	

	getBadgeClasses() {
		let classes = "badge m-2 ";
		classes += this.props.v.value === 0 ? "badge-warning" : "badge-primary";
		return classes;
	}

	formatCount(){
		return this.props.v.value===0? 'zero': this.props.v.value

		
	}
}

export default Counter;