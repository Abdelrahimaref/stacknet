var sel    =  document.getElementById('sel'),
    hide   = document.getElementById('hide');
sel.onchange = function(){
  if(this.value==='Directly_customer_support')
  {
    hide.style.display='block';
  }
  else
  {
    hide.style.display='none';
  }
}


function refuse(){
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 1500
    })
      
      Toast.fire({
        type: 'success',
        title: 'Refused successfully'
        })
}
function accept(){
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 1500
    })
      
      Toast.fire({
        type: 'success',
        title: 'Accepted successfully'
        })
}
    document.querySelector("#sendButton").addEventListener("click", function() {
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 1500
      })
      
      Toast.fire({
        type: 'success',
        title: 'Request Send successfully'
      })
    });


