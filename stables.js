// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in the message.



  



console.log("--------------------------------------------------------------------");
let horseOne = {
     Name: "Jimmy",
     Age: 3,
     Snack: "iceCream",
     MonthlyFee: 200,
}; 

horseOne.latePayment = horseOne.horseOneMonthlyFee*1.2
console.log("HorseOne Name is " + horseOne.horseOneName + " , HorseOne Age is " + horseOne.horseOneAge + "!");
console.log("HorseOne likes to snack on " + horseOne.horseOneSnack);
console.log("HorseOne Monthly Payment is "+ horseOne.horseOneMonthlyFee + "  , " + "HorseOne LatePayment is " + horseOne.latePayment);
console.log("--------------------------------------------------------------------");

let horseTwo = {
     horseTwoName: "Yuyu",
     horseTwoAge: 5,
     horseTwoSnack: "coffee",
     horseTwoMonthlyFee: 400,
}; 


horseTwo.latePayment = horseTwo.horseTwoMonthlyFee*1.2
console.log("HorseTwo Name is " + horseTwo.horseTwoName + " , HorseTwo Age is " + horseTwo.horseTwoAge + "!");
console.log("HorseTwo likes to snack on " + horseTwo.horseTwoSnack);
console.log("HorseTwo Monthly Payment is "+ horseTwo.horseTwoMonthlyFee + "  , " + "HorseTwo LatePayment is " + horseTwo.latePayment);
console.log("--------------------------------------------------------------------");

let horseThree = {
     horseThreeName: "Jing",
     horseThreeAge: 29,
     horseThreeSnack: "chocolate",
     horseThreeMonthlyFee: 10,
}; 

horseThree.latePayment = horseThree.horseThreeMonthlyFee*1.2
console.log("HorseThree Name is " + horseThree.horseThreeName + " , HorseThree Age is " + horseThree.horseThreeAge + "!");
console.log("HorseThree likes to snack on " + horseThree.horseThreeSnack);
console.log("HorseThree Monthly Payment is "+ horseThree.horseThreeMonthlyFee + "  , " + "HorseThree LatePayment is " + horseThree.latePayment);
console.log("--------------------------------------------------------------------");
    


let stableName = "BCIT D3 Horse Stable!";
let visitorMessage ="Welcome to " + stableName + "!";
let latePaymentMessage = "The monthly payment for " + horseOne.horseOneName +  " is late. The amount owing is " + horseOne.latePayment; 
  console.log("My stable name is " + stableName);
  console.log(visitorMessage);
  console.log(latePaymentMessage);
  