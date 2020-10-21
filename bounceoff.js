function bounceoff(){
    if (packageBody.x -ground .x < ground.width/2 + packageBody.width/2
        && ground.x - packageBody.x < ground.width/2 + packageBody.width/2) {
      packageBody.velocityX = packageBody.velocityX * (-1);
      ground.velocityX = ground.velocityX * (-1);
    }
    if (packageBody.y - ground.y < ground.height/2 + packageBody.height/2
      && ground.y - packageBody.y < ground.height/2 + packageBody.height/2){
      packageBody.velocityY = packageBody.velocityY * (-1);
      ground.velocityY = ground.velocityY * (-1);
    }
    }