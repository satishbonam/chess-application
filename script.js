var chessBoard = document.getElementById('chessBoard')
var div = []

for (i = 0; i < 8; i++) {
    div[i] = []
    for (j = 0; j < 8; j++) {
        div[i][j] = document.createElement('div')
    }
}
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        chessBoard.append(div[i][j])
        if (i % 2 == 1) {
            if (j % 2 == 0) {
                div[i][j].style.backgroundColor = 'brown'
            }
        }
        if (i % 2 == 0) {
            if (j % 2 == 1) {
                div[i][j].style.backgroundColor = 'brown'
            }
        }
        if (i == 6) {
            var pawnWhite = document.createElement('img')
            div[i][j].append(pawnWhite)
            pawnWhite.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png')
            pawnWhite.setAttribute('class', 'wPawn')
            pawnWhite.setAttribute('id', 'white')

        }
        if (i == 1) {
            var pawnBlack = document.createElement('img')
            div[i][j].append(pawnBlack)
            pawnBlack.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png')
            pawnBlack.setAttribute('class', 'bPawn')
            pawnBlack.setAttribute('id', 'black')
        }
        if (i == 0) {
            if (j == 0 || j == 7) {
                var rookBlack = document.createElement('img')
                div[i][j].append(rookBlack)
                rookBlack.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/45px-Chess_rdt45.svg.png')
                rookBlack.setAttribute('class', 'bRook')
                rookBlack.setAttribute('id', 'black')
            }
        }
        if (i == 7) {
            if (j == 0 || j == 7) {
                var rookWhite = document.createElement('img')
                div[i][j].append(rookWhite)
                rookWhite.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/45px-Chess_rlt45.svg.png')
                rookWhite.setAttribute('class', 'wRook')
                rookWhite.setAttribute('id', 'white')
            }
        }
        if (i == 0) {
            if (j == 1 || j == 6) {
                var knightBlack = document.createElement('img')
                div[i][j].append(knightBlack)
                knightBlack.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/45px-Chess_ndt45.svg.png')
                knightBlack.setAttribute('class', 'bKnight')
                knightBlack.setAttribute('id', 'black')
            }
        }
        if (i == 0) {
            if (j == 2 || j == 5) {
                var bishopBlack = document.createElement('img')
                div[i][j].append(bishopBlack)
                bishopBlack.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/45px-Chess_bdt45.svg.png')
                bishopBlack.setAttribute('class', 'bBishop')
                bishopBlack.setAttribute('id', 'black')
            }
        }
        if (i == 0) {
            if (j == 3) {
                var queenBlack = document.createElement('img')
                div[i][j].append(queenBlack)
                queenBlack.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/45px-Chess_qdt45.svg.png')
                queenBlack.setAttribute('id', 'black')
            }
        }
        if (i == 0) {
            if (j == 4) {
                var kingBlack = document.createElement('img')
                div[i][j].append(kingBlack)
                kingBlack.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/45px-Chess_kdt45.svg.png')
                kingBlack.setAttribute('id', 'black')
            }
        }
        if (i == 7) {
            if (j == 1 || j == 6) {
                var knightWhite = document.createElement('img')
                div[i][j].append(knightWhite)
                knightWhite.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/45px-Chess_nlt45.svg.png')
                knightWhite.setAttribute('class', 'wKnight')
                knightWhite.setAttribute('id', 'white')
            }
        }
        if (i == 7) {
            if (j == 2 || j == 5) {
                var bishopWhite = document.createElement('img')
                div[i][j].append(bishopWhite)
                bishopWhite.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/45px-Chess_blt45.svg.png')
                bishopWhite.setAttribute('class', 'wBishop')
                bishopWhite.setAttribute('id', 'white')
            }
        }
        if (i == 7) {
            if (j == 3) {
                var queenWhite = document.createElement('img')
                div[i][j].append(queenWhite)
                queenWhite.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/45px-Chess_qlt45.svg.png')
                queenWhite.setAttribute('class', 'wQueen')
                queenWhite.setAttribute('id', 'white')
            }
        }
        if (i == 7) {
            if (j == 4) {
                var kingWhite = document.createElement('img')
                div[i][j].append(kingWhite)
                kingWhite.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/45px-Chess_klt45.svg.png')
                kingWhite.setAttribute('class', 'wKing')
                kingWhite.setAttribute('id', 'white')
            }

        }

    }
}

