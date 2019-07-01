// key
const ISSHOWSIDEBAR = 'ISSHOWSIDEBAR';
const COLLEFELIST = 'COLLEFELIST';
const SETROUTERDATA = 'SETROUTERDATA';
const SETROUTERPATH = 'SETROUTERPATH';

// methods
const mutations = {
  [ISSHOWSIDEBAR](state, flag) {
    state.sideBarShow = flag;
  },
  [COLLEFELIST](state, data) {
    console.log(data);
    state.collegeList = data;
  },
  [SETROUTERDATA] (state, data) {
    state.breadcrumbList = data;
  },
  [SETROUTERPATH] (state, path) {
    state.routerPath = path;
  }
};

export default mutations;
