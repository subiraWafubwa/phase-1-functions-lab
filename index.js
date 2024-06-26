// Assuming that you are in block 42
let hqBlock = 42;

function distanceFromHqInBlocks(block){
    return Math.abs(hqBlock - block);
}

function distanceFromHqInFeet(block){
    return Math.abs((hqBlock - block) * 264);
}

function distanceTravelledInFeet(block1, block2){
    return Math.abs((block1 - block2) * 264);
}

function calculatesFarePrice(block1, block2){
    let thisDistance = Math.abs((block1 - block2) * 264);
    if(thisDistance < 400) {
        return 0;
    } else if(thisDistance > 400 && thisDistance < 2000){
        return ((thisDistance - 400) * 0.02);
    } else if(thisDistance > 2000 && thisDistance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}