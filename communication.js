class Communication
{
	constructor(url) 
	{
		this.queryParams = UrlUtils.retriveQueryParms(url);
		this.queryParams.isLTIRedirect = true;
	}
	
	getScore()
	{
		//Call UrlUtils.fetchData 
	}
	
	setScore()
	{
		//Call UrlUtils.postData 
	}
	
	getState()
	{
		//Call UrlUtils.fetchData 
	}
	
	setState()
	{
		//Call UrlUtils.postData 
	}
	
	getPolicy()
	{
		//Call UrlUtils.fetchData 
	}
	
	setPolicy()
	{
		//Call UrlUtils.postData 
	}
}

