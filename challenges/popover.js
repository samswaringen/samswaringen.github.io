var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTrigger) {
  return new bootstrap.Popover(popoverTrigger)
})


focusOut = ()=>{
    activeEl = document.activeElement;
    console.log(activeEl);
    if (activeEl.value === ''){
    }
}
