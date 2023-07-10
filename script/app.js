// menu bar settings 

const checkBoxArray = document.querySelectorAll('input');
let selectedItem = "pointer";
let lastSelectedItemArray = new Array(3);

var selectedColor;

function initLastSelectedItemArray(){
    lastSelectedItemArray[0] = "pointer";
    lastSelectedItemArray[1] = "pencile";
    lastSelectedItemArray[2] = "none";
}

initLastSelectedItemArray();

checkBoxArray.forEach(checkbox => {
    checkbox.addEventListener("click", function() {
      if (this.checked) {
        checkBoxArray.forEach(cb => {
          if (cb !== this) {
            cb.checked = false;
          }
        });
      }
    });
});

function restartAllCheckboxs(){
    checkBoxArray.forEach(checkbox => { checkbox.checked = false; });
}

const menuItems = document.querySelectorAll('.menu-bar .item');

function deactivateMenuItems() {
    menuItems.forEach(item => { item.classList.remove('active') });
}

function activeMenuItem(index, svg_number){ 
    deactivateMenuItems();
    menuItems[index].classList.add('active');
    changeMenuItemSvg(index, svg_number);
    restartAllCheckboxs();
    console.log(selectedItem); // <-----
}

function setSelectedItem(index, svg_number){
    switch(index){
        case 0:{
            if(svg_number == 0) selectedItem = "pointer";
            else selectedItem = "hand";
            lastSelectedItemArray[0] = selectedItem;
            break;
        }
        case 1:{
            if(svg_number == 0) selectedItem = "pencile";
            else if(svg_number == 1) selectedItem = "marker";
            else if(svg_number == 2) selectedItem = "highlighter";
            else selectedItem = "eraser";
            lastSelectedItemArray[1] = selectedItem;
            break;
        }
        case 2:{
            if(svg_number == 1) selectedItem = "rectangle";
            else if(svg_number == 2) selectedItem = "circle";
            else selectedItem = "triangle";
            lastSelectedItemArray[2] = selectedItem;
            break;
        }
        case 3:{
            selectedItem = "line";
            break;
        }
        case 4:{
            selectedItem = "text";
            break;
        }
        case 5:{
            selectedItem = "image";
            break;
        }
        default: break;
    }
}

function changeMenuItemSvg(index, svg_number){
    switch(index){
        case 0:{
            const svgArray = document.querySelectorAll('.selected-pointer svg');
            svgArray.forEach(svg => svg.classList.remove('selected'));
            svgArray[svg_number].classList.add('selected');
            setSelectedItem(index, svg_number);
            break;
        }
        case 1:{
            const svgArray = document.querySelectorAll('.selected-pen svg');
            svgArray.forEach(svg => svg.classList.remove('selected'));
            svgArray[svg_number].classList.add('selected');
            setSelectedItem(index, svg_number);
            break;
        }
        case 2: {
            const svgArray = document.querySelectorAll('.selected-shape svg');
            svgArray.forEach(svg => svg.classList.remove('selected'));
            svgArray[svg_number].classList.add('selected');
            setSelectedItem(index, svg_number);
        }
        case 3:{
            setSelectedItem(index, svg_number);
            break;
        }
        case 4:{
            setSelectedItem(index, svg_number);
            break;
        }
        case 5:{
            setSelectedItem(index, svg_number);
            break;
        }
        default: break;
    }
}

var shiftPressed = false;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 16){
        shiftPressed = true;
    }
});

function findType(number){
    retVal = 0;
    switch(number){
        case 0:{
            if(lastSelectedItemArray[0] == "pointer") retVal = 0;
            else retVal = 1;
            break;
        }
        case 2:{
            console.log(lastSelectedItemArray[2]);
            if(lastSelectedItemArray[2] == "none"){
                restartAllCheckboxs();
                checkBoxArray[2].checked = true;
                break;
            }
            else if(lastSelectedItemArray[2] == "rectangle") retVal = 1;
            else if(lastSelectedItemArray[2] == "circle") retVal = 2;
            else retVal = 3;
            break;
        }
        default:break;
    }
    return retVal;
}

