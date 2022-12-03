import Axios from 'axios';

// export const API = {
//   getIp() {
//     return Axios.get('/get_ip/');
//   },
//   post_get_predata2(payload) {
//     return Axios.post('/getpredata2/', payload);
//   },
//   post_get_opt(payload) {
//     return Axios.post('/get_opt/', payload);
//   },
//   post_get_page3_data(payload) {
//     return Axios.post('/get_page3_data/', payload);
//   },
//   post_get_all_data(payload) {
//     return Axios.post('/get_all_data/', payload);
//   },
//   post_OLV_RF_cbu_cprp(payload) {
//     return Axios.post('/OLV_RF_cbu_cprp/', payload);
//   },
//   post_getTV_OLV_RFdistr2(payload) {
//     return Axios.post('/getTV_OLV_RFdistr2/', payload);
//   },
//   post_getTV_OLV_20_view(payload) {
//     return Axios.post('/getTV_OLV_20_view/', payload);
//   },
//   post_get_max_ots(payload) {
//     return Axios.post('/get_max_ots/', payload);
//   },
// };

export const API = {
  getIp() {
    return Axios.get('https://videotron.mediainstinctgroup.ru/get_ip/');
  },
};