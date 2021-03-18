var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTrigger) {
  return new bootstrap.Popover(popoverTrigger)
})

var focusEl = document.getElementById('likes-input');
console.log(focusEl);
if (focusEl === document.activeElement){
    focusEl.value = '';
}
