import Api from './api'

export default {
    getMainMasterpiecesList() {
        return Api().get(global.getMasterpiecesAPIUrl + global.getFormatUrl)

    },
    getMasterpiece(params) {
        return Api().get(global.getMasterpieceSingleAPIUrl + this.$route.params.masterpieceID + global.getFormatUrl)
    }
}