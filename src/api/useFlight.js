import {ref, reactive, toRefs} from "@vue/composition-api";
import axios from "axios";
const baseUrl = '/flight';

export default function () {
    const responseOK = ref({status:200, message:'success'})
    const responseNG = ref({status:500, message:'Unprocessed'})
    const dataSchedule = reactive({FlightSegment:[]});
    const dataResponse = reactive({response:[]});

    const searchSchedule = async () => {
        const response = await axios.get(baseUrl).then(res =>{
            console.log(res.data[0].data.FlightSearchResult.FlightSegment);
            return res.data[0].data.FlightSearchResult.FlightSegment;
        }).catch(error => {
                dataResponse.value = error.message
            }
        );
        dataResponse.response = ref(responseOK)
        dataSchedule.FlightSegment = ref(response)
    }
    return {dataSchedule, dataResponse, searchSchedule}
}
