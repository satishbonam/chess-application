var sudokuBoard = document.getElementById('sudokuBoard')
var div = []

for (i = 0; i < 9; i++) {
    div[i] = []
    for (j = 0; j < 9; j++) {
        div[i][j] = document.createElement('div')
        div[i][j].setAttribute("class", "border border-primary")
        div[i][j].probables = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
}
for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
        sudokuBoard.append(div[i][j])

    }

    div[i][2].setAttribute("class", "border border-primary mr-1")
    div[i][5].setAttribute("class", "border border-primary mr-1")
    div[2][i].setAttribute("class", "border border-primary mb-1")
    div[5][i].setAttribute("class", "border border-primary mb-1")
}
div[2][2].setAttribute("class", "border border-primary mr-1 mb-1")
div[2][5].setAttribute("class", "border border-primary mr-1 mb-1")
div[5][5].setAttribute("class", "border border-primary mr-1 mb-1")


for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        // console.log(div[i][j].probables)
        div[i][j].class = "box0"

    }
}
for (i = 0; i < 3; i++) {
    for (j = 3; j < 6; j++) {
        div[i][j].class = "box1"


    }
}
for (i = 0; i < 3; i++) {
    for (j = 6; j < 9; j++) {
        div[i][j].class = "box2"


    }
}
for (i = 3; i < 6; i++) {
    for (j = 0; j < 3; j++) {
        div[i][j].class = "box3"


    }
}
for (i = 3; i < 6; i++) {
    for (j = 3; j < 6; j++) {
        div[i][j].class = "box4"


    }
}
for (i = 3; i < 6; i++) {
    for (j = 6; j < 9; j++) {
        div[i][j].class = "box5"


    }
}
for (i = 6; i < 9; i++) {
    for (j = 0; j < 3; j++) {
        div[i][j].class = "box6"


    }
}
for (i = 6; i < 9; i++) {
    for (j = 3; j < 6; j++) {
        div[i][j].class = "box7"

    }
}
for (i = 6; i < 9; i++) {
    for (j = 6; j < 9; j++) {
        div[i][j].class = "box8"

    }
}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function insertNumbers(box, a, b, c, d) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var n = getRandomArbitrary(4, 8)

    for (l = 0; l < n; l++) {
        var m = getRandomArbitrary(a, b)
        var p = getRandomArbitrary(c, d)
        var q = getRandomArbitrary(0, 9)
        if (div[m][p].class == box) {
            if (arr[q] != undefined && checkRow(m, arr[q]) && checkColumn(p, arr[q])) {
                div[m][p].innerHTML = (arr[q])
                var s = arr.indexOf(Number(div[m][p].innerHTML))
                var r = swap(arr[s], arr[arr.length - 1])
                arr[s] = r[0]
                arr[arr.length - 1] = r[1]
                arr.pop()
            }
        }

    }
    updateProbableBox(box)

    // updateProbableColumn(c, d)

}

insertNumbers("box0", 0, 3, 0, 3)
insertNumbers("box1", 0, 3, 3, 6)
insertNumbers("box2", 0, 3, 6, 9)
insertNumbers("box3", 3, 6, 0, 3)
insertNumbers("box4", 3, 6, 3, 6)
insertNumbers("box5", 3, 6, 6, 9)
insertNumbers("box6", 6, 9, 0, 3)
insertNumbers("box7", 6, 9, 3, 6)
insertNumbers("box8", 6, 9, 6, 9)



function updateProbableBox(box) {
    var boxCheck = []
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (div[i][j].class == box) {
                if (Number(div[i][j].innerHTML) !== 0) {
                    boxCheck.push(Number(div[i][j].innerHTML))
                    div[i][j].probables = []
                }
            }
        }
    }

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            // console.log(boxCheck)
            if (div[i][j].class == box && Number(div[i][j].innerHTML) == 0) {
                boxCheck.forEach(function (a) {
                    for (l = 0; l < div[i][j].probables.length; l++) {
                        if (div[i][j].probables[l] == a) {
                            var r = swap(div[i][j].probables[l], div[i][j].probables[div[i][j].probables.length - 1])
                            div[i][j].probables[l] = r[0]
                            div[i][j].probables[div[i][j].probables.length - 1] = r[1]
                            div[i][j].probables.pop()
                        }
                    }
                })
            }
        }
    }

}
updateProbableRow(0, 9)

function updateProbableRow(a, c) {
    for (k = a; k < c; k++) {
        var rowCheck = []
        for (i = 0; i < div[k].length; i++) {
            if (Number(div[k][i].innerHTML) !== 0) {
                rowCheck.push(Number(div[k][i].innerHTML))
            }

        }
        rowCheck.forEach(function (b) {
            for (j = 0; j < div[k].length; j++) {
                for (l = 0; l < div[k][j].probables.length; l++) {
                    if (b == div[k][j].probables[l]) {
                        var r = swap(div[k][j].probables[l], div[k][j].probables[div[k][j].probables.length - 1])
                        div[k][j].probables[l] = r[0]
                        div[k][j].probables[div[k][j].probables.length - 1] = r[1]
                        div[k][j].probables.pop()
                    }
                }
            }
        })
    }
}

updateProbableColumn(0, 3)

function updateProbableColumn(a, c) {
    for (k = 0; k < 1; k++) {
        var columnCheck = []
        for (i = 0; i < div[k].length; i++) {
            if (Number(div[i][k].innerHTML) !== 0) {
                columnCheck.push(Number(div[i][k].innerHTML))
            }
        }
        // console.log(columnCheck)
        columnCheck.forEach(function (b) {
            for (j = 0; j < 9; j++) {
                for (l = 0; l < div[j][k].probables.length; l++) {
                    // console.log(div[j][k])
                    if (b == div[j][k].probables[l]) {
                        var r = swap(div[j][k].probables[l], div[j][k].probables[div[j][k].probables.length - 1])
                        div[j][k].probables[l] = r[0]
                        div[j][k].probables[div[j][k].probables.length - 1] = r[1]
                        div[j][k].probables.pop()
                    }
                }
            }
        })
    }
}

function checkRow(i, ele) {
    // console.log(i)
    var count = 0
    for (j = 0; j < 9; j++) {
        // console.log(div[i][j].innerHTML)
        if (Number(div[i][j].innerHTML) == ele) {
            count++
        }
    }
    if (count > 0) {
        return false
    } else {
        return true
    }
}

function checkColumn(i, ele) {
    // console.log(i)
    var count = 0
    for (j = 0; j < 9; j++) {
        // console.log(div[j][i].innerHTML)
        if (Number(div[j][i].innerHTML) == ele) {
            count++

        }
    }
    if (count > 0) {
        return false
    } else {
        return true
    }
}



function swap(a, b) {
    var temp = a
    a = b
    b = temp
    return [a, b]
}
for (i = 0; i < 81; i++) {
    // console.log($("#sudokuBoard>div")[i].probables, $("#sudokuBoard>div")[i])
}
$("#sudokuBoard>div").click(function (e) {



    $("button").click(function (a) {
        e.target.innerHTML = this.textContent
    })
    $("#keypad>button:nth-of-type(10)").click(function (b) {
        e.target.innerHTML = ""
    })

})
createKeypad()

function createKeypad() {
    for (i = 1; i < 10; i++) {
        $("#keypad").append("<button>" + i + "</button>")
    }
    $("button").addClass("btn btn-primary m-2")
    $("#keypad").append("<button>Erase</button>")
    $("#keypad>button:nth-of-type(10)").addClass("btn btn-secondary btn-lg btn-block").css({
        "width": "200px"
    })
}