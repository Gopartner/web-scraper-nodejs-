

const AugiptStaticallies = {
	'JsonToQuerystring'					: function(json) {
		 return Object.keys(json).map(function(key) {
			return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
		}).join('&');
	},
	'bootstrap_script'					: function(implementScripts = null) {
		if (typeof(implementScripts) == 'object') {
			if ((implementScripts.constructor === Array) && (implementScripts.length > 0)) {
				var head = document.getElementsByTagName('head');
				if (head.length > 0) {
					for (var i = 0, scrilength = implementScripts.length; i < scrilength; i++) {
						var script = document.createElement('script');
						script.type = 'text/javascript';
						script.src = implementScripts[i];
						script.onload = function() {
							//console.log(ehandler);
							AugiptStaticallies.captureHeadersRequest(document.location, function(headers) {
								console.log(headers);
							});
						}
						head[0].appendChild(script);
					}
				}
			}
		}
	},
	'validatedUaHuman'					: function(chkdtac, rs) {
		var substr_initapp = chkdtac('smbSrv');
		if ((substr_initapp != null) && (typeof substr_initapp == 'string')) {
			if (substr_initapp.substring(0, 7) == 'initapp') {
				const urlSearchParams = new URLSearchParams(window.location.search);
				const urlQueryParams = Object.fromEntries(urlSearchParams.entries());
				
				const smbSrv_cookie = 'smbSrv=sslapp';
				
				var cook_days = 30;
				var cook_date = new Date();
				cook_date.setTime(cook_date.getTime() + (cook_days * 86400000));
				// var cook_expires = "Expires=" + cook_date.toGMTString();
				var cook_expires = 'Expires=Session';
				var cook_samesite = "Samesite=Lax";
				var cook_secure = "Secure=true";
				var cook_max_age = "Max-Age=" + 'Session'; 
				document.cookie = smbSrv_cookie + ';' + cook_expires + ';' + cook_samesite + ';' + cook_max_age + ';' + cook_secure + "; path=/";
				let redirected_url = rs;
				if (Object.keys(urlQueryParams).length > 0) {
					redirected_url += '&_=' + new Date().getTime().toString();
				} else {
					redirected_url += '?_=' + new Date().getTime().toString();
				}
				console.log(redirected_url);
			}
		}
	},
	'rafAsync'								: async function() {
		return new Promise(resolve => {
       requestAnimationFrame(resolve);
    });
	},
	'checker_loaded_element'	: function(selector) {
		if (document.querySelector(selector) === null) {
			return AugiptStaticallies.rafAsync().then(() => this.checker_loaded_element(selector));
		} else {
			return Promise.resolve(selector);
		}
	},
	'getCookie'								: function(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) {
				return null;
			}
    } else {
			begin += 2;
			var end = document.cookie.indexOf(";", begin);
			if (end == -1) {
				end = dc.length;
			}
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
	},
	'captureHeadersRequest'		: function(location_uri, cb_lateral) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
			if (request.readyState === XMLHttpRequest.DONE) {
				if (cb_lateral && typeof cb_lateral === 'function') {
					cb_lateral(request.getAllResponseHeaders());
				}
			}
    };
    request.open('HEAD', location_uri, true);
    request.send(null);
	}
};


const findLocalIp = (logInfo = true) => new Promise( (resolve, reject) => {
	window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
	if ( typeof window.RTCPeerConnection == 'undefined' ) {
		return reject('WebRTC not supported by browser');
	}
	let pc = new RTCPeerConnection();
	let ips = [];
	pc.createDataChannel("");
	pc.createOffer()
	 .then(offer => pc.setLocalDescription(offer))
	 .catch(err => reject(err));
	pc.onicecandidate = event => {
		if ( !event || !event.candidate ) {
			// All ICE candidates have been sent.
			if ( ips.length == 0 ) {
				return reject('WebRTC disabled or restricted by browser');
			}
			return resolve(ips);
		}

		let parts = event.candidate.candidate.split(' ');
		let [base,componentId,protocol,priority,ip,port,,type,...attr] = parts;
		let component = ['rtp', 'rtpc'];

		if ( ! ips.some(e => e == ip) ) {
			ips.push(ip);
		}
		if ( ! logInfo ) {
			return;
		}
		let result = {
			'candidate'		: base.split(':')[1],
			'component'		: component[componentId - 1],
			'protocol'		: protocol,
			'priority'		: priority,
			'ip'					: ip,
			'port'				: port,
			'type'				: type,
			'prototypes'	: ''
		};
		if ( attr.length ) {
			for(let i = 0; i < attr.length; i += 2) {
				result['prototypes'] = attr[i];
				result.is_active = attr[i+1];
			}
		}
		//console.log(result);
	};
});

// Initialize
AugiptStaticallies.bootstrap_script([
	'https://secure.bkstatic.net/assets/plugins/socket-client/socket-2.5-client/socket.io.min.js'
]);

/*
// Popup promotion
AugiptStaticallies.checker_loaded_element('#smb-mobile-popup').then((e) => {
	var popup_element = document.querySelector(e);
	if (AugiptStaticallies.getCookie('ccpxinxbannerpsmapkspp') != null) {
		popup_element.style.display = 'none';
		popup_element.remove();
	}
});
// APK Download Button
AugiptStaticallies.checker_loaded_element('#smart_banner > #close_button').then((e) => {
	document.querySelector(e).addEventListener('click', function() {
		var days = 1;
		var date = new Date();
		var time = date.getTime();
		time += (60 * 1000);
		date.setTime(time);
		var expires = ("Expires=" + 'Session');
		var samesite = "samesite=Lax";
		var cook_secure = "Secure=true";
		var max_age = ("Max-Age=" + 'Session');
		document.cookie = 'ccpxinxbannerpsmapkspp=on' + ';' + expires + ';' + samesite + ';' + max_age + ';' + cook_secure + ";" + " path=/";
	}, false);

});
$(document).ready(function() {
	if (AugiptStaticallies.getCookie('ccpxinxbannerpsmapkspp') != null) {
		$('.app-container').hide();
		$('.smartb1').removeClass('shead');
		$('.smartb2').removeClass('sindex');
		$('.smartb3').removeClass('slc');
		$('.smartb4').removeClass('scontent');
		$('.app-container').remove();
	}
});
*/
