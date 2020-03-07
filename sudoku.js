var sudokuBoard = document.getElementById('sudokuBoard')
var div = []

for (i = 0; i < 8; i++) {
    div[i] = []
    for (j = 0; j < 8; j++) {
        div[i][j] = document.createElement('div')
    }
}
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        sudokuBoard.append(div[i][j])
    }
}