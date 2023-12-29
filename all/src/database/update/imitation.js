import baza from ".."
import _ from 'lodash'

export default async function update_imitation(data, where,offset_data){
    const {limit,page}=offset_data??{}

    const selected=await baza.selected_page('display_data',page,limit)

    return _.map([...selected], item=>{
        if(_.isMatch(item, where)){
            return { ...item, ...data };
        }
        return item;
    });
}