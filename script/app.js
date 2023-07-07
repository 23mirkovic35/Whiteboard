// menu bar settings 

const checkBoxArray = document.querySelectorAll('input');
let selectedItem = "pointer";
let lastSelectedItemArray = new Array(3);

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
    }
    shiftPressed = false;
});

// drawing on canvas

const main = document.getElementById('main');
const mctx = main.getContext('2d')
main.height = window.innerHeight
main.width = window.innerWidth
const draft = document.getElementById('draft');
const ctx = draft.getContext('2d');
draft.height = window.innerHeight;
draft.width = window.innerWidth;

draft.addEventListener("click", ()=>{
    restartAllCheckboxs();
})
