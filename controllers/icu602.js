let inner = null;
let state = 'home';

let currentOperator;

let announcementQueue = [];
let announcementPlaying = false;

function playAnnouncement(announcementID, playComplete) {
    let announcementURL = '/resources/audio/' + currentOperator + '/' + announcementID + '.mp3';

    let audio = new Audio(announcementURL);
    audio.addEventListener('ended', playComplete);
    audio.play();
}

function startPlayingAnnouncements() {
    let nextAnnouncement = announcementQueue.shift();
    if (!nextAnnouncement) return;

    if (nextAnnouncement < 1 || nextAnnouncement > 7) {
        startPlayingAnnouncements();
        return;
    }

    announcementPlaying = true;

    playAnnouncement(nextAnnouncement, () => {
        if (announcementQueue.length !== 0)
            setTimeout(() => {
                startPlayingAnnouncements();
            }, 500);
        else
            announcementPlaying = false;
    });
}

window.addEventListener('load', () => {
    currentOperator = 'SMRT';

    inner = document.getElementById('controller-iframe').contentWindow;
    document.getElementById('button-f1').addEventListener('click', onF1Pressed);
    document.getElementById('button-f2').addEventListener('click', onF2Pressed);
    document.getElementById('button-no').addEventListener('click', onCrossPressed);
    document.getElementById('button-yes').addEventListener('click', onYesPressed);
    document.getElementById('button-up').addEventListener('click', onUpPressed);
    document.getElementById('button-down').addEventListener('click', onDownPressed);
    document.getElementById('operator-selector').addEventListener('change', onOperatorChanged);

    for (let button = 0; button < 10; button++) {
        let buttonDiv = document.getElementById('button-' + button);

        buttonDiv.addEventListener('click', () => {
            if (state === 'home') {
                announcementQueue.push(button);
                if (!announcementPlaying) {
                    startPlayingAnnouncements();
                }
            }
        });
    }

    inner.postMessage(JSON.stringify({
        mode: 'home'
    }), location.toString());
});

function setCode(code) {
    if (code in EDSData) {
        inner.postMessage(JSON.stringify({
            mode: 'updateCode',
            code: code,
            data: EDSData[code]
        }), location.toString());
    }
}

function onF1Pressed() {
    if (state === 'home') {
        state = 'selectService';
        inner.postMessage(JSON.stringify({
            mode: 'selectService'
        }), inner.location.toString());
    }
}

function onF2Pressed() {
    if (state === 'home') {
        state = 'selectExtra';
        inner.postMessage(JSON.stringify({
            mode: 'selectExtra'
        }), inner.location.toString());
    }
}

function onCrossPressed() {
    state = 'home';
    inner.postMessage(JSON.stringify({
        mode: 'homePage'
    }), inner.location.toString());
}

function onYesPressed() {
    if (state !== 'home') {
        state = 'home';
        inner.postMessage(JSON.stringify({
            mode: 'enterPressed'
        }), inner.location.toString());
    }
}

function onUpPressed() {
    if (state !== 'home') {
        inner.postMessage(JSON.stringify({
            mode: 'pressUp'
        }), inner.location.toString());
    }
}

function onDownPressed() {
    if (state !== 'home') {
        inner.postMessage(JSON.stringify({
            mode: 'pressDown'
        }), inner.location.toString());
    }
}

function onOperatorChanged(e) {
    currentOperator = document.querySelectorAll('#operator-selector > option')
    [document.getElementById('operator-selector').selectedIndex].textContent;
    inner.postMessage(JSON.stringify({
        mode: 'setOperator',
        operator: currentOperator
    }), inner.location.toString());

    parent.postMessage(JSON.stringify({
        mode: 'setOperator',
        operator: currentOperator
    }), parent.location.toString());

    state = 'home';
}

window.addEventListener('message', event => {
    let eventData = JSON.parse(event.data);

    if (event.origin == location.origin) {
        if (eventData.type === 'controller-preview') {
            inner.postMessage(JSON.stringify({
                mode: 'controller-preview',
                matrix: eventData.matrix
            }), location.toString());
            return;
        }
        parent.postMessage(event.data, parent.location.toString());
    }
});
