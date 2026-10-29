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
<<<<<<< HEAD
=======
let latePaymentMultiplier = 1.2;
>>>>>>> assignment-2

let horseOne = {
    name: "Cacaco",
    nickname: "Caco",
    age: 101,
    snack: "Bubble Tea",
    color: "Rainbow",
    height: 1000,
    monthlyCost: 900,
<<<<<<< HEAD
    location: true
}

horseOne.latepayment = horseOne.monthlyCost * 1.2;
=======
    isHorseInside: true
}

horseOne.latePayment = horseOne.monthlyCost * latePaymentMultiplier;
>>>>>>> assignment-2

let horseTwo = {
    name: "Dinwie",
    nickname: "DW",
    age: 20,
    snack: "Teriyaki",
    color: "NavyBlue",
    height: 22,
    monthlyCost: 200, 
<<<<<<< HEAD
    location: false,
}
horseTwo.latepayment = horseTwo.monthlyCost * 1.2;
=======
    isHorseInside: false,
}
horseTwo.latePayment = horseTwo.monthlyCost * latePaymentMultiplier;
>>>>>>> assignment-2

let horseThree = {
     name: "KimChen",
     nickname: "KC",
     age: 48,
     snack: "Taco",
     color: "Red",
     height: 9999,
     monthlyCost:1200,
<<<<<<< HEAD
     location: true
}

horseThree.latepayment = horseThree.monthlyCost * 1.2;
=======
     isHorseInside: true
}

horseThree.latePayment = horseThree.monthlyCost * latePaymentMultiplier;
>>>>>>> assignment-2

let horses = [horseOne, horseTwo, horseThree];

let stableName = "Jim Stable";
let welcomeMessage = "Welcome to " + stableName + "!";
<<<<<<< HEAD
let latepaymentMessage = horseOne.name + "'s monthly payment is late. The amount is $" + horseOne.latepayment + ".";
=======
let latePaymentMessage = horseOne.name + "'s monthly payment is late. The amount is $" + horseOne.latePayment + ".";
>>>>>>> assignment-2

let horseFour = {
    name: "Cerave",
    nickname: "hydratonglotion",
    age: 49,
    snack: "water",
    color: "green",
    height: 5,
    monthlyCost: 8,
<<<<<<< HEAD
    location: true
}

horseFour.latepayment = horseFour.monthlyCost * 1.2;
=======
    isHorseInside: true
}

horseFour.latePayment = horseFour.monthlyCost * latePaymentMultiplier;
>>>>>>> assignment-2
horses.push(horseFour);

horseOne.isHungry = true;
horseTwo.isHungry = true;
horseThree.isHungry = true;
horseFour.isHungry = false;

<<<<<<< HEAD
let totalStallsNumber = 4;

function showHowManyStabllsAvailable() {
     console.log(totalStallsNumber - horses.length);
}

showHowManyStabllsAvailable();

function showLatePayment(horse) {
     console.log(horse.monthlyCost * 1.2);
}

showLatePayment(horseOne);
=======
let totalStallsNumber = 17;

function availableStalls(totalStalls, occupiedStalls) {
     console.log(totalStalls - occupiedStalls);
}

availableStalls(totalStallsNumber, horses.length);

function showLatePayment(horse, multiplier) {
     console.log(horse.monthlyCost * multiplier);
}

showLatePayment(horseOne, latePaymentMultiplier);
>>>>>>> assignment-2
     

function horseNickName(horse) {
     return horse.nickname;
}

<<<<<<< HEAD
console.log(horseNickName(horseFour));
=======
console.log(horseNickName(horseFour));
>>>>>>> assignment-2
