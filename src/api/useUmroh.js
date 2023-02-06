import {reactive, ref, toRefs, onMounted} from "@vue/composition-api";
import axios from "axios";
const baseUrl = '/umroh';

export default function () {
    const dataUmroh = reactive({ allUmroh:[] });
    const dataError = ref('');
    const searchData = async () =>{
        const response = await axios.get(baseUrl).then(res =>{
            return res.data
        }).catch(error => {
            dataError.value = error.message
            }
        );
        if (response.length > 0)
        {
            dataUmroh.allUmroh = ref(response);
        } else {
            dataError.value = 'no data found'
        }

    };
    onMounted(()=>{
        searchData()
    })
    return {...toRefs(dataUmroh), dataError}
}
