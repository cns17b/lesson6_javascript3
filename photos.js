/*    
    Program Name:  Photo Gallery Application
    Author: Cole Sheridan   
    Date:   Tuesday, March 20, 2018
    Filename: photos.js
    
 */


"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;

/*****************************************populateFigures() FUNCTION*************************************/
/* This method adds src values to img elements based on order specified in photoOrder array             */
/********************************************************************************************************/
function populateFigures() {

var filename;
var currentFig;


if (figureCount === 3){
    for (var i = 1; i < 4; i++){
        
        filename = "images/IMG_0"+ photoOrder[i] + "sm.jpg";
        currentFig = document.getElementsByTagName("img")[i - 1];
        currentFig.src = filename;
    }//end of for loop
}
else{
    for (var i = 0; i < 5; i++){
        filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
        currentFig = document.getElementsByTagName("img")[i - 1];
        currentFig.src = filename
    }//end of for loop
}//end of else

}//end of populateFigures function

/**********************************END OF populateFigures() FUNCTION*************************************/



/*********************************rightArrow() FUNCTION***************************************************/
/* This method shifts all images one figure to the right, and change values in photoOrder array to match */
/********************************************************************************************************/
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }//end of else
      
      populateFigures();
      
   }//end of for loop
}//end of rightArrow Function

/***********************************END OF RIGHT ARROW FUNCTION******************************************/

/********************************leftArrow() Function****************************************************/
/*This method shifts all images one figure to the left, and change values in photoOrder array to match  */
/********************************************************************************************************/
function leftArrow() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] - 1) === 0) {
            photoOrder[i] = 5;
        } else {
            photoOrder[i] -= 1;
        }//end of else
        
      populateFigures();
      
    }//end of for loop
}//end of leftArrow Function

/****************************END OF LEFT ARROW FUNCTION*************************************************/


/***************************************previewFive() Function******************************************/
/*           This method is executed to allow the photo gallery to shift to five image layout.         */
/******************************************************************************************************/
function previewFive() {
    
    //locate first element where the tag is article and assign it to a variable
    var articleEl = document.getElementsByTagName("article")[0];
   
   //create figure and image elements for the fifth image
   var lastFigure = document.createElement("figure");
   
   lastFigure.id = "fig5";
   lastFigure.style.zindex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";
   
   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";
   
   //add or attach the fifth image to the preview
   lastFigure.appendChild(lastImage);
   
   articleEl.appendChild(lastFigure);
   
   //clone figure element for fifth image and edit it to be the first image
   var firstFigure = lastFigure.cloneNode(true);
   
   firstFigure.id = "fig1";
   firstFigure.style.right = " ";
   firstFigure.style.left = "45px";
   
   articleEl.insertBefore(firstFigure, document.getElementById("fig2"));
   
   //add appropriate src values to the new img elements
   document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
   document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";
    
    
    figureCount = 5;
    
    //disable the 'Show more images' button after it has been selected once
    var numberButton = document.querySelector("#fiveButton p");
    numberButton.removeEventListener("click", previewFive, false);
    
}//end of previewFive()

/****************************************END of previewFive() Function**********************************/



/***********************************createEventListeners() Function*************************************/
/*         This method attaches event listeners to the buttons (left, right, and show all).            */
/*******************************************************************************************************/
function createEventListeners() {
   
    //Declare variable for document elemt with the id of leftarrow, located in the html document.
    var leftarrow = document.getElementById("leftarrow");
    
    //add an event handler to the specified element (leftarrow)
    //the leftArrow() function will be executed when the left arrow navigation button is clicked.
    leftarrow.addEventListener("click", leftArrow, false);
    
    
    //Declare variable for document elemt with the id of rightarrow, located in the html document.
    var rightarrow = document.getElementById("rightarrow");
    
    //add an event handler to the specified element (rightarrow)
    //the rightArrow() function will be executed when the right arrow navigation button is clicked.
    rightarrow.addEventListener("click", rightArrow, false);
    
    
    //Declare a variable for the element fiveButton
    var showAllButton = document.querySelector("#fiveButton p");
    
    //add an event listener to showAllButton element
    //when the user clicks the Show More button, the previewFive function is executed
    showAllButton.addEventListener("click", previewFive, false);
       
}//end of createEventListeners function

/************************************END OF createEventListeners() FUNCTION****************************/


/************************************setUpPage() FUNCTION**********************************************/
/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}//end of setUpPage Function

/***********************************END OF setUpPage() FUNCTION***************************************/



/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
      window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
      window.attachEvent("onload", setUpPage);
}//end of else if