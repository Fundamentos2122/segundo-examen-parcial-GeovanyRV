const attr_toggle = "data-toggle";
const attr_target = "data-target";
const attr_dismiss = "data-dismiss";
const dropdown_class = "dropdown";
const dropdown_toggle = "dropdown-toggle"
const dropdown_menu_class = "dropdown-menu"
const navbar_toggle = "navbar-toggle";
const menu_collapse_class = "navbar-collapse";
const class_modal = "modal";
const class_show = "show";

document.addEventListener("DOMContentLoaded",function(){
    //botones que abren modal

    let modal_open_buttons = document.querySelectorAll(`[${attr_toggle}='${class_modal}']`)
    

    modal_open_buttons.forEach(element => {
        element.addEventListener("click",OpenModal);
    });

    //botones que cierran modal

    let modal_close_buttons = document.querySelectorAll(`[${attr_dismiss}]`)
    

    modal_close_buttons.forEach(element => {
        element.addEventListener("click",CloseModal);
    });

    //Dropdown del submenú

    let dropdown_buttons = document.querySelectorAll(`.${dropdown_class}>.${dropdown_toggle}`)
    

    dropdown_buttons.forEach(element => {
        element.addEventListener("click",ToggleDropdown);
    });

    //Collapse del smenú

    let collapse_menu_buttons = document.querySelectorAll(`.${navbar_toggle}`)
    

    collapse_menu_buttons.forEach(element => {
        element.addEventListener("click",ToggleMenu);
    });
    
});
/**
 * Muestra un modal
 * @param {PonterEvent} e 
 */

function OpenModal(e){
    //obtener el selector del elemento a mostrar
    let modal_selector = e.target.getAttribute(attr_target);

    //obtener el elemento del DOM
    let modal = document.querySelector(modal_selector);

    //agregar la clase para mostrar el modal
    modal.classList.add(class_show);
}
/**
 * Cerrar un modal
 * @param {PonterEvent} e 
 */

function CloseModal(e){
    //obtener el selector del elemento a ocultar
    let modal_selector = e.target.getAttribute(attr_dismiss);

    //obtener el elemento del DOM
    let modal = document.querySelector(modal_selector);

    //Quitar la clase para mostrar el modal
    modal.classList.remove(class_show);
}
/**
 * abrir y cerrar el submenu
 * @param {PointerEvent} e 
 */
function ToggleDropdown(e){
    e.preventDefault();
    
    let submenu = e.target.parentNode.querySelector(`.${dropdown_menu_class}`);

  
   submenu.classList.toggle(class_show);
  
    // if(submenu.classList.contains(class_show)){
    //     submenu.classList.remove(class_show);
    // }
    // else{
    //     submenu.classList.add(class_show);
    // }

}


/**
 * abrir y cerrar el menu
 * @param {PointerEvent} e 
 */
 function ToggleMenu(e){
    e.preventDefault();
    
    let submenu = e.target.parentNode.querySelector(`.${menu_collapse_class}`);

  
   submenu.classList.toggle(class_show);
  
    // if(submenu.classList.contains(class_show)){
    //     submenu.classList.remove(class_show);
    // }
    // else{
    //     submenu.classList.add(class_show);
    // }

}

