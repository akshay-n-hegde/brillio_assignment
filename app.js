var button = document.getElementById("button")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var box = document.getElementById("boxes")
var b6 = document.getElementById("b6")


button.addEventListener("click", function () {
    if ((b1.value == b2.value) || (b1.value == b3.value) || (b1.value == b4.value) || (b1.value == b5.value)) {
        b1.value = ""
    }
    if ((b2.value == b3.value) || (b2.value == b4.value) || (b2.value == b5.value)) {
        b2.value = ""
    }
    if ((b3.value == b4.value) || (b4.value == b5.value)) {
        b3.value = ""
    }
    if ((b4.value == b5.value)) {
        b4.value = ""
    }
    var values = b6.value.split(" ");
    values.forEach(element => {
        if (element == b1.value) {
            let dlt = (values.indexOf(element))
            values.splice(dlt, 1)
            b6.value = values.join()
        }
        if (element == b2.value) {
            let dlt = (values.indexOf(element))
            values.splice(dlt, 1)
            b6.value = values.join()
        }
        if (element == b3.value) {
            let dlt = (values.indexOf(element))
            values.splice(dlt, 1)
            b6.value = values.join()
        }
        if (element == b4.value) {
            let dlt = (values.indexOf(element))
            values.splice(dlt, 1)
            b6.value = values.join()
        }
        if (element == b5.value) {
            let dlt = (values.indexOf(element))
            values.splice(dlt, 1)
            b6.value = values.join()
        }
    });
})