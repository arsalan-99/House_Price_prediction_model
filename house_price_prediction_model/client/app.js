function getBHKValue() {
  const bhkRadios = document.getElementsByName("uiBHK");
  for (let i = 0; i < bhkRadios.length; i++) {
    if (bhkRadios[i].checked) {
      return parseInt(bhkRadios[i].value);
    }
  }
  return -1;
}

function getBathValue() {
  const bathRadios = document.getElementsByName("uiBathrooms");
  for (let i = 0; i < bathRadios.length; i++) {
    if (bathRadios[i].checked) {
      return parseInt(bathRadios[i].value);
    }
  }
  return -1;
}

function onClickedEstimatePrice() {
  console.log("Estimate price clicked");
  const sqft = document.getElementById("uiSqft").value;
  const bhk = getBHKValue();
  const bathrooms = getBathValue();
  const location = document.getElementById("uiLocations").value;
  const estPrice = document.getElementById("uiEstimatedPrice");

  const url = "http://127.0.0.1:5000/predict_home_price";

  $.post(url, {
    total_sqft: parseFloat(sqft),
    bhk: bhk,
    bath: bathrooms,
    location: location
  }, function (data, status) {
    estPrice.innerHTML = "<h2>Estimated Price: ₹ " + data.estimated_price + " Lakh</h2>";
    console.log(status);
  });
}

function onPageLoad() {
  console.log("Document loaded");
  const url = "http://127.0.0.1:5000/get_location_names";
  $.get(url, function (data, status) {
    if (data) {
      const locations = data.locations;
      const uiLocations = document.getElementById("uiLocations");
      $('#uiLocations').empty();
      for (let i = 0; i < locations.length; i++) {
        let opt = new Option(locations[i]);
        $('#uiLocations').append(opt);
      }
    }
  });
}

window.onload = onPageLoad;
