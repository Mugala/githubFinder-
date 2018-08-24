class GitHub {
  constructor(){
    this.client_id = '865f88da5f9ccdcb077a';
    this.client_secret = '36bb92a36bc9c90b76cbd872bdb30394e7f4f4e6';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id =${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}


