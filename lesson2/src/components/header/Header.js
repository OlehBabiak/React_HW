import React, {Component} from 'react';
import './header.css'
class Header extends Component {
	state ={
		counter:0
}
	increment = () => {
		this.setState({counter: ++this.state.counter})
		console.log(this.state.counter)
	}
	decrement = () => {
		this.setState({counter: --this.state.counter})
		console.log(this.state.counter)
	}
	render() {
		console.log('render')
		return (
			<div className={'target'}>
				<button
					onClick={this.increment}>
					Click me +
				</button>
				
				<button
					onClick={this.decrement}>
					Click me -
				</button>
				
				<p>{this.state.counter}</p>
			</div>
		);
	}
}


export default Header;