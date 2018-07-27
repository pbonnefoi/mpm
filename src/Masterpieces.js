import Api from '@/Api'
import * as global from '@/global'

export default {
    async getMainMasterpiecesList(cb) {
        const response = await Api().get(global.getMasterpiecesAPIUrl + global.getFormatUrl)
        setTimeout(() => cb(response.data), 0)
    },
    async getMasterpiece(id, cb) {
        const response = await Api().get(global.getMasterpieceSingleAPIUrl + id + global.getFormatUrl)
        setTimeout(() => cb(response.data), 0)
    }
}