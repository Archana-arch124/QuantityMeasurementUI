let length = ["Meter", "KiloMeter", "CentiMeter", "MiliMeter", "MicroMeter", "Mile", "Foot", "Inch"];
let temperature = ["Fahrenheit", "Celcius"];
let volume = ["MiliLitre", "Litre"];
let input;

$(document).ready(() => {

    $("#length").on('click', () => {
        $("#volume").removeClass("img3Click");
        $("#temp").removeClass("img2Click");
        $("#length").addClass("img1Click");
        selectValue(length);
    });

    $("#temp").on('click', () => {
        $("#volume").removeClass("img3Click");
        $("#temp").addClass("img2Click");
        $("#length").removeClass("img1Click");
        selectValue(temperature);
    });


    $("#volume").on('click', () => {
        $("#volume").addClass("img3Click");
        $("#temp").removeClass("img2Click");
        $("#length").removeClass("img1Click");
        selectValue(volume);
    });
});

selectValue = (value) => {
    let rowdata = " ";
    for (let i = 0; i < value.length; i++) {
        rowdata += '<option>' + value[i] + '</option>'
    }
    document.getElementById('left').innerHTML = rowdata;
    document.getElementById('right').innerHTML = rowdata;
}

lengthMenu = () => {

    let rowdata = " ";
    for (let i = 0; i < length.length; i++) {
        rowdata += '<option>' + length[i] + '</option>'
    }
    document.getElementById('left').innerHTML = rowdata;
    document.getElementById('right').innerHTML = rowdata;
    return rowdata;
}

tempMenu = () => {
    let rowdata = " ";
    for (let i = 0; i < temperature.length; i++) {
        rowdata += '<option>' + temperature[i] + '</option>'
    }
    document.getElementById('left').innerHTML = rowdata;
    document.getElementById('right').innerHTML = rowdata;
    return rowdata;
}

volumeMenu = () => {
    let rowdata = " ";
    for (let i = 0; i < volume.length; i++) {
        rowdata += '<option>' + volume[i] + '</option>'
    }
    document.getElementById('left').innerHTML = rowdata;
    document.getElementById('right').innerHTML = rowdata;
    return rowdata;
}

