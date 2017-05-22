$(document).ready(function()
{
	
});

function openIframe(src)
{
	$('iframe',document).remove();
	let iframe = document.createElement('iframe');
	let html = '<body>Opened with LTI Redirect attribute set to true, reading the query params from the map object</body>';
	if(src == 2)
		html = '<body>Opened with LTI Redirect attribute set to false, reading the query params from the window.parent</body>';
	iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
	document.body.appendChild(iframe);
	
	let toolProvider = new ToolProvider();
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
		this.queryParams = UrlUtils.retriveQueryParms();
		this.queryParams.isLTIRedirect = true;
		
		//let communicationInstance = new Communication(this.queryParams);
		//window.toolProvider.prototype = communicationInstance;
		
		if(this.queryParams.isLTIRedirect)
		{
			let communicationInstance = new Communication(this.queryParams);
			//window.toolProvider.prototype = new Communication(this.queryParams);
		}
		else
		{
			//Got to write the function when set to false
			//window.toolProvider.prototype = new Communication(this.queryParams);
		}
	}

	
}


