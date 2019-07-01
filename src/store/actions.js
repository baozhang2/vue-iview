// key
const BREADCRUMBLIST = 'BREADCRUMBLIST';

// actions
const actions = {
    [BREADCRUMBLIST] ({ commit }, data) {
      commit('SETROUTERDATA', data);
    }
}

export default actions
