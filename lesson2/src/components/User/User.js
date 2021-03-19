import React, {Component} from 'react';

class User extends Component {
	render() {
		let {item} = this.props
		console.log(item)
		return (
			<div>
				{item.id} - {item.name}
			</div>
		);
	}
}

export default User;