// Run javascript after DOM is initialized
$(document).ready(function() {

  $('#map_canvas').mapit({
    latitude:    47.852727,
    longitude:   106.779171,
    zoom:        15,
    type:        'satellite',
    scrollwheel: false,
    disableDefaultUI: true,
    marker: {
      latitude:   47.852727,
      longitude:  106.779171,
      icon:       'images/marker_blue.png',
      title:      'MCAA',
      open:       false,
      center:     true
    },
    address: '<h2>MCAA</h2>',
    styles: 'GRAYSCALE',
    locations: [
      [37.999252, 23.733353, 'images/marker_blue.png', 'Cinema Aello 5+1', 'Panagi Tsaldari 140, Athina, Greece', false, '1'],
      [37.996547, 23.732001, 'images/marker_blue.png', 'Cinema Ilion', 'Τροίας 34, Αθήνα, Greece', false, '1'],
      [37.959408, 23.713982, 'images/marker_blue.png', 'Cinema Calipso', 'Megalou Alexandrou ke Kalipsous, Kallithea, Greece', false, '1'],
      [37.977563, 23.714041, 'images/marker_green.png', 'Technopolis', 'Πειραιώς 100, Αθήνα, Greece', false, '2'],
      [37.971436, 23.736695, 'images/marker_green.png', 'Zappeion', 'Greece', false, '2'],
      [37.975030, 23.747751, 'images/marker_green.png', 'Εθνική Πινακοθήκη Μουσείο Αλεξάνδρου Σούτζου', 'Μιχαλακοπούλου 1, Αθήνα, Greece', false, '2'],
      [37.976104, 23.7141811, 'images/marker_green.png', 'Benaki Museum', 'Koumpari 1, Athens, Greece', false, '2']
    ],
    origins: [
      ['37.936294', '23.947394'],
      ['37.975669', '23.733868']
    ]
  });
});
