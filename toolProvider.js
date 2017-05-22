$(document).ready(function()
{
	let toolProvider = new ToolProvider()
});

function openIframe(src)
{
	$('iframe',document).remove();
	let iframe = document.createElement('iframe');
	let html = '<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>';
	/*html+= '<script type="text/javascript" src="toolProvider.js"></script>';
	html+= '<script type="text/javascript" src="communication.js"></script>';
	html+= '<script type="text/javascript" src="urlUtils.js"></script>';*/
	
	if(src == 1)
		html+= '<body>Opened with LTI Redirect attribute set to true, reading the query params from the map object</body>';
	if(src == 2)
		html+= '<body>Opened with LTI Redirect attribute set to false, reading the query params from the window.parent</body><script>alert("In iframe");debugger;</script>';
	iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
	document.body.appendChild(iframe);
	
	//let toolProvider = new ToolProvider();
	//window.toolProvider = toolProvider;
}

class ToolProvider
{
	constructor()
	{
		this.init();
	}
	
	init()
	{
		window.toolProvider = this;
		//if(this.queryParams.isLTIRedirect)
		//{
			//let communicationInstance = new Communication(window.location.href);
			this.communication = new Communication(window.location.href);
		//}
		//else
		//{
			//Got to write the function when set to false
			//window.toolProvider.prototype = new Communication(this.queryParams);
		//}
	}
}


