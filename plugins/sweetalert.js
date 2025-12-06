import Swal from "sweetalert2";

// const swal = require('sweetalert2');

export default {
  install(Vue) {
    Vue.prototype.$swal = Swal;
  }
};