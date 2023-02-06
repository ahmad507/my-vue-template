import axios from "axios";
import api_lion_service from "../../services/api_lion_service";

const Flightapi = {
    state: {
        UserAuth : { username : '', password : ''},
        SearchDetail : {
            type : '',
            date_from: '',
            from_code: '',
            to_code: '',
            date_return: '',
            return_code: '',
            adult: '',
            child: '',
            infant: '',
        },
    },
    getters : {},
    actions : {
        GetAllDataFlight ({commit}, SearchDetail){
            return Promise.all([
                GetAirAsiaFlight({commit}, SearchDetail), GetCitilinkFlight({commit}, SearchDetail),
                GetGarudaFlight({commit}, SearchDetail), GetLionFlight({commit}, SearchDetail),
                GetSriwijayaFlight({commit}, SearchDetail), GetTriganaFlight({commit}, SearchDetail)])
                .then(response => response.data);
        }
    },
    mutations :{},
};

async  function GetAirAsiaFlight({commit}, SearchDetail) {
    return await axios.post(api_lion_service.lion_search, {SearchDetail}).then(response => response.data)
}
async  function GetCitilinkFlight({commit}, SearchDetail) {
    return await axios.post(api_lion_service.lion_search, {SearchDetail}).then(response => response.data)
}
async  function GetGarudaFlight({commit}, SearchDetail) {
    return await axios.post(api_lion_service.lion_search, {SearchDetail}).then(response => response.data)
}
async  function GetLionFlight({commit}, SearchDetail) {
    return await axios.post(api_lion_service.lion_search, {SearchDetail}).then(response => response.data)
}
async  function GetSriwijayaFlight({commit}, SearchDetail) {
    return await axios.post(api_lion_service.lion_search, {SearchDetail}).then(response => response.data)
}
async  function GetTriganaFlight({commit}, SearchDetail) {
    return await axios.post(api_lion_service.lion_search, {SearchDetail}).then(response => response.data)
}

export default Flightapi
