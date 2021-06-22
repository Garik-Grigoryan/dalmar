export const state = () => ({
  components: [],
  component: [],
  slider: [],
  banner: [],
});

export const mutations = {
  setComponents(state, components){
    state.components = components;
  },
  setComponent(state, component){
    state.component = component;
  },
  setSlider(state, component){
    state.slider = component;
  },
  setBanner(state, component){
    state.banner = component;
  }
}

export const actions = {
  async fetch({commit}){
    let components = await this.$axios.$get(this.$axios.defaults.baseURL+'/components/get');
    commit('setComponents', components);
  },
  async getComponent({commit}, [id]){
    let component = await this.$axios.$get(this.$axios.defaults.baseURL+'/components/get/' + id);
    if(id == 1){
      commit('setSlider', component);
    }else if(id == 2){
      commit('setBanner', component);
    }
    commit('setComponent', component);
  },
  async updateComponent({commit}, [id, data]){
  await this.$axios.$put(this.$axios.defaults.baseURL+'/components/update/'+id, { data });
  return true;
},

}

export const getters = {
  components: s => s.components,
  component:  s => s.component,
  slider:  s => s.slider,
  banner:  s => s.banner,
}
