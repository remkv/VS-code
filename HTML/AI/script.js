function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.422, lng: -122.084 }, // Initial center (e.g., Mountain View)
      zoom: 8 
    });
  
    const fileInput = document.getElementById("file-input");
  
    fileInput.addEventListener("change", (event) => {
      const files = event.target.files;
  
      for (let i = 0; i < files.length; i++) {
        handleFile(files[i], map);
      }
    });
  }
  
  function handleFile(file, map) {
    const filename = file.name;
    const extension = filename.split(".").pop().toLowerCase();
  
    if (extension === "kml" || extension === "kmz") {
      loadKmlLayer(file, map);
    } else if (extension === "zip") {
      loadShapefile(file, map);
    } else {
      alert("Invalid file type. Please select KML, KMZ, or a Shapefile (zipped)");
    }
  }
  
  function loadKmlLayer(file, map) {
    const kmlLayer = new google.maps.KmlLayer({
      url: URL.createObjectURL(file),
      map: map,
      preserveViewport: true // Adjust viewport to fit KML data
    });
  
    // You can add error handling for the KML layer here
  }
  
  function loadShapefile(zipFile, map) {
    // Use a library like Shapefile or shpjs to process the Shapefile:
    shp(zipFile).then(geojson => {
      // Add GeoJSON data to map (create markers, polygons, etc.)
      // Example using markers for point data:
      geojson.features.forEach(feature => {
        if (feature.geometry.type === 'Point') {
          new google.maps.Marker({
            position: feature.geometry.coordinates, 
            map: map
          });
        }
      });
  
      // Zoom map to fit the Shapefile data
      map.fitBounds(getBounds(geojson)); 
    });
  }
  
  // Helper to get bounding box from GeoJSON (replace if using a library)
  function getBounds(geojson) {
    // ... Implementation to calculate bounds
  }