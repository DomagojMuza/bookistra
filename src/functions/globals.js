const backUrl = 'http://localhost:4000';
const imagesFolder = backUrl+'/api/uploads/';

function getUrlData() {
    let hash = location.hash.substr(1);

    let params = hash.split('&').reduce(function (res, item) {
        var parts = item.split('=');
        res[parts[0]] = parts[1];
        return res;
    }, {});

    return params;
}

function setUrlData(params) {
    let hash = '#';
    Object.keys(params).forEach(key => {
        if (params[key]) hash += key + '=' + params[key] + '&';
    })
    history.replaceState(undefined, undefined, hash);
}

function getObjectImgUrl(object) {
    if (! object.image.length) return '';
    return imagesFolder+object.object_id+'/'+ object.image[0].filename || '';

}

export { getUrlData, setUrlData, getObjectImgUrl }