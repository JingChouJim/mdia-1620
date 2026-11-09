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


let horses = [horseOne, horseTwo, horseThree];

let stableName = "Jim Stable";
let welcomeMessage = "Welcome to " + stableName + "!";


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


// Calculate late payments for all horses
for (const horse of horses) {
    horse.latePayment = horse.monthlyCost * latePaymentMultiplier;
}


// Store late payment message after calculation 
let latePaymentMessage = horseOne.name + "'s monthly payment is late. The amount is $" + horseOne.latePayment + ".";

// Display the late payment calculated by the loop
function showLatePayment(horse) {
     console.log(horse.latePayment);
}

showLatePayment(horseOne);


     

function horseNickName(horse) {
     return horse.nickname;
}

console.log(horseNickName(horseFour));

// Day to day operations (Project)

let targetTreat = "Taco";

for (const horse of horses) {
     if (horse.snack === targetTreat) {
          console.log(`${horse.name} likes ${targetTreat}`);
          break;
     } else {
          console.log(`${horse.name} doesn't like ${targetTreat}.`);
     }
     
}

let uniqueColor = "Rainbow";

function checkHorseColor(horse) {
     if (horse.color === uniqueColor) {
          console.log(`${horse.name} has a unique color.`);
     } else {
         console.log(`${horse.name} is ${horse.color}`);
     } 
}
 for (const horse of horses) {
          checkHorseColor(horse)
     }


function moveHorsesOutside(horsesToMove) {
     for (const horse of horsesToMove) {
     if (horse.isHorseInside === true) {
          horse.isHorseInside = false;
          console.log(`${horse.name} has moved out to enjoy the sun.`);
          }
       }
     }

     moveHorsesOutside([horses[0],horses[2]]);