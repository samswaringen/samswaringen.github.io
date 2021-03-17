var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTrigger) {
  return new bootstrap.Popover(popoverTrigger)
})
var popover = new bootstrap.Popover(popoverList);

