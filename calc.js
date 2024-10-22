//display
function display(num) {

    // document.getElementById('result').value += num

    // return num
    result.value += num

}
//solve

function solve() {

    try {
        result.value = eval(result.value)
        if (result.value == 'undefined') {
            result.value = 'Error'
            setTimeout(() => {
                result.value = ""
            },1000)
        }
    }
    catch {
        result.value = 'Error'
        setTimeout(() => {
            result.value = ""
        },1000)
    }

}
//clearscreen
function clearScreen() {

    result.value = ''

}
//remove backbutton
function Backbtn() {
    result.value = result.value.slice(0, -1)
}