coversion = () => {

    let funcValue = ($("#leftInput").val())
    console.log(funcValue);

    let funcOption = $("#left option:selected").text();
    console.log(funcOption);

    let funcOption2 = $("#right option:selected").text();
    console.log(funcOption2);

    switch (funcOption) {

        case 'Meter':
            if (funcOption2 == "KiloMeter") {
                value = funcValue / 1000;
                console.log(value);
            } else if (funcOption2 == "CentiMeter") {
                value = funcValue / 0.01;
                console.log(value);
            } else if (funcOption2 == "MiliMeter") {
                value = funcValue * 1000;
                console.log(value);
            } else if (funcOption2 == "MicroMeter") {
                value = funcValue * 1000000;
                console.log(value);
            } else if (funcOption2 == "Mile") {
                value = funcValue / 1609;
                console.log(value);
            } else if (funcOption2 == "Foot") {
                value = funcValue * 3.281;
                console.log(value);
            } else if (funcOption2 == "Inch") {
                value = funcValue * 39.37;
                console.log(value);
            }
            break;

        case 'KiloMeter':
            if (funcOption2 == "Meter") {
                value = funcValue * 1000;
                console.log(value);
            } else if (funcOption2 == "CentiMeter") {
                value = funcValue * 100000;
                console.log(value);
            } else if (funcOption2 == "MiliMeter") {
                value = funcValue * 1000000;
                console.log(value);
            } else if (funcOption2 == "MicroMeter") {
                value = funcValue * 1000000000;
                console.log(value);
            } else if (funcOption2 == "Mile") {
                value = funcValue / 1.609;
                console.log(value);
            } else if (funcOption2 == "Foot") {
                value = funcValue * 3281;
                console.log(value);
            } else if (funcOption2 == "Inch") {
                value = funcValue * 39370;
                console.log(value);
            }
            break;

        case 'CentiMeter':
            if (funcOption2 == "Meter") {
                value = funcValue / 100;
                console.log(value);
            } else if (funcOption2 == "KiloMeter") {
                value = funcValue / 100000;
                console.log(value);
            } else if (funcOption2 == "MiliMeter") {
                value = funcValue * 10;
                console.log(value);
            } else if (funcOption2 == "MicroMeter") {
                value = funcValue * 10000;
                console.log(value);
            } else if (funcOption2 == "Mile") {
                value = funcValue / 160934;
                console.log(value);
            } else if (funcOption2 == "Foot") {
                value = funcValue / 30.48;
                console.log(value);
            } else if (funcOption2 == "Inch") {
                value = funcValue / 2.54;
                console.log(value);
            }
            break;

        case 'MiliMeter':
            if (funcOption2 == "Meter") {
                value = funcValue / 1000;
                console.log(value);
            } else if (funcOption2 == "KiloMeter") {
                value = funcValue / 1000000;
                console.log(value);
            } else if (funcOption2 == "CentiMeter") {
                value = funcValue / 10;
                console.log(value);
            } else if (funcOption2 == "MicroMeter") {
                value = funcValue * 1000;
                console.log(value);
            } else if (funcOption2 == "Mile") {
                value = funcValue / 1.609e+6;
                console.log(value);
            } else if (funcOption2 == "Foot") {
                value = funcValue / 305;
                console.log(value);
            } else if (funcOption2 == "Inch") {
                value = funcValue / 25.4;
                console.log(value);
            }
            break;

        case 'MicroMeter':
            if (funcOption2 == "Meter") {
                value = funcValue / 1e+6;
                console.log(value);
            } else if (funcOption2 == "KiloMeter") {
                value = funcValue / 1e+9;
                console.log(value);
            } else if (funcOption2 == "CentiMeter") {
                value = funcValue / 10000;
                console.log(value);
            } else if (funcOption2 == "MiliMeter") {
                value = funcValue * 1000;
                console.log(value);
            } else if (funcOption2 == "Mile") {
                value = funcValue / 1.609e+9;
                console.log(value);
            } else if (funcOption2 == "Foot") {
                value = funcValue / 304800;
                console.log(value);
            } else if (funcOption2 == "Inch") {
                value = funcValue / 25400;
                console.log(value);
            }
            break;

        case 'Mile':
            if (funcOption2 == "Meter") {
                value = funcValue * 1609;
                console.log(value);
            } else if (funcOption2 == "KiloMeter") {
                value = funcValue * 1.609;
                console.log(value);
            } else if (funcOption2 == "CentiMeter") {
                value = funcValue * 160934;
                console.log(value);
            } else if (funcOption2 == "MiliMeter") {
                value = funcValue * 1.609e+6;
                console.log(value);
            } else if (funcOption2 == "MicroMeter") {
                value = funcValue / 1.609e+9;
                console.log(value);
            } else if (funcOption2 == "Foot") {
                value = funcValue * 5280;
                console.log(value);
            } else if (funcOption2 == "Inch") {
                value = funcValue * 63360;
                console.log(value);
            }
            break;

        case 'Foot':
            if (funcOption2 == "Meter") {
                value = funcValue / 3.281;
                console.log(value);
            } else if (funcOption2 == "KiloMeter") {
                value = funcValue / 3281;
                console.log(value);
            } else if (funcOption2 == "CentiMeter") {
                value = funcValue * 30.48;
                console.log(value);
            } else if (funcOption2 == "MiliMeter") {
                value = funcValue * 305;
                console.log(value);
            } else if (funcOption2 == "MicroMeter") {
                value = funcValue * 304800;
                console.log(value);
            } else if (funcOption2 == "Mile") {
                value = funcValue / 5280;
                console.log(value);
            } else if (funcOption2 == "Inch") {
                value = funcValue * 12;
                console.log(value);
            }
            break;

        case 'Inch':
            if (funcOption2 == "Meter") {
                value = funcValue / 39.37;
                console.log(value);
            } else if (funcOption2 == "KiloMeter") {
                value = funcValue / 39370;
                console.log(value);
            } else if (funcOption2 == "CentiMeter") {
                value = funcValue * 2.54;
                console.log(value);
            } else if (funcOption2 == "MiliMeter") {
                value = funcValue * 25.4;
                console.log(value);
            } else if (funcOption2 == "MicroMeter") {
                value = funcValue * 25400;
                console.log(value);
            } else if (funcOption2 == "Mile") {
                value = funcValue / 63360;
                console.log(value);
            } else if (funcOption2 == "Foot") {
                value = funcValue / 12;
                console.log(value);
            }
            break;

        case 'Fahrenheit':
            if (funcOption2 == "Celcius") {
                value = (funcValue - 32) / 1.8;
                console.log(value);
            }
            break;

        case 'Celcius':
            if (funcOption2 == "Fahrenheit") {
                value = (funcValue * 9 / 5) + 32;
                console.log(value);
            }
            break;

        case 'MiliLitre':
            if (funcOption2 == "Litre") {
                value = funcValue / 1000;
                console.log(value);
            }
            break;

        case 'Litre':
            if (funcOption2 == "MiliLitre") {
                value = funcValue * 1000;
                console.log(value);
            }
            break;
    };
    $("#rightInput").val(value);
};