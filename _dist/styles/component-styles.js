'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _triangleShape;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var timeBarOverlay = exports.timeBarOverlay = {
	width: '100%',
	height: '100%',
	top: '0', left: '0',
	position: 'absolute',
	zIndex: 2,
	opacity: 0
};

var timeBarStyles = exports.timeBarStyles = {
	width: "100%",
	height: "3px",
	borderRadius: "10px",
	background: "#aaa",
	position: 'absolute',
	top: '50%',
	left: '0',
	transform: 'translateY(-50%)',
	zIndex: 1
};

var innerScrubStyle = exports.innerScrubStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	height: '8px',
	width: '8px',
	background: '#67809F',
	borderRadius: '50%'
};

var scrubberDefaultStyle = exports.scrubberDefaultStyle = {
	position: 'absolute',
	display: 'block',
	borderRadius: '50%',
	height: '20px',
	width: '20px',
	top: '50%',
	left: '0%',
	transform: 'translate(-50%, -50%)',
	transition: '.2s all',
	background: '#333',
	zIndex: 3
};

var scrubberContainerStyle = exports.scrubberContainerStyle = {
	padding: '10px'
};

var togglePlayPauseStyle = exports.togglePlayPauseStyle = {
	border: '2px solid #666',
	background: '#fff',
	display: 'inline-block',
	textAlign: 'center',
	width: '50px',
	height: '50px',
	borderRadius: '50%',
	position: 'absolute',
	'top': '0',
	'right': '0',
	boxSizing: 'border-box'
};

var rectangleShape = exports.rectangleShape = {
	width: '25px',
	height: '25px',
	background: '#C0392B'
};

var pauseShape = exports.pauseShape = _defineProperty({
	width: '20px',
	height: '25px',
	boxSizing: 'border-box',
	borderLeft: '8px solid #67809F',
	borderRight: '8px solid #67809F',
	margin: '0 auto',
	absolute: 'position',
	top: '50%',
	left: '50%',
	position: 'absolute',
	transform: 'translate(-50%, -50%)',
	animation: 'all .2s'
}, 'boxSizing', 'border-box');

var triangleShape = exports.triangleShape = (_triangleShape = {
	width: 0,
	height: 0,
	borderLeft: '18px solid #67809F',
	borderTop: '12px solid transparent',
	borderBottom: '12px solid transparent',
	margin: '0 auto',
	transform: 'translateX(2px)',
	position: 'absolute',
	top: '50%',
	left: '50%'
}, _defineProperty(_triangleShape, 'transform', 'translate(-48%, -50%)'), _defineProperty(_triangleShape, 'animation', 'all .2s'), _triangleShape);

var titleStyle = exports.titleStyle = {
	margin: '0 0 0 0',
	lineHeight: 1.5,
	fontSize: "21px",
	color: '#333',
	fontWeight: 200
};

var authorStyle = exports.authorStyle = {
	margin: '0 0 0 0',
	paddingLeft: "15px",
	lineHeight: 1.5,
	fontSize: "16px",
	color: '#666',
	fontWeight: 400
};

var collectionStyle = exports.collectionStyle = {
	margin: '0 0 0 0',
	paddingLeft: "15px",
	lineHeight: 1.5,
	fontSize: "12px",
	color: '#aaa',
	fontWeight: 200
};