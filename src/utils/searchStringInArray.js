module.exports = {
    searchStringInArray(str, strArray) {
        for (var j=0; j<strArray.length; j++) {
            if (strArray[j].match(str)) {
                return [strArray[j]]
            }
        }
        return ['Nenhuma atividade'];
    }
}