wPawn = document.getElementsByClassName('wPawn')
bPawn = document.getElementsByClassName('bPawn')
bRook = document.getElementsByClassName('bRook')
wRook = document.getElementsByClassName('wRook')
wKnight = document.getElementsByClassName('wKnight')
bKnight = document.getElementsByClassName('bKnight')
bBishop = document.getElementsByClassName('bBishop')
wBishop = document.getElementsByClassName('wBishop')
var whiteBtn = document.getElementById("whiteBtn")
var blackBtn = document.getElementById("blackBtn")





function toggle(a) {
    var white
    var black

    if (a == 1) {
        move.textContent = ""
        move.style.backgroundColor = "white"
        move.style.color = "black"

        move.textContent = "Now its WHITE move!!!"
        white = document.querySelectorAll("#white")
        for (i = 0; i < Object.keys(white).length; i++) {
            white[i].addEventListener("click", whiteFunction)
        }
        console.log(1)


    } else {
        white = document.querySelectorAll("#white")
        for (i = 0; i < Object.keys(white).length; i++) {
            white[i].removeEventListener("click", whiteFunction)
        }
        console.log(0)
    }

    if (a == 0) {
        move.textContent = ""
        move.style.backgroundColor = "black"
        move.style.color = "white"
        move.textContent = "Now its BlACK move!!!"
        black = document.querySelectorAll("#black")
        for (i = 0; i < Object.keys(black).length; i++) {
            black[i].addEventListener("click", blackFunction)
        }
        console.log(0)

    } else {

        black = document.querySelectorAll("#black")
        for (i = 0; i < Object.keys(black).length; i++) {
            black[i].removeEventListener("click", blackFunction)
        }
        console.log(1)

    }

}
whiteBtn.addEventListener("click", function (a) {
    a.preventDefault()


    toggle(1)
})
var move = document.getElementById("whoseMove")
var whiteCancel = document.getElementById("whiteCancel")
var blackCancel = document.getElementById("blackCancel")

function whiteFunction(e) {

    console.log('ok')
    // var index = []
    // index = []
    // for (k = 0; k < 8; k++) {
    //     for (l = 0; l < 8; l++) {
    //         if (div[k][l] == e.target.parentNode) {
    //             index = [k, l]
    //         }

    //     }
    // }
    console.log(e.target)

    // var i = index[0]
    // var j = index[1]
    // console.log(div[i][j])
    chessBoard.addEventListener('dblclick', moveElement)

    function moveElement(a) {
        a.preventDefault()
        console.log(a.target)

        if (a.target.firstChild == null && a.target.nodeName == "DIV") {
            a.target.append(e.target)
            chessBoard.removeEventListener("dblclick", moveElement)
        } else if (a.target.firstChild.id == "black" || a.target.id == "black") {
            if (a.target.firstChild.id == "black") {
                whiteCancel.append(a.target.firstChild)
                a.target.append(e.target)
            }
            if (a.target.id == "black") {
                whiteCancel.append(a.target)
                a.target.parentNode.append(e.target)
            }


            chessBoard.removeEventListener("dblclick", moveElement)
        }
        toggle(0)

    }
    // if (div[i][j].firstChild.className == "wPawn") {
    //     console.log("enter")

    //     function movePawn() {
    //         var b = 0


    //         function whitepawn(a) {
    //             a.preventDefault()
    //             a.target.append(e.target)
    //             div[i - 1][j].removeEventListener('click', whitepawn, b++)

    //         }

    //         function whitepawn1(a) {
    //             a.preventDefault()
    //             if (b == 0) {
    //                 a.target.append(e.target)
    //                 div[i - 2][j].removeEventListener('click', whitepawn1)
    //             }

    //         }


    //         if (i == 6) {
    //             if (div[i - 1][j].firstChild == null && div[i - 2][j].firstChild == null) {
    //                 if (e.target.parentNode == div[i][j]) {

    //                     div[i - 1][j].addEventListener('click', whitepawn)
    //                     div[i - 2][j].addEventListener('click', whitepawn1)




    //                 }
    //             } else if (div[i - 1][j].firstChild == null) {
    //                 if (e.target.parentNode == div[i][j]) {

    //                     div[i - 1][j].addEventListener('click', whitepawn)


    //                 }
    //             }
    //         } else {
    //             if (e.target.parentNode == div[i][j]) {
    //                 if (div[i - 1][j].firstChild == null) {

    //                     div[i - 1][j].addEventListener('click', whitepawn)


    //                 }
    //             }
    //         }

    //     }
    //     movePawn()
    // }
    // toggle(0)
}



