window.addEventListener('DOMContentLoaded', () => {

  window.onload = function (){
    console.log('It is working!')

    document.getElementById('buttonMouseover').addEventListener('click', button)
    document.getElementById('divClick').addEventListener('click', div)
    document.getElementById('pClick').addEventListener('click', p)

    document.getElementById('buttonMouseover').addEventListener('mouseover', button)
    document.getElementById('divMouseover').addEventListener('mouseover', div)
    document.getElementById('pMouseover').addEventListener('mouseover', p)

    document.getElementById('button-card1Reset').addEventListener('click', card1Reset)
  }

  const button = function(e) {
    card1Reset()
    e.preventDefault()
    e.stopPropagation()
    $('#eventTarget').text(e.target)
    $('#eventTimeStamp').text(e.timeStamp)
    $('#eventType').text(e.type)
    $('#eventIsTrusted').text(e.isTrusted)
    $('#eventDefaultPrevented').text(e.defaultPrevented)
    $('#eventEventPhase').text(e.eventPhase)
  }

  const div = function(e) {
    card1Reset()
    $('#eventTarget').text(e.target)
    $('#eventTimeStamp').text(e.timeStamp)
    $('#eventType').text(e.type)
    $('#eventIsTrusted').text(e.isTrusted)
    $('#eventDefaultPrevented').text(e.defaultPrevented)
    $('#eventEventPhase').text(e.eventPhase)
  }

  const p = function(e) {
    card1Reset()
    $('#eventTarget').text(e.target)
    $('#eventTimeStamp').text(e.timeStamp)
    $('#eventType').text(e.type)
    $('#eventIsTrusted').text(e.isTrusted)
    $('#eventDefaultPrevented').text(e.defaultPrevented)
    $('#eventEventPhase').text(e.eventPhase)
  }

  const card1Reset = function() {
    $('#eventTarget').text('')
    $('#eventTimeStamp').text('')
    $('#eventType').text('')
    $('#eventIsTrusted').text('')
    $('#eventDefaultPrevented').text('')
    $('#eventEventPhase').text('')
  }



})
