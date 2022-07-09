#!/bin/bash

function checkEmail(){
    CURRDIR=$(pwd)
    echo $CURRDIR
    EMAIL=$(git config user.email)
    if [[ $EMAIL != *"@JohnDeere.com" ]]
    then
      if [[ $EMAIL == "vanshkapoorvk7@gmail.com" && "$CURRDIR" == *"/Users/vanshkapoor/pwork/"*  ]]
      then
        echo "Valid Personal git user email id.";
      else
        echo "InValid git user email id.";
        exit 1;
      fi;
    else
      echo "";
    fi
}
checkEmail