import React from 'react';
import ReactDOM from 'react-dom';
import ReactYTAudio from './src-lib/player.js';

console.log(ReactYTAudio)


ReactDOM.render(<div>
		<ReactYTAudio videoId='X3yHzw_JHTY' name="Khruangbin" title="Dern Kala" collection="The Universe Smiles Upon You"/>
		<ReactYTAudio videoId='JiTH4oR345o' name="Los Invasores" title="El Raton" collection=""/>
</div>
, document.querySelector('#app-container'))