function blackFunction(e) {

    // var index = []
    // index = []
    // for (k = 0; k < 8; k++) {
    //     for (l = 0; l < 8; l++) {
    //         if (div[k][l] == e.target.parentNode) {
    //             index = [k, l]
    //         }

    //     }
    // }
    // console.log(index)

    // var i = index[0]
    // var j = index[1]
    // console.log(i, j)
    // console.log(e.target)
    // console.log(div[i][j].firstChild.className)
    chessBoard.addEventListener('dblclick', moveElement)

    function moveElement(a) {
        a.preventDefault()
        console.log(a.target)
        if (a.target.firstChild == null && a.target.nodeName == "DIV") {
            a.target.append(e.target)
            chessBoard.removeEventListener("dblclick", moveElement)
        } else if (a.target.firstChild.id == "white" || a.target.id == "white") {
            if (a.target.firstChild.id == "white") {
                blackCancel.append(a.target.firstChild)
                a.target.append(e.target)
            }
            if (a.target.id == "white") {
                blackCancel.append(a.target)
                a.target.parentNode.append(e.target)
            }
        }
        toggle(1)


    }
    // 
    // if (div[i][j].firstChild.className == "bPawn") {
    //     function movePawn() {

    //         var b = 0

    //         function blackpawn(a) {
    //             a.preventDefault()
    //             a.target.append(e.target)
    //             div[i + 1][j].removeEventListener('click', blackpawn, b++)
    //         }

    //         function blackpawn1(a) {
    //             a.preventDefault()
    //             if (b == 0) {
    //                 a.target.append(e.target)
    //                 div[i + 2][j].removeEventListener('click', blackpawn1)
    //             }
    //         }

    //         function blackpawnCancel(a) {
    //             a.preventDefault()
    //             console.log("cancelenter")
    //             if (a.target !== null) {
    //                 a.target.firstChild.remove()
    //                 console.log("canceldone")
    //                 a.target.append(e.target)
    //                 div[i + 1][j + 1].removeEventListener('click', blackpawnCancel)
    //                 div[i + 1][j - 1].removeEventListener('click', blackpawnCancel)
    //             }
    //         }

    //         if (i == 1) {
    //             if (div[i + 1][j].firstChild == null && div[i + 2][j].firstChild == null) {

    //                 if (e.target.parentNode == div[i][j]) {

    //                     div[i + 1][j].addEventListener('click', blackpawn)
    //                     div[i + 2][j].addEventListener('click', blackpawn1)

    //                 }
    //             } else if (div[i + 1][j].firstChild == null) {
    //                 if (e.target.parentNode == div[i][j]) {

    //                     div[i + 1][j].addEventListener('click', blackpawn)



    //                 }
    //             }
    //         } else if (j == 0) {
    //             if (e.target.parentNode == div[i][j]) {
    //                 if (div[i + 1][j + 1].firstChild != null) {
    //                     if (div[i + 1][j + 1].firstChild.id == "white") {

    //                         div[i + 1][j + 1].addEventListener('click', blackpawnCancel)
    //                     }



    //                 }
    //             }
    //         } else if (j == 7) {
    //             if (e.target.parentNode == div[i][j]) {
    //                 if (div[i + 1][j - 1].firstChild != null) {
    //                     if (div[i + 1][j - 1].firstChild.id == "white") {

    //                         div[i + 1][j - 1].addEventListener('click', blackpawnCancel)
    //                     }
    //                 }

    //             }
    //         } else if (j != 0 || j != 7) {
    //             if (e.target.parentNode == div[i][j]) {
    //                 if (div[i + 1][j + 1].firstChild !== null) {
    //                     console.log(div[i + 1][j + 1].firstChild)
    //                     if (div[i + 1][j + 1].firstChild.id == "white") {
    //                         console.log(div[i + 1][j + 1].firstChild.id)
    //                         div[i + 1][j + 1].addEventListener('click', blackpawnCancel)
    //                     }
    //                 }
    //                 if (div[i + 1][j - 1].firstChild !== null) {
    //                     console.log(div[i + 1][j - 1].firstChild)
    //                     if (div[i + 1][j - 1].firstChild.id == "white") {
    //                         console.log(div[i + 1][j - 1].firstChild.id)
    //                         div[i + 1][j - 1].addEventListener('click', blackpawnCancel)
    //                     }
    //                 }
    //             }
    //         } else {
    //             if (e.target.parentNode == div[i][j]) {
    //                 if (div[i + 1][j].firstChild == null) {

    //                     div[i + 1][j].addEventListener('click', blackpawn)



    //                 }
    //             }
    //         }

    //     }
    //     movePawn()
    // }
    // if (div[i][j].firstChild.className == "bRook") {
    //     function moveRook() {

    //         function blackRook(a) {
    //             a.preventDefault()
    //             console.log("here")
    //             if (a.target.firstChild == null) {
    //                 console.log(a.target)
    //                 a.target.append(e.target)
    //                 for (m = 0; m < 8; m++) {
    //                     if (div[i][m] !== div[i][j] || div[m][j] !== div[i][j]) {
    //                         div[i][m].removeEventListener('click', blackRook)
    //                         div[m][j].removeEventListener('click', blackRook)
    //                     }
    //                 }
    //             } else if (a.target.firstChild.id == "white") {
    //                 a.target.firstChild.remove()
    //                 a.target.append(e.target)
    //                 for (m = 0; m < 8; m++) {
    //                     if (div[i][m] !== div[i][j] || div[m][j] !== div[i][j]) {
    //                         div[i][m].removeEventListener('click', blackRook)
    //                         div[m][j].removeEventListener('click', blackRook)
    //                     }
    //                 }

    //             }


    //         }
    //         for (m = 0; m < 8; m++) {
    //             console.log("ok")
    //             if (e.target.parentNode == div[i][j] && div[i][m] !== div[i][j] && div[m][j] !== div[i][j]) {
    //                 // if (m != i) {
    //                 div[i][m].addEventListener('click', blackRook)

    //                 // }
    //                 // if (m != j) {
    //                 div[m][j].addEventListener('click', blackRook)
    //                 // }


    //             }
    //         }


    //     }
    //     moveRook()
    // }


}



