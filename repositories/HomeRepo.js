export default ($axios)=>({
  getHome(value){
    return $axios.get('everything?q='+value+'&from=2022-03-18&sortBy=publishedAt&apiKey=c2eff9224edd4d97946e20bcbc870c34')
  },
})
