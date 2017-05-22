class UrlUtils
{
	static retriveQueryParms() 
	{		
		let vars = {}, hash;
		let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(let i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
	
	static fetchData()
	{
		alert("In urlUtils");
		$.ajax({
		  method: "POST",
		  url: "",
		  data: {},
		  success: function(){},
		  error: function(){}
		});
	}
	
	static postData()
	{
		alert("In urlUtils");
		$.ajax({
		  method: "POST",
		  url: "",
		  data: {},
		  success: function(){},
		  error: function(){}
		});
	}
}