document.addEventListener('keyup', function(event) {
    if(shiftPressed){
        if(event.key == 'P'){
            let type = findType(0);
            activeMenuItem(0,type);
        }
        else if(event.key == 'D'){
            let type = findType(1);
            activeMenuItem(1,type);
        }
        else if(event.key == 'S'){
            let type = findType(2);
            if(lastSelectedItemArray[2]!="none") activeMenuItem(2,type);
        }
        else if(event.key == 'L'){
            activeMenuItem(3,0);
        }
        else if(event.key == 'C'){
            checkBoxArray[6].checked = true;

        }
    }
    shiftPressed = false;
});

function setColor(index){
    const colorItem = document.getElementById("current-color");
    switch (index) {
        case 1:
            selectedColor = "black";
            colorItem.style.backgroundColor="#252525";
            break;
        case 2: 
            selectedColor = "yellow";
            colorItem.style.backgroundColor="rgb(254, 212, 48)";
            break;
        case 3:
            selectedColor = "light-orange";
            colorItem.style.backgroundColor="rgb(251, 174, 23)";
            break;
        case 4:
            selectedColor = "orange";
            colorItem.style.backgroundColor="rgb(243, 99, 35)";
            break;
        case 5:
            selectedColor = "red";//
            colorItem.style.backgroundColor="rgb(191,0,0)";
            break;
        case 6:
            selectedColor = "dark-red";
            colorItem.style.backgroundColor="rgb(128,0,0)";
            break;   
        case 7:
            selectedColor = "magenta";
            colorItem.style.backgroundColor="rgb(207, 18, 120)";
            break;
        case 8:
            selectedColor = "dark-purple";
            colorItem.style.backgroundColor="rgb(91, 49, 141)";
            break; 
        case 9:
            selectedColor = "purple";
            colorItem.style.backgroundColor="rgb(145, 75, 184)";
            break; 
        case 10:
            selectedColor = "light-blue";
            colorItem.style.backgroundColor="rgb(62, 204, 253)";
            break; 
        case 11:
            selectedColor = "blue";
            colorItem.style.backgroundColor="rgb(0, 105, 253)";
            break; 
        case 12:
            selectedColor = "light-green";
            colorItem.style.backgroundColor="rgb(126, 196, 0)";
            break; 
        case 13:
            selectedColor = "green";
            colorItem.style.backgroundColor="rgb(2, 165, 86)";
            break; 
        case 14:
            selectedColor = "light-gray";
            colorItem.style.backgroundColor="rgb(235, 235, 235)";
            break; 
        case 15:
            selectedColor = "gray";
            colorItem.style.backgroundColor="rgb(182, 182, 182)";
            break; 

        default:
            break;
    }
    checkBoxArray[6].checked = false;
}

function getColor(){
    switch(selectedColor){
        case "black": return "#252525";
        case "yellow": return "rgb(254, 212, 48)";
        case "light-orange": return "rgb(251, 174, 23)";
        case "orange": return "rgb(251, 174, 23)";
        case "red":return "rgb(191,0,0)"
        case "dark-red":return "rgb(128,0,0)"
        case "magenta":return "rgb(207, 18, 120)"
        case "dark-purple":return "rgb(91, 49, 141)"
        case "purple":return "rgb(145, 75, 184)"
        case "light-blue": return "rgb(62, 204, 253)"
        case "blue": return "rgb(0, 105, 253)";
        case "light-green": return "rgb(126, 196, 0)"
        case "green": return "rgb(2, 165, 86)";
        case "light-gray": return "rgb(235, 235, 235)"
        case "gray": return "rgb(182, 182, 182)";
        default: break;
    }
    return "";
}


// drawing on canvas

var draft = document.getElementById('draft')
var ctx = draft.getContext('2d')
draft.height = window.innerHeight
draft.width = window.innerWidth
var main = document.getElementById('main')
var mctx = main.getContext('2d')
main.height = window.innerHeight
main.width = window.innerWidth