// function whiteFunction1(e) {
//     console.log('ok')
//     var index = []
//     index = []
//     for (i = 0; i < 8; i++) {
//         for (j = 0; j < 8; j++) {
//             if (div[i][j] == e.target.parentNode) {
//                 index = [i, j]
//             }

//         }
//     }
//     for (i = 0; i < 8; i++) {
//         for (j = 0; j < 8; j++) {
//             div[i][index[1]].addEventListener('click', function (a) {
//                 // a.preventDefault()
//                 a.target.append(e.target)
//             })
//         }

//     }
//     for (i = 0; i < 8; i++) {
//         for (j = 0; j < 8; j++) {
//             div[index[0]][j].addEventListener('click', function (a) {
//                 // a.preventDefault()
//                 a.target.append(e.target)
//             })
//         }

//     }
// }

// function whiteKnightFunction(e) {
//     console.log('ok')
//     var index = []
//     index = []
//     for (i = 0; i < 8; i++) {
//         for (j = 0; j < 8; j++) {
//             if (div[i][j] == e.target.parentNode) {
//                 index = [i, j]
//             }

//         }
//     }
//     console.log(index)

//     div[index[0] - 2][index[1] + 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] - 2][index[1] - 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 1][index[1] + 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 1][index[1] - 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] - 1][index[1] + 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] - 1][index[1] - 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 2][index[1] + 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 2][index[1] - 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
// }






