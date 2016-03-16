(function () {
    var githubApiService = function($http){
        var githubusers = [];

        this.getUsersCashed = function(){
            return  githubusers;
        }

        this.setUsersCashed = function(users){
            githubusers = users;
        }

        this.getUserCashed = function(username){
            if (typeof githubusers.filter === "function" && username){
                var filteredusers = githubusers.filter(function(element){
                    if (element && element.login && element.login === username && element.userdata) return 1
                    else return 0;
                });
                if (filteredusers && filteredusers[0]) return filteredusers[0].userdata
                else return {}
            }else{
                return {}
            }
        }

        this.getUsers = function(){
          var users = $http.get('https://api.github.com/users');
          return users;
        };
        this.getUser = function(username){
          var user = $http.get('https://api.github.com/users/'+username);
          return user;
        };

        this.getUserRepos = function(repolink){
          var repos = $http.get(repolink);
          return repos;
        };

        this.setUserRepos = function(username, repos){
            if (1 === 2 && typeof githubusers.every === "function" && username){
                githubusers.every(function(item, i, arr){
                    if (item.login === username ){
                        githubusers[i].userdata.repos = repos;
                        return false;
                    }
                    else return true;
                });
            }else{
                for(var item in githubusers) {
                    if (githubusers.hasOwnProperty(item)){
                        if (githubusers[item].login === username ){
                            githubusers[item].userdata.repos = repos;
                        }
                    }
                }
            }
            console.log({"users":githubusers});
        };
        this.getUserRepo = function(username,reponame){
          var repo = $http.get("https://api.github.com/repos/"+username+"/"+reponame);
          return repo;
        };
        /*
        this.setUserRepo = function(repolink){
          var repos = $http.get(repolink);
          return repos;
        };
        */
        this.getUserRepoCashed = function(username,reponame){
            if (typeof githubusers.filter === "function" && username){
                var filteredusers = githubusers.filter(function(element){
                    if (element && element.login && element.login === username && element.userdata) return 1
                    else return 0;
                });
                if (filteredusers && filteredusers[0] && filteredusers[0].userdata && filteredusers[0].userdata.repos && typeof filteredusers[0].userdata.repos.filter === "function" && reponame){
                    var repos = filteredusers[0].userdata.repos;
                    var filteredrepos = repos.filter(function(element){
                        if (element && element.name && element.name === reponame && element.commits_url) return 1
                        else return 0;
                    });
                    if (filteredrepos && filteredrepos[0]) return filteredrepos[0]
                    else return{}
                }
                else return {}
            }else{
                return {}
            }
        };

        this.getRepoCommits = function(user, repo){
          var commits = $http.get('https://api.github.com/repos/'+user+'/'+repo+'/commits');
          return commits;
        };


    };
    githubApiService.$inject = ['$http'];
    angular.module('appMLSDevTA').service('githubApiService',githubApiService);
}());