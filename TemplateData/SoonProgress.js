function UnityProgress(gameInstance, progress) {
  
  if (progress==1){
	progress=0;
	var soonText = document.getElementById("soonprogressText");
	if (soonText) soonText.style.display="inline";
  }
  var soonProgress = document.getElementById("soonprogressFull");
  if (soonProgress) soonProgress.style.width = (100 * progress) + "%"; 
}

function UnityProgressMsg(msg) {
  
  var soonText = document.getElementById("soonprogressText");
  if (soonText){
 	soonText.style.display="inline";
	soonText.innerHTML=msg;
  }
}

setTimeout(InitVKCallvack, 5000);

function InitVKCallvack()
{
 VK.addCallback('onOrderSuccess', onOrderSuccess);
 VK.addCallback('onOrderFail', onOrderFail);
 VK.addCallback('onOrderCancel', onOrderCancel);
 VK.addCallback('onToggleFlash',onToggleFlash);
 VK.addCallback('onWindowFocus',onWindowFocus);
 VK.addCallback('onWindowBlur',onWindowBlur);
}  

function onWindowBlur()
{
  document.getElementById('gameContainer').style.visibility = 'hidden';
}

function onWindowFocus()
{
  document.getElementById('gameContainer').style.visibility = 'visible';
}

function onToggleFlash(show)
{
  var  unity =document.getElementById('gameContainer');
  if (show)
    unity.style.visibility = 'visible';
  else
    unity.style.visibility = 'hidden';
}


function onOrderSuccess(order_id)
{
   document.getElementById('gameContainer').style.visibility = 'visible';
   gameInstance.SendMessage("GO", "OrderCallback", order_id);
}


function onOrderFail(error)
{
   document.getElementById('gameContainer').style.visibility = 'visible';
   gameInstance.SendMessage("GO", "OrderCallback", 0);  

}

function onOrderCancel()
{
   document.getElementById('gameContainer').style.visibility = 'visible';
   gameInstance.SendMessage("GO", "OrderCallback", 0);  
}