// function blackRookFunction(e) {
//     console.log('ok')
//     var index = []
//     index = []
//     for (k = 0; k < 8; k++) {
//         for (l = 0; l < 8; l++) {
//             if (div[k][l] == e.target.parentNode) {
//                 index = [k, l]
//             }

//         }
//     }
//     console.log(index)

//     var i = index[0]
//     var j = index[1]
//     console.log(i, j)

//     console.log(e.target)

// }



// function blackKnightFunction(e) {
//     console.log('ok')
//     var index = []
//     index = []
//     for (i = 0; i < 8; i++) {
//         for (j = 0; j < 8; j++) {
//             if (div[i][j] == e.target.parentNode) {
//                 index = [i, j]
//             }

//         }
//     }
//     console.log(index)
//     div[index[0] + 2][index[1] + 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 2][index[1] - 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 1][index[1] + 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 1][index[1] + 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 1][index[1] - 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 2][index[1] + 1].addEventListener('cconsole.log(count)lick', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 2][index[1] - 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] - 2][index[1] + 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] - 2][index[1] - 1].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 1][index[1] + 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] + 1][index[1] - 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] - 1][index[1] + 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
//     div[index[0] - 1][index[1] - 2].addEventListener('click', function (a) {
//         // a.preventDefault()
//         a.target.append(e.target)
//     })
// }

// function blackBishopFunction(e) {
//     console.log('ok')
//     var index = []
//     index = []
//     for (i = 0; i < 8; i++) {
//         for (j = 0; j < 8; j++) {
//             if (div[i][j] == e.target.parentNode) {
//                 index = [i, j]
//             }

//         }
//     }
//     console.log(index)
//     for (i = 0; i < 8; i++) {
//         div[index[0] + i][index[1] + i].addEventListener('click', function (a) {
//             // a.preventDefault()
//             a.target.append(e.target)
//         })
//         div[index[0] + i][index[1] - i].addEventListener('click', function (a) {
//             // a.preventDefault()
//             a.target.append(e.target)
//         })
//         div[index[0] - i][index[1] - i].addEventListener('click', function (a) {
//             // a.preventDefault()
//             a.target.append(e.target)
//         })
//         div[index[0] - i][index[1] + i].addEventListener('click', function (a) {
//             // a.preventDefault()
//             a.target.append(e.target)
//         })
//     }


// }

// function whiteBishopFunction(e) {
//     console.log('ok')
//     var index = []
//     index = []
//     for (i = 0; i < 8; i++) {
//         for (j = 0; j < 8; j++) {
//             if (div[i][j] == e.target.parentNode) {
//                 index = [i, j]
//             }

//         }
//     }
//     console.log(index)
//     for (i = 0; i < 8; i++) {
//         div[index[0] - i][index[1] - i].addEventListener('click', function (a) {
//             // a.preventDefault()
//             a.target.append(e.target)
//         })
//         div[index[0] - i][index[1] + i].addEventListener('click', function (a) {
//             // a.preventDefault()
//             a.target.append(e.target)
//         })
//         div[index[0] + i][index[1] + i].addEventListener('click', function (a) {
//             // a.preventDefault()
//             a.target.append(e.target)
//         })
//         div[index[0] + i][index[1] - i].addEventListener('click', function (a) {
//             // a.preventDefault()
//             a.target.append(e.target)
//         })
//     }
// }
// if (toggle) {


// }
// for (i = 0; i < bRook.length; i++) {


// }
// if (!toggle) {
//     for (i = 0; i < wPawn.length; i++) {
//         // console.log(toggle)

//         wPawn[i].removeEventListener('click', whitePawnFunction)
//     }
// }