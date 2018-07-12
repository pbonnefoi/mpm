import Api from '@/Api'
import * as global from '@/global'

export default {
    getMainMasterpiecesList() {
        return Api().get(global.getMasterpiecesAPIUrl + global.getFormatUrl)
    },
    getMasterpiece(params) {
        return Api().get(global.getMasterpieceSingleAPIUrl + params.masterpieceID + global.getFormatUrl)
    }
}