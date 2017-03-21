import React from 'react';
import ReactDOM from 'react-dom';
import ReactYTAudio from './src-lib/player.js';

console.log(ReactYTAudio)

const SomeComponent = React.createClass({
	render: function(){
		console.log('whoa!')
		return <div>
			<h1>Owoooooooooo!</h1>
		</div>
	}
})

ReactDOM.render(<div>
		<ReactYTAudio videoId='X3yHzw_JHTY'/>
		<ReactYTAudio videoId='JiTH4oR345o'/>

</div>
, document.querySelector('#app-container'))