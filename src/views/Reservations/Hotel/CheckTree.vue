<template>
    <ContentWrapper>
        <div class="card my-2 p-2">Rol & Prmission Yang Dikirim : {{dataRole}}</div>
        <div class="col-md-4">
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="mx-4 my-1" v-for="role in dataDemo" :key="role.id">
                        <div class="row">
                            <label class="c-checkbox">
                                <input :id="role.id" type="checkbox" :value="role.name" v-model="role[role.name]" @change="handle_check"/>
                                <span class="fa fa-check"></span>
                            </label>
                            <div @click="open_close($event)" v-model="role[role.name]" v-b-toggle="role.name + '1' "><em :class="classIcon" v-b-toggle="role.name + '1' "></em>ROLE {{role.name}}</div>
                        </div>
                        <b-collapse :id="role.name + '1' " class="mt-2">
                            <div class="form-group">
                                <div class="col-md-12" v-for="permission in role.permission" :key="permission.id">
                                    <label class="c-checkbox">
                                        <input :id="permission.name" type="checkbox" :value="permission.name" :checked="checked" @change="handle_check_permission($event, permission.name)"/>
                                        <span class="fa fa-check"></span>
                                        {{permission.id}} . {{permission.name.toUpperCase()}}
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="btn btn-primary my-2 float-right" @click="setRole">Set Role</div>
                            </div>
                        </b-collapse>
                    </div>
                </li>
            </ul>
        </div>
    </ContentWrapper>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "CheckTree",

        components :{},

        data(){
            return {
                dataDemo:[],
                classIcon:[],
                checked: false,
                dataRole : [],
            }
        },

        mounted() {
            this.getRolePermission()
        },

        created() {
            this.classIcon = 'fas fa-plus-circle mr-2'
        },

        methods:{
            /*
		   |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		   | Get Data From Backend
		   |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
            async getRolePermission()
            {
                let response = [];
                await axios.get('/role-permission').then(res =>{
                    if(res.data.role.permissions === undefined) {
                        return;
                    } else {
                        delete res.data.role.permissions;
                        response = [{
                            id: res.data.role.id,
                            name:res.data.role.name,
                            permission:res.data.permissions
                        }]
                    }
                }).catch((error) =>{
                    const msg = error.message;
                    alert('Failed Retrieve Data Role : ' + msg)
                }).finally(()=>{
                    console.log('Data Done')
                })
                this.dataDemo = response
                return  response
            },
            /*
		   |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		   | Handle Select All Permission
		   |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
            handle_check(e)
            {
                const {checked, multiple, type} = e.target;
                let dataRoles = this.dataDemo[0].permission
                let dataRole = dataRoles.map(res =>{
                    return res.name
                })
                let dataResult = []
                if (checked)
                {
                    dataResult.push(...dataRole)
                    this.dataRole = dataResult
                    this.checked = true
                } else {
                    this.checked = false
                    dataResult.pop(dataRole)
                    this.dataRole = dataResult
                }
            },
            /*
		   |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		   | Handle Select Each Permission (Add / Remove Permission
		   |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
            handle_check_permission(e, data_)
            {
                const {checked, _value} = e.target;
                let asdf = []
                let dataSet = this.dataRole
                if(!checked)
                {
                    let index = dataSet.indexOf(_value);
                    if (index >= 0) {
                        dataSet.splice( index, 1 );
                    }
                } else {
                    let index = dataSet.indexOf(_value);
                    dataSet.splice(index, 0 , _value)
                }
            },
            /*
		   |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		   | Handle Open Close List of Permission
		   |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
            open_close(e)
            {
                const {__BV_toggle_STATE__} = e.target;
                console.log(__BV_toggle_STATE__)
                if (!__BV_toggle_STATE__)
                {
                    const  classIcon = 'fas fa-minus-circle mr-2'
                    this.classIcon = classIcon
                } else {
                    const  classIcon = 'fas fa-plus-circle mr-2'
                    this.classIcon = classIcon
                }
            },
            /*
		   |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		   | Send Data Role to Backend
		   |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
            setRole()
            {
                alert('set permission to role = ' + this.dataRole)
            },
        }
    }
</script>
<style scoped>
</style>