var action = "none";
var prev;
var alpha = 0.4;

function getXY(e) {
    var r = draft.getBoundingClientRect();
    return {x: e.clientX - r.left, y: e.clientY - r.top}
}

draft.addEventListener('mousedown', handleMouseDown);
draft.addEventListener('mousemove', handleMouseMove);
draft.addEventListener('mouseup', handleMouseUp);


function drawPen(event){
    ctx.strokeStyle = getColor();
    ctx.lineWidth = 1;                 
    var point = getXY(event)
    ctx.beginPath()
    ctx.moveTo(prev.x, prev.y)      
    ctx.lineTo(point.x, point.y)
    ctx.stroke()  
    ctx.closePath()                
    prev = point
}

function drawMarker(event){
    ctx.strokeStyle = getColor();
    ctx.lineWidth = 5;
    draft.style.opacity = 1        
    mctx.globalAlpha = 1                
    var point = getXY(event)
    ctx.beginPath()            
    ctx.moveTo(prev.x, prev.y)      
    ctx.lineTo(point.x, point.y)
    ctx.stroke()  
    ctx.closePath()                
    prev = point
}


function drawHighlighter(e){
    ctx.strokeStyle = getColor();
    ctx.lineWidth = 16;
    ctx.lineCap = "round";
    draft.style.opacity = alpha;                        
    mctx.globalAlpha = alpha;                           
    var point = getXY(e);
    ctx.beginPath();                                  
    ctx.moveTo(prev.x, prev.y);                       
    ctx.lineTo(point.x, point.y);                     
    ctx.stroke();                                     
    prev = point;   
}

function drawRect(e){
    const point = getXY(e)
    ctx.clearRect(0, 0, draft.width, draft.height)
    width = point.x - prev.x;
    height = point.y - prev.y;
    ctx.beginPath()
    ctx.rect(prev.x, prev.y, width, height);
    ctx.stroke()
    ctx.closePath()
}

function drawCircle(e){
    ctx.strokeStyle = getColor();
    const point = getXY(e)
    radius = Math.sqrt(Math.pow(point.x - prev.x, 2) + Math.pow(point.y - prev.y, 2))
    ctx.clearRect(0, 0, draft.width, draft.height)
    ctx.beginPath()
    ctx.arc(prev.x, prev.y, radius, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()
}

function drawStraightLine(e){
    ctx.strokeStyle = getColor();
    const point = getXY(e)
    ctx.clearRect(0, 0, draft.width, draft.height)
    width = point.x - prev.x;
    height = point.y - prev.y;
    ctx.beginPath()
    ctx.moveTo(prev.x, prev.y)                 
    ctx.lineTo(point.x, point.y)
    ctx.stroke()
    ctx.closePath()
}


const handleBlue = () =>{
    console.log("text is set");
}


function handleMouseDown(event) {
    if(selectedItem == "pointer") action = "moving";
    else if(selectedItem!="text") action = "drawing";
    else {
        action = "writing";
        const point = getXY(event);
        const textarea = document.getElementById("textarea");
        textarea.style.visibility = "visible";
        textarea.style.top = point.y + "px";
        textarea.style.left = point.x + "px";   
    }
  prev = getXY(event);
}


function handleMouseMove(event) {
    if(action=="none") return;
    switch(selectedItem){
        case "pencile":{
            drawPen(event);
            break;
        }
        case "marker":{
            drawMarker(event);
            break;
        }
        case "highlighter":{
            drawHighlighter(event);
            break;
        }
        case "rectangle":{
            drawRect(event);
            break;
        }
        case "circle":{
            drawCircle(event);
            break;
        }
        case "line":{
            drawStraightLine(event);
            break;
        }
        default:break;
    }
}

function handleMouseUp() {
    if(action=="writing") return;
    mctx.drawImage(draft, 0, 0);
    ctx.clearRect(0,0,draft.width,draft.height);
    action = "none";
}

draft.addEventListener("click", ()=>{
    restartAllCheckboxs();
})
