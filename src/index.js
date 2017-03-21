import React from 'react';
import ReactDOM from 'react-dom';
import ReactYTAudio from './src-lib/player.js';

console.log(YoutubeAudio)

const SomeComponent = React.createClass({
	render: function(){
		console.log('whoa!')
		return <div>
			<h1>Owoooooooooo!</h1>
		</div>
	}
})

ReactDOM.render(<div>
		<YoutubeAudio videoId='X3yHzw_JHTY'/>
		<YoutubeAudio videoId='JiTH4oR345o'/>

</div>
, document.querySelector('#app-container'))