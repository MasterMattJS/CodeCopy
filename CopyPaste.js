function character() {
    var menu = document.getElementsByTagName('menu-item')
    for (var i = 0; i < menu.length; i++) {
        if (menu != null && menu[i] != null && menu[i].innerText == "Characters") {
            if (document.getElementsByTagName('menu-item')[i].innerHTML.includes('class="navbar-link active"')) {

                showButtons();
            } else {
                removeButtons();
            }
        }

    }
    setTimeout(character, 100);
}


function showButtons() {
    if (document.getElementById('copyCodeButton') == null) {
        var getOCcode = document.createElement("button");
        getOCcode.textContent = "Get character code";
        getOCcode.style.position = "fixed";
        getOCcode.style.left = "50px";
        getOCcode.style.top = "50px";
        getOCcode.style.zIndex = "999999";
        getOCcode.style.backgroundColor = "rgba(255,255,255)";
        getOCcode.style.color = "rgba(0,0,0)";
        getOCcode.style.padding = "10px";
        getOCcode.style.borderRadius = "5px";
        getOCcode.id = "copyCodeButton";
        getOCcode.style.marginTop = "10px";
        getOCcode.onclick = function () {
            copyOC();
        };
        document.body.appendChild(getOCcode);
    }


    if (document.getElementById('pasteCodeButton') == null) {
        var pasteOCcode = document.createElement("button");
        pasteOCcode.textContent = "Paste character with code"
        pasteOCcode.style.position = "fixed";
        pasteOCcode.style.left = "50px";
        pasteOCcode.style.top = "120px";
        pasteOCcode.style.zIndex = "999999";
        pasteOCcode.style.backgroundColor = "rgba(255,255,255)";
        pasteOCcode.style.color = "rgba(0,0,0)";
        pasteOCcode.id = "pasteCodeButton";
        pasteOCcode.style.padding = "10px";
        pasteOCcode.style.borderRadius = "5px";
        pasteOCcode.onclick = function () {
            pasteOC();
        };
        document.body.appendChild(pasteOCcode);

    }
}


function removeButtons() {
    if (document.getElementById('pasteCodeButton') != null) {
        document.getElementById('pasteCodeButton').remove();
    }
    if (document.getElementById('copyCodeButton') != null) {
        document.getElementById('copyCodeButton').remove();
    }
}


function copyOC() {

    openAndSetTab();
    var j = 0;
    var settings = [];
    settings[j++] = "N:" + copyTab('name');
    settings[j++] = "BS:" + copyTab('selectors');
    settings[j++] = "BC:" + copyTab('colors');
    settings[j++] = "BB:" + copyTab('buttMark');

    clickButton('mane');
    settings[j++] = "MS:" + copyTab('selectors');
    settings[j++] = "MC:" + copyTab('colors');
    clickButton('tail');
    settings[j++] = "TS:" + copyTab('selectors');
    settings[j++] = "TC:" + copyTab('colors');
    clickButton('face');
    faceUnhide();
    settings[j++] = "FS:" + copyTab('selectors');
    settings[j++] = "FC:" + copyTab('colors');
    clickButton('other');
    clickButton('head');
    settings[j++] = "HS:" + copyTab('selectors');
    settings[j++] = "HC:" + copyTab('colors');
    clickButton('neck');
    settings[j++] = "NS:" + copyTab('selectors');
    settings[j++] = "NC:" + copyTab('colors');
    clickButton('legs');
    settings[j++] = "LS:" + copyTab('selectors');
    settings[j++] = "LC:" + copyTab('colors');
    clickButton('chest');
    settings[j++] = "CS:" + copyTab('selectors');
    settings[j++] = "CC:" + copyTab('colors');
    clickButton('back');
    settings[j++] = "BAS:" + copyTab('selectors');
    settings[j++] = "BAC:" + copyTab('colors');
    clickButton('waist');
    settings[j++] = "WS:" + copyTab('selectors');
    settings[j++] = "WC:" + copyTab('colors');
    clickButton('other');
    settings[j++] = "OS:" + copyTab('selectors');
    settings[j++] = "OC:" + copyTab('colors');
    openAndSetTab();



    var code = "";
    for (var i = 0; i < settings.length; i++) {
        code += settings[i];
    }

    code = codeShorter(code);

    prompt("Your pony code is (CTRL + C):", code);
}

