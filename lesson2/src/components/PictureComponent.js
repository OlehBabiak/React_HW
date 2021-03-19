import React, {Component} from 'react';


class PictureComponent extends Component {
	render() {
		
		let {msg, iUrl} = this.props
		return (
			<div className={'bmw'}>
				<h3>{msg}</h3>
				<img src={iUrl} alt=""/>
			</div>
		);
	}
}

export default PictureComponent;