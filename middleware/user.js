export default ({ store, redirect }) => {
  if(store.getters['auth/authenticated']){
    // console.log(store.getters['auth/authenticated']);
    return redirect('/');
  }
}
