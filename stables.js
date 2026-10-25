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

let horseOne = {
    name: "Cacaco",
    nickname: "Caco",
    age: 101,
    snack: "Bubble Tea",
    color: "Rainbow",
    height: 1000,
    monthlyCost: 900,
    location: true
}

horseOne.latepayment = horseOne.monthlyCost * 1.2;

let horseTwo = {
    name: "Dinwie",
    nickname: "DW",
    age: 20,
    snack: "Teriyaki",
    color: "NavyBlue",
    height: 22,
    monthlyCost: 200, 
    location: false,
}
horseTwo.latepayment = horseTwo.monthlyCost * 1.2;

let horseThree = {
     name: "KimChen",
     nickname: "KC",
     age: 48,
     snack: "Taco",
     color: "Red",
     height: 9999,
     monthlyCost:1200,
     location: true
}

horseThree.latepayment = horseThree.monthlyCost * 1.2;

let horses = [horseOne, horseTwo, horseThree];

let stableName = "Jim Stable";
let welcomeMessage = "Welcome to " + stableName + "!";
let latepaymentMessage = horseOne.name + "'s monthly payment is late. The amount is $" + horseOne.latepayment + ".";

let horseFour = {
    name: "Cerave",
    nickname: "hydratonglotion",
    age: 49,
    snack: "water",
    color: "green",
    height: 5,
    monthlyCost: 8,
    location: true
}

horseFour.latepayment = horseFour.monthlyCost * 1.2;
horses.push(horseFour);

horseOne.isHungry = true;
horseTwo.isHungry = true;
horseThree.isHungry = true;
horseFour.isHungry = false;

let totalStallsNumber = 4;

function showHowManyStabllsAvailable() {
     console.log(totalStallsNumber - horses.length);
}

showHowManyStabllsAvailable();

function showLatePayment(horse) {
     console.log(horse.monthlyCost * 1.2);
}

showLatePayment(horseOne);
     

function horseNickName(horse) {
     return horse.nickname;
}

console.log(horseNickName(horseFour));