function pasteOC() {

    var isStatusGood = true;

    settings = [];
    var j = 0;

    var code = prompt("Paste your pony code here", );
    if (code == null || code == "") {
        alert("Error code");
    } else {
        settings[j++] = codeDecoder(code, "N:");
        settings[j++] = codeDecoder(code, "BS:", true);
        settings[j++] = codeDecoder(code, "BC:");
        settings[j++] = codeDecoder(code, "BB:");
        settings[j++] = codeDecoder(code, "MS:", true);
        settings[j++] = codeDecoder(code, "MC:");
        settings[j++] = codeDecoder(code, "TS:", true);
        settings[j++] = codeDecoder(code, "TC:");
        settings[j++] = codeDecoder(code, "FS:", true);
        settings[j++] = codeDecoder(code, "FC:");
        settings[j++] = codeDecoder(code, "HS:", true);
        settings[j++] = codeDecoder(code, "HC:");
        settings[j++] = codeDecoder(code, "NS:", true);
        settings[j++] = codeDecoder(code, "NC:");
        settings[j++] = codeDecoder(code, "LS:", true);
        settings[j++] = codeDecoder(code, "LC:");
        settings[j++] = codeDecoder(code, "CS:", true);
        settings[j++] = codeDecoder(code, "CC:");
        settings[j++] = codeDecoder(code, "BAS:", true);
        settings[j++] = codeDecoder(code, "BAC:");
        settings[j++] = codeDecoder(code, "WS:", true);
        settings[j++] = codeDecoder(code, "WC:");


        for (var i = 0; i < settings.length; i++) {
            if (settings[i] == -1 && isStatusGood == true) {
                alert("Cannot read code. ")
                isStatusGood = false;
            }
            //console.log(i, settings[i]);
        }

        if (isStatusGood === true) {
            j = 0;
            k = 1;
            delay = 200;

            openAndSetTab(true);

            unlock();
            pasteTab(settings[j++], 'name');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            //pasteTab(settings[j++], 'buttMark');
            var saveJ = j++;
            clickButton('mane');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('tail');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('face');
            faceUnhide();
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('other');
            clickButton('head');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('neck');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('legs');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('chest');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('back');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('waist');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');
            clickButton('other');
            pasteTab(settings[j++], 'selectors');
            pasteTab(settings[j++], 'colors');

            clickButton('body');
            pasteTab(settings[saveJ], 'buttMark');
        }
    }
}

function openAndSetTab(newButton = false) {


    var home = document.getElementsByClassName('d-none d-sm-inline')[0];
    if (home.innerText == 'Home') {
        home.click();
    }

    var editButton = document.getElementsByTagName('button')[4];

    if (editButton.textContent == 'edit') {
        editButton.click();
    }


    if (newButton) {
        clickButton('new');

    }

    clickButton('body');


    var checkBoxCustomOutline = document.getElementsByClassName('custom-control-input ng-untouched ng-pristine ng-valid')[0];

    if (checkBoxCustomOutline != null && checkBoxCustomOutline.checked == false) {
        checkBoxCustomOutline.click();
    }
}



function faceUnhide() {
    var itemsStatus = document.getElementsByClassName('selection-item');

    unlock();
    if (itemsStatus != null && itemsStatus[9] != null) {
        itemsStatus[9].click();
        if (itemsStatus[29] != null) {
            itemsStatus[29].click();
        }
        if (itemsStatus[80] != null) {
            itemsStatus[80].click();
        }
    }

}


function copyTab(type) {
    unlock();
    var output = "";

    if (type == 'selectors') {

        var itemsStatus = document.getElementsByClassName('selection-item');

        for (var i = 0; i < itemsStatus.length; i++) {
            unlock();
            if (itemsStatus[i].outerHTML.includes('aria-checked="true"')) {
                output += "1";
            } else {
                output += "0";
            }
        }
    } else if (type == 'colors') {
        var input = document.getElementsByClassName('form-control color-picker-input');
        if (input != null) {
            for (var i = 0; i < input.length; i++) {
                output += input[i].value + ",";
            }
        }

    } else if (type == 'buttMark') {
        var buttMark = document.getElementsByClassName('bitmap-box-cell');
        for (var i = 0; i < 25; i++) {
            if (buttMark != null && buttMark[i] != null) {
                if (buttMark[i].style.background == "") {
                    output += "n,";
                } else {
                    output += buttMark[i].style.background.replace("rgb(", "").replace(", ", "|").replace(", ", "|").replace(")", "") + ",";

                }
            } else {
                retrun - 1;
            }
        }
        var input = document.getElementsByTagName('input');

        if (input[input.length - 1].checked) {
            output += "1";
        } else {
            output += "0";
        }

    } else if (type == 'name') {
        var input = document.getElementsByTagName('input');

        for (var i = 0; i < input.length; i++) {
            if (input[i].placeholder == "Name of your character") {
                return input[i].value.replace(":", "").replace(";", "").replace(",", "") + ";";
            }
        }


    } else {
        return -1;
    }
    output += ";";
    return output.replace(",;", ";");

}

function clickButton(buttonName) {

    var button = document.getElementsByTagName('button');

    for (var i = 0; i < button.length; i++) {
        if (button[i].innerText == buttonName) {
            button[i].click();
        }
    }
}


function pasteTab(code, type) {
    unlock();
    if (type == 'selectors') {

        var itemsStatus = document.getElementsByClassName('selection-item');

        if (itemsStatus != null && code != null) {
            for (var i = 0; i < code.length; i++) {
                unlock();
                if (itemsStatus != null && itemsStatus[i] != null && code != null && code[i] === true)
                    itemsStatus[i].click();
                unlock();
            }
        }
    } else if (type == 'colors') {
        var input = document.getElementsByClassName('form-control color-picker-input');

        if (input != null && code != null) {
            for (var i = 0; i < code.length; i++) {
                if (input[i] != null) {
                    input[i].value = code[i];
                    inputEvent(input[i]);
                }
            }
        }
    } else if (type == 'name') {
        var input = document.getElementsByTagName('input');
        for (var i = 0; i < input.length; i++) {
            if (input[i].placeholder == "Name of your character") {
                input[i].value = code;
                inputEvent(input[i]);
                break;
            }
        }

    } else if (type == 'buttMark') {

        var button = document.getElementsByTagName('button');
        var input = document.getElementsByTagName('input');
        var bmBox = document.getElementsByClassName('bitmap-box-cell');

        if (code.length == 26) {

            for (var i = 0; i + button.length; i++) {

                if (button != null && button[i] != null && button[i].outerHTML.includes('btnradio="brush"')) {
                    button[i].click();
                    break;
                }
            }

            for (var i = 0; i < 25; i++) {
                for (var j = 0; j < input.length; j++)
                    if (input[j].outerHTML.includes('aria-label="Brush color"')) {
                        if (code[i] == "n") {

                        } else {

                            var rgbv = "rgb(" + code[i].replace("|", ",").replace("|", ",") + ")";
                            input[j].value = rgbv;

                            inputEvent(input[j]);
                            if (bmBox != null && bmBox[i] != null) {
                                //METHOD 1 DOSENT WORK
                                bmBox[i].click();

                                //METHOD 2 DOSENT WORK
                                var evt = new MouseEvent("click", {
                                    bubbles: true,
                                    cancelable: true,
                                    view: window
                                });
                                bmBox[i].dispatchEvent(evt);
                                //METHOD 3 WORKS ONLY VISUALLY
                                bmBox[i].style.background = rgbv;
                                inputEvent(bmBox[i]);

                            }
                        }
                    }
            }
            if (code[25] == 1 && input[input.length - 1].checked == false) {
                input[input.length - 1].click();
            } else {}

        } else {
            console.log('Butt mark code error');
        }
    }
}

function unlock() {

    var buttons = document.getElementsByTagName('button')

    for (var i = 0; i < buttons.length; i++) {

        if (buttons != null && buttons[i] != null && buttons[i].outerHTML.includes('aria-checked="true"')) {
            buttons[i].click();
        }
    }

}

function clickEvent() {
    var ie = new MouseEvent('click', {
        'clientX': 814,
        'clientY': 534
    });
    document.dispatchEvent(ie);
}

function inputEvent(element) {
    var ie = new InputEvent('input', {
        'bubbles': true,
        'cancelable': true,
        'data': true,
    });
    element.dispatchEvent(ie);
}

function codeShorter(code) {

    while (code.includes(" none repeat scroll 0% 0%")) {
        code = code.replace(" none repeat scroll 0% 0%", "")
    }
    /*


        while (code.includes("00")) {
            code = code.replace("00", "-");
        }
        while (code.includes("--")) {
            code = code.replace("--", "*");
        }
        while (code.includes("**")) {
            code = code.replace("**", "=");
        }
    */
    return code;
}

function codeDecoder(code, type, status = false) {
    /*
        while (code.includes("=")) {
            code = code.replace("=", "**");
        }
        while (code.includes("*")) {
            code = code.replace("*", "--");
        }
        while (code.includes("-")) {
            code = code.replace("-", "00");
        }
    */
    var output = -1;

    var outputS = code.split(";");

    for (var i = 0; i < outputS.length; i++) {

        if (outputS[i].includes(type)) {
            output = outputS[i];

        }
    }
    if (output == -1) {
        return output;
    }

    var first = type.length;
    var last = output.length;

    output = output.substr(first, last);

    if (status == false) {
        output = output.split(",");
    } else {
        var outputraw = output;
        var output = [];
        for (var i = 0; i < outputraw.length; i++) {
            if (outputraw[i] == "0") {
                output[i] = false;
            } else if (outputraw[i] == "1") {
                output[i] = true;
            } else {
                return -1;
            }
        }
    }
    return output;
}
character();