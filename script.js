var chessBoard=document.getElementById('chessBoard')
var div=[]
for(i=0;i<8;i++){
    div[i]=[]
    for(j=0;j<8;j++){
        div[i][j]=document.createElement('div')
    }
}
for(i=0;i<8;i++){
    for(j=0;j<8;j++){
       chessBoard.append(div[i][j])
       if(i%2==1){
           if(j%2==0){
               div[i][j].style.backgroundColor='brown'
           }
       }
       if(i%2==0){
           if(j%2==1){
            div[i][j].style.backgroundColor='brown'
        }
        }
        if(i==6){
            var pawnWhite=document.createElement('img')
            div[i][j].append(pawnWhite)
            pawnWhite.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png')
            pawnWhite.setAttribute('class','wPawn')

        }
        if(i==1){
            var pawnBlack=document.createElement('img')
            div[i][j].append(pawnBlack)
            pawnBlack.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png')
            pawnBlack.setAttribute('class','bPawn')
        }
        if(i==0){
            if(j==0 || j==7){
                var rookBlack=document.createElement('img')
                div[i][j].append(rookBlack)
                rookBlack.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/45px-Chess_rdt45.svg.png')
                rookBlack.setAttribute('class','bRook')
            }
        }
        if(i==7){
            if(j==0 || j==7){
                var rookWhite=document.createElement('img')
                div[i][j].append(rookWhite)
                rookWhite.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/45px-Chess_rlt45.svg.png')
                rookWhite.setAttribute('class','wRook')
            }
        }
        if(i==0){
            if(j==1 || j==6){
                var knightBlack=document.createElement('img')
                div[i][j].append(knightBlack)
                knightBlack.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/45px-Chess_ndt45.svg.png')
                knightBlack.setAttribute('class','bKnight')
            }
        }
        if(i==0){
            if(j==2 || j==5){
                var bishopBlack=document.createElement('img')
                div[i][j].append(bishopBlack)
                bishopBlack.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/45px-Chess_bdt45.svg.png')
                bishopBlack.setAttribute('class','bBishop')
            }
        }
        if(i==0){
            if(j==3){
                var queenBlack=document.createElement('img')
                div[i][j].append(queenBlack)
                queenBlack.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/45px-Chess_qdt45.svg.png')
            }
        }
        if(i==0){
            if(j==4){
                var kingBlack=document.createElement('img')
                div[i][j].append(kingBlack)
                kingBlack.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/45px-Chess_kdt45.svg.png')
            }
        }
        if(i==7){
            if(j==1 || j==6){
                var knightWhite=document.createElement('img')
                div[i][j].append(knightWhite)
                knightWhite.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/45px-Chess_nlt45.svg.png')
                knightWhite.setAttribute('class','wKnight')
            }
        }
        if(i==7){
            if(j==2 || j==5){
                var bishopWhite=document.createElement('img')
                div[i][j].append(bishopWhite)
                bishopWhite.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/45px-Chess_blt45.svg.png')
                bishopWhite.setAttribute('class','wBishop')
            }
        }
        if(i==7){
            if(j==3){
                var queenWhite=document.createElement('img')
                div[i][j].append(queenWhite)
                queenWhite.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/45px-Chess_qlt45.svg.png')
            }
        }
        if(i==7){
            if(j==4){
                var kingWhite=document.createElement('img')
                div[i][j].append(kingWhite)
                kingWhite.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/45px-Chess_klt45.svg.png')
            }
        }
       
    }
}
wPawn=document.getElementsByClassName('wPawn')
bPawn=document.getElementsByClassName('bPawn')
bRook=document.getElementsByClassName('bRook')
wRook=document.getElementsByClassName('wRook')
wKnight=document.getElementsByClassName('wKnight')
bKnight=document.getElementsByClassName('bKnight')
bBishop=document.getElementsByClassName('bBishop')
wBishop=document.getElementsByClassName('wBishop')
for(i=0;i<wPawn.length;i++){
    wPawn[i].addEventListener('click',whitePawnFunction)
    bPawn[i].addEventListener('click',blackPawnFunction)
    
}
for(i=0;i<bRook.length;i++){
    bRook[i].addEventListener('click',blackRookFunction)
    wRook[i].addEventListener('click',whiteRookFunction)
    bKnight[i].addEventListener('click',blackKnightFunction)
    wKnight[i].addEventListener('click',whiteKnightFunction)
    bBishop[i].addEventListener('click',blackBishopFunction)
    wBishop[i].addEventListener('click',whiteBishopFunction)
    
}


function whitePawnFunction(e){
    console.log('ok')
    var index=[]
    index=[]
    for(i=0;i<8;i++){
       for(j=0;j<8;j++){
           if(div[i][j]==e.target.parentNode){
               index=[i,j]
           }
           
       }
    }
    
    function left(){
        index[1]++
        return index
    }
    function right(){
        index[1]--
        return index
    }
    function down(){
        index[0]++
        return index
    }
    function up(){
        index[0]--
        return index
    }
    console.log(index)

        up()
        up()
    div[index[0]][index[1]].addEventListener('click',function(a){
        a.preventDefault()
        
            a.target.append(e.target)
        
    })
     div[index[0]+1][index[1]].addEventListener('click',function(a){
        a.preventDefault()
       
            a.target.append(e.target)

})
}
function blackPawnFunction(e){
        console.log('ok')
        var index=[]
        index=[]
        for(i=0;i<8;i++){
           for(j=0;j<8;j++){
               if(div[i][j]==e.target.parentNode){
                   index=[i,j]
               }
               
           }
        }
        console.log(index)
        for(i=1;i<3;i++){
            div[index[0]+i][index[1]].addEventListener('click',function(a){
                a.preventDefault()
                a.target.append(e.target)
            })
        }
}
function blackRookFunction(e){
    console.log('ok')
    var index=[]
    index=[]
    for(i=0;i<8;i++){
       for(j=0;j<8;j++){
           if(div[i][j]==e.target.parentNode){
               index=[i,j]
           }
           
       }
    }
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            div[i][index[1]].addEventListener('click',function(a){
                // a.preventDefault()
                a.target.append(e.target)
            })
        }
        
    }
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            div[index[0]][j].addEventListener('click',function(a){
                // a.preventDefault()
                a.target.append(e.target)
            })
        }
        
    }
}
function whiteRookFunction(e){
    console.log('ok')
    var index=[]
    index=[]
    for(i=0;i<8;i++){
       for(j=0;j<8;j++){
           if(div[i][j]==e.target.parentNode){
               index=[i,j]
           }
           
       }
    }
    for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                div[i][index[1]].addEventListener('click',function(a){
                    // a.preventDefault()
                    a.target.append(e.target)
                })
            }
            
    }
    for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                div[index[0]][j].addEventListener('click',function(a){
                    // a.preventDefault()
                    a.target.append(e.target)
                })
            }
            
        }
}
function whiteKnightFunction(e){
    console.log('ok')
    var index=[]
    index=[]
    for(i=0;i<8;i++){
       for(j=0;j<8;j++){
           if(div[i][j]==e.target.parentNode){
               index=[i,j]
           }
           
       }
    }
    console.log(index)
    
    div[index[0]-2][index[1]+1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]-2][index[1]-1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+1][index[1]+2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+1][index[1]-2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]-1][index[1]+2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]-1][index[1]-2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+2][index[1]+1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+2][index[1]-1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
}
function blackKnightFunction(e){
    console.log('ok')
    var index=[]
    index=[]
    for(i=0;i<8;i++){
       for(j=0;j<8;j++){
           if(div[i][j]==e.target.parentNode){
               index=[i,j]
           }
           
       }
    }
    console.log(index)
    div[index[0]+2][index[1]+1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+2][index[1]-1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+1][index[1]+2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+1][index[1]+2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+1][index[1]-2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+2][index[1]+1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+2][index[1]-1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]-2][index[1]+1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]-2][index[1]-1].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+1][index[1]+2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+1][index[1]-2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]-1][index[1]+2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]-1][index[1]-2].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
}
function blackBishopFunction(e){
    console.log('ok')
    var index=[]
    index=[]
    for(i=0;i<8;i++){
       for(j=0;j<8;j++){
           if(div[i][j]==e.target.parentNode){
               index=[i,j]
           }
           
       }
    }
    console.log(index)
    for(i=0;i<8;i++){
        div[index[0]+i][index[1]+i].addEventListener('click',function(a){
            // a.preventDefault()
            a.target.append(e.target)
    })
    div[index[0]+i][index[1]-i].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]-i][index[1]-i].addEventListener('click',function(a){
            // a.preventDefault()
            a.target.append(e.target)
    })
    div[index[0]-i][index[1]+i].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    }
   
   
}
function whiteBishopFunction(e){
    console.log('ok')
    var index=[]
    index=[]
    for(i=0;i<8;i++){
       for(j=0;j<8;j++){
           if(div[i][j]==e.target.parentNode){
               index=[i,j]
           }
           
       }
    }
    console.log(index)
    for(i=0;i<8;i++){
        div[index[0]-i][index[1]-i].addEventListener('click',function(a){
            // a.preventDefault()
            a.target.append(e.target)
    })
    div[index[0]-i][index[1]+i].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
    div[index[0]+i][index[1]+i].addEventListener('click',function(a){
            // a.preventDefault()
            a.target.append(e.target)
    })
    div[index[0]+i][index[1]-i].addEventListener('click',function(a){
        // a.preventDefault()
        a.target.append(e.target)
    })
}
}

    
   

        

    
    




