import baza from ".."
import _ from 'lodash'

export default async function delete_imitation(where,offset_data){
    const {limit,page}=offset_data??{}
    const selected=await baza.selected_page('display_data',page,limit)

    return _.filter([...selected], item=>!_.isMatch(item, where))
}