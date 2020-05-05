export default ({ store, redirect }) => {
  if(!store.$auth.hasScope('admin')){
      return redirect('/admin/login');
  }
}
