var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="bootstrapTooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})