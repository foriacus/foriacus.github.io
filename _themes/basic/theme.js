exports.name = 'basic';

exports.version = '0.7';

exports.author = {
    'name': 'foria',
    'website': 'http://jilij.in',
};

exports.navigation = [
  {'title': 'About', 'link': '/about/'},
  {'title': 'Archive', 'link': '/archive/'},
];

exports.reveal = {
  'style': 'default'
};

exports.twitter = 'huikouren';

exports.disqus = 'juanjuan';

exports.filters = {
  reveal: function (content) {
    var arr = content.split('<hr/>');
    return arr.map(function(o, i) {
      return '<div class="slides"><section>' + o +
        '</section></div>';
    }).join('');
  },

  formatDate: function(date){
    return [
      pad(date.getFullYear()),
      '-',
      pad(date.getMonth() + 1),
      '-',
      pad(date.getDate())
    ].join('');
  },

  log: function(data) {
    console.log(data)
  }
};

function pad(str) {
  return (str + '').replace(/^([0-9])$/, '0$1');
}
