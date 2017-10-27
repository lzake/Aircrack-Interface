document.getElementById("checkKill").addEventListener('click', checkKill)
document.getElementById("startWlan").addEventListener('click', startWlan)
document.getElementById("airodWlan1").addEventListener('click', airodWlan1)

function checkKill() {
    var returnObj = {};
    console.log('Checkkill');
    const url = '/checkkill/kill'
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.Done) {
                if (request.readyState == 4 && request.status == 200) {
                    returnObj = this.responseText;
                    document.getElementById('info').innerHTML = returnObj;
                    resolve(returnObj);
                }
            } else if (request.status == 400) {
                reject('Status Code: ' + this.status + this.responseText)
            } else {
                reject('Status Code: ' + this.status + this.responseText)
            }

        };
        request.open('GET', url, true);
        request.send();
    })
}

function checkInterface() {
    var returnObj = {};
    console.log('CheckInterface');
    const url = '/checkinterface/check'
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.Done) {
                if (request.readyState == 4 && request.status == 200) {
                    returnObj = this.responseText;
                    document.getElementById('info').innerHTML = returnObj;
                    resolve(returnObj);
                }
            } else if (request.status == 400) {
                reject('Status Code: ' + this.status + this.responseText)
            } else {
                reject('Status Code: ' + this.status + this.responseText)
            }

        };
        request.open('GET', url, true);
        request.send();
    })
}

function startWlan() {
    console.log('startWlan');
    const url = '/startwlan/start'
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.Done) {
                if (request.readyState == 4 && request.status == 200) {
                    returnObj = this.responseText;
                    document.getElementById('info').innerHTML = returnObj;
                    resolve(returnObj);
                }
            } else if (request.status == 400) {
                reject('Status Code: ' + this.status)
            } else {
                reject('Status Code: ' + this.status)
            }

        };
        request.open('GET', url, true);
        request.send();
    })
}

function airodWlan1() {
    console.log('airodWlan1');
    const url = '/airodwlan1/airodumpStart'
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.Done) {
                if (request.readyState == 4 && request.status == 200) {
                    returnObj = this.responseText;
                    document.getElementById('info').innerHTML = returnObj;
                    resolve(returnObj);
                }
            } else if (request.status == 400) {
                reject('Status Code: ' + this.status)
            } else {
                reject('Status Code: ' + this.status)
            }

        };
        request.open('GET', url, true);
        request.send();
    })
}