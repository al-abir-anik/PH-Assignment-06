

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('likeCard-container').classList.add('hidden');
  }

  
  function hideLoading() {
    setTimeout(() => {
         document.getElementById('loading').classList.add('hidden');
         document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('likeCard-container').classList.remove('hidden');
        },2000);
  }
  
  
  
  
  