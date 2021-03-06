import Burger from '@animated-burgers/{burger-style}' 
// don't forget the styles
import '@animated-burgers/{burger-style}/dist/styles.css' 
 
export const ham_menu=()=>{
    return(
 
// default state, other props are passed down to the wrapping element
  <Burger {...props}/>
 
// open state
  <Burger isOpen={ true } />
 
// some burgers, such as arrow, supports direction
// (left - default, up, right, down)
  <Burger direction="right" />
 
 
// By default, div will be rendered as a wrapping element
// You can pass a different wrapping component
  <Burger Component="button" type="button" />
 
// results in
  <button class="burger" type="button>
  <div class="burger-lines">
  </button>
);
};