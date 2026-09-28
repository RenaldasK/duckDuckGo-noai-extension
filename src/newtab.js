(function () {
  var STORAGE_KEY = 'duckduckgo-noai-bg-image';
  var bgPicker = document.getElementById('bg-picker');
  var customiseBtn = document.getElementById('customise-btn');

  function clearBackground() {
    document.body.style.removeProperty('background-image');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function applyBackground(dataUrl) {
    if (!dataUrl || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) {
      clearBackground();
      return;
    }
    document.body.style.backgroundImage = 'url("' + dataUrl.replace(/"/g, '\\"') + '")';
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
    } catch (e) {}
  }

  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      applyBackground(saved);
    }
  } catch (e) {}

  customiseBtn.addEventListener('click', function () {
    bgPicker.click();
  });

  bgPicker.addEventListener('change', function () {
    var file = bgPicker.files && bgPicker.files[0];
    if (!file) {
      return;
    }
    if (!file.type || file.type.indexOf('image/') !== 0) {
      clearBackground();
      bgPicker.value = '';
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      applyBackground(reader.result);
    };
    reader.onerror = function () {
      clearBackground();
    };
    reader.readAsDataURL(file);
  });
})();
