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
let latePaymentMultiplier = 1.2;

let horseOne = {
    name: "Cacaco",
    nickname: "Caco",
    age: 101,
    snack: "Bubble Tea",
    color: "Rainbow",
    height: 1000,
    monthlyCost: 900,
    isHorseInside: true
}

horseOne.latePayment = horseOne.monthlyCost * latePaymentMultiplier;

let horseTwo = {
    name: "Dinwie",
    nickname: "DW",
    age: 20,
    snack: "Teriyaki",
    color: "NavyBlue",
    height: 22,
    monthlyCost: 200, 
    isHorseInside: false,
}
horseTwo.latePayment = horseTwo.monthlyCost * latePaymentMultiplier;

let horseThree = {
     name: "KimChen",
     nickname: "KC",
     age: 48,
     snack: "Taco",
     color: "Red",
     height: 9999,
     monthlyCost:1200,
     isHorseInside: true
}

horseThree.latePayment = horseThree.monthlyCost * latePaymentMultiplier;

let horses = [horseOne, horseTwo, horseThree];

let stableName = "Jim Stable";
let welcomeMessage = "Welcome to " + stableName + "!";
let latePaymentMessage = horseOne.name + "'s monthly payment is late. The amount is $" + horseOne.latePayment + ".";

let horseFour = {
    name: "Cerave",
    nickname: "hydratonglotion",
    age: 49,
    snack: "water",
    color: "green",
    height: 5,
    monthlyCost: 8,
    isHorseInside: true
}

horseFour.latePayment = horseFour.monthlyCost * latePaymentMultiplier;
horses.push(horseFour);

horseOne.isHungry = true;
horseTwo.isHungry = true;
horseThree.isHungry = true;
horseFour.isHungry = false;

let totalStallsNumber = 17;

function availableStalls(totalStalls, occupiedStalls) {
     console.log(totalStalls - occupiedStalls);
}

availableStalls(totalStallsNumber, horses.length);

function showLatePayment(horse, multiplier) {
     console.log(horse.monthlyCost * multiplier);
}

showLatePayment(horseOne, latePaymentMultiplier);
     

function horseNickName(horse) {
     return horse.nickname;
}

console.log(horseNickName(horseFour));