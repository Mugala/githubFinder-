class GitHub {
  constructor(){
    this.client_id = '865f88da5f9ccdcb077a';
    this.client_secret = '36bb92a36bc9c90b76cbd872bdb30394e7f4f4e6';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }
}