import axios from 'axios'
import {getNewsApi} from '../../configs/apis'


export default async (req, res) => {
    let
    limit = 10,
    page = parseInt(req.query.page),
    skip = (page - 1) * limit,
    api = getNewsApi(skip, limit);

    let apiReq = await axios.get(api);

    if(apiReq.status == 200){
        res.send(apiReq.data);
    }
}