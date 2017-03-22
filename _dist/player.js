'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mouse = require('./utils/mouse.js');

var _componentStyles = require('./styles/component-styles.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_React$Component) {
	_inherits(Player, _React$Component);

	function Player(props) {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

		console.log('props...');
		_this.state = {
			videoId: _this.props.videoId,
			isPlaying: false,
			currentTime: 0,
			scrubberStyle: _componentStyles.scrubberDefaultStyle,
			scrubberIsDragging: false
		};

		_this._handlePlay = _this._handlePlay.bind(_this);
		_this._handlePause = _this._handlePause.bind(_this);
		_this._handleStop = _this._handleStop.bind(_this);
		_this._execPlayVideo = _this._execPlayVideo.bind(_this);
		_this._handleTimebarClick = _this._handleTimebarClick.bind(_this);
		_this._handleScrubberDrag = _this._handleScrubberDrag.bind(_this);
		_this._handlePlayPauseClick = _this._handlePlayPauseClick.bind(_this);
		return _this;
	}

	_createClass(Player, [{
		key: '_handlePause',
		value: function _handlePause() {
			this._player.pauseVideo();
			this.setState({
				isPlaying: false
			});
			clearInterval(this._intervalId);
		}
	}, {
		key: '_handleStop',
		value: function _handleStop() {
			this._player.stopVideo();
			this.setState({
				isPlaying: false,
				currentTime: 0,
				scrubberStyle: Object.assign({}, this.state.scrubberStyle, { left: '0%' })
			});

			clearInterval(this._intervalId);
		}
	}, {
		key: '_handlePlay',
		value: function _handlePlay() {
			var component = this;
			if (!this._player) {
				this._player = new YT.Player('yt_id_' + this.state.videoId, {
					height: '200',
					width: '200',
					videoId: this.state.videoId,
					events: {
						onReady: component._execPlayVideo
					}
				});
			} else {
				this._execPlayVideo();
			}
		}
	}, {
		key: '_execPlayVideo',
		value: function _execPlayVideo() {
			var _this2 = this;

			if (this.state.isPlaying) {
				return;
			}

			var currentScrubberPos = parseFloat(this.state.scrubberStyle.left.slice(0, -1)) / 100;
			var videoDuration = this._player.getDuration();
			var startingTime = this._player.getCurrentTime();

			this._intervalId = setInterval(function () {
				console.log('starting interval...');
				var newCurrentTime = _this2._player.getCurrentTime();
				console.log(newCurrentTime);
				var videoDuration = _this2._player.getDuration();

				_this2.setState({
					currentTime: newCurrentTime,
					videoDuration: videoDuration,
					scrubberStyle: Object.assign({}, _this2.state.scrubberStyle, { left: newCurrentTime / videoDuration * 100 + '%' })
				});
			}, 60);

			this._player.seekTo(currentScrubberPos * videoDuration);
			this._player.playVideo();
			this.setState({
				currentTime: this._player.getCurrentTime(),
				isPlaying: true
			});
		}
	}, {
		key: '_handleTimebarClick',
		value: function _handleTimebarClick(e) {
			var _this3 = this;

			var mousePosX = (0, _mouse.mousePositionElement)(e).x;
			var barWidth = this.refs.timeBar.offsetWidth;
			var stateObj = {};

			if (this._player) {
				console.log(this._player.getDuration());
				var seekedTime = mousePosX / barWidth * this._player.getDuration();
				this._player.seekTo(seekedTime);
				stateObj.currentTime = seekedTime;
				stateObj.scrubberStyle = Object.assign({}, this.state.scrubberStyle, { left: mousePosX / barWidth * 100 + '%' });
			}
			setTimeout(function () {
				_this3.setState(stateObj);
			}, 60);
		}
	}, {
		key: '_handleScrubberDrag',
		value: function _handleScrubberDrag(e) {
			console.log(e);
			if (e.type === 'mousedown') {
				this.setState({
					scrubberIsDragging: true
				});
			}

			if (e.type === 'mouseup' && this.state.scrubberIsDragging) {
				console.log('drop the scrubber');
				var _mousePosX = (0, _mouse.mousePositionElement)(e).x;
				var _barWidth = this.refs.timeBar.offsetWidth;
				var seekedTime = void 0;
				if (this._player) {
					seekedTime = _mousePosX / _barWidth * this._player.getDuration();
					this._player.seekTo(seekedTime);
				}
				this.setState({
					scrubberIsDragging: false,
					scrubberStyle: Object.assign({}, this.state.scrubberStyle, { left: _mousePosX / _barWidth * 100 + '%' })
				});
			}
		}
	}, {
		key: '_getTimeFromTimebar',
		value: function _getTimeFromTimebar(xPos, width) {
			var seekedTime = mousePosX / barWidth * this._player.getDuration();
			return seekedTime;
		}
	}, {
		key: '_showPlayOrPauseButton',
		value: function _showPlayOrPauseButton(isPlaying) {
			var jsxEl = void 0;
			if (isPlaying) {
				jsxEl = _react2.default.createElement('div', { style: _componentStyles.pauseShape, onClick: this._handlePause });
			} else {
				jsxEl = _react2.default.createElement('div', { style: _componentStyles.triangleShape, onClick: this._handlePlay });
			}
			return jsxEl;
		}
	}, {
		key: '_handlePlayPauseClick',
		value: function _handlePlayPauseClick() {
			if (this.state.isPlaying) {
				this._handlePause();
			} else {
				this._handlePlay();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var currentSeconds = parseInt(this.state.currentTime) % 60;
			return _react2.default.createElement(
				'div',
				{ style: { fontFamily: 'sans-serif', maxWidth: '400px', position: 'relative', paddingBottom: '12px' } },
				_react2.default.createElement(
					'div',
					{ style: { position: 'relative' } },
					_react2.default.createElement(
						'div',
						{ style: { marginRight: '50px', height: '75px' } },
						_react2.default.createElement(
							'h3',
							{ style: _componentStyles.titleStyle },
							this.props.title
						),
						_react2.default.createElement(
							'h4',
							{ style: _componentStyles.authorStyle },
							this.props.name
						),
						_react2.default.createElement(
							'h5',
							{ style: _componentStyles.collectionStyle },
							this.props.collection
						)
					),
					_react2.default.createElement(
						'div',
						{ style: _componentStyles.togglePlayPauseStyle, onClick: this._handlePlayPauseClick },
						this._showPlayOrPauseButton(this.state.isPlaying)
					)
				),
				_react2.default.createElement(
					'div',
					{ style: _componentStyles.scrubberContainerStyle },
					_react2.default.createElement(
						'div',
						{ className: 'yt-media-player', style: { position: 'relative', width: '100%', height: '20px' } },
						_react2.default.createElement('div', { style: _componentStyles.timeBarOverlay, onClick: this._handleTimebarClick, ref: 'timeBar', onMouseUp: this._handleScrubberDrag }),
						_react2.default.createElement('div', { style: _componentStyles.timeBarStyles }),
						_react2.default.createElement(
							'span',
							{ style: this.state.scrubberStyle, onMouseDown: this._handleScrubberDrag },
							_react2.default.createElement('span', { style: _componentStyles.innerScrubStyle })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ style: { textAlign: 'right', fontSize: '16px' } },
					_react2.default.createElement(
						'span',
						null,
						' ',
						Math.floor(this.state.currentTime / 60)
					),
					' : ',
					_react2.default.createElement(
						'span',
						null,
						' ',
						currentSeconds < 10 ? '0' + currentSeconds : '' + currentSeconds
					)
				),
				_react2.default.createElement(
					'div',
					{ style: { display: 'none' } },
					_react2.default.createElement('div', { id: 'yt_id_' + this.state.videoId })
				),
				_react2.default.createElement(
					'span',
					{ style: { position: 'absolute', bottom: 0, right: 0, fontSize: '8px' } },
					'Powered by YouTube'
				)
			);
		}
	}]);

	return Player;
}(_react2.default.Component);

exports.default = Player;