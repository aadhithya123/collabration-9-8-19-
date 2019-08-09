myApp.controller("ForumController",function($scope,$rootScope,$http,$location)
{
	$scope.forum={"forumid":0,"username":"","createdate":"","forumcontains":""}
	
	
	$scope.add=function(forum)
	{
		console.log("I'm in Forum");
		
		$scope.Forum=$rootScope.currentUser.username;
		
		$http.post('http://localhost:9092/ConnectPeopleMiddle1/addForum',forum)
		.this(function(response)
		{
			alert("Forum is the Added");
		},function(errorresponse)
		{
			alert("Problem Occured While Adding Forum");
		});
		
	}
	
	function showAllForum()
	{
		console.log("I'm in ShowAllForum");
		$http.post('http://localhost:9092/ConnectPeopleMiddle1/showAllForum')
		.then(function(reponse)
		{
			$scope.forumdetails=response.date;
		},function(errorresponse)
		{
			alert("Error Occuring While Showing the Forum");
		});
	}
	
	$scope.delete=function(forumid)
	{
		console.log("I'm in Delete Forum");
		$http.post('http://localhost:9092/ConnectPeopleMiddle1/deleteForum/'+forumid)
		.then(function(reponse)
		{
			alert("!!!Forum Successfully Deleted");
			
		},function(errorresponse)
		{
			alert("Error Ocurred While Deleting the Forum");
		});
	}
	
	$scope.editForum=function(forum)
	{
		console.log("I'm in Edit Forum");
		$location.path("/editBlog");
		$rootScope.blogtobeupdated=blog;
	}
});