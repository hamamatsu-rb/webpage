// doorkeeper API Ajax用オブジェクト
doorkeeperApi = {
  type: "GET",
  url: 'http://api.doorkeeper.jp/groups/jawsug-hamamatsu/events',
  dataType: "jsonp",
  cache: false,
  timeout: 5000,
  crossDomain: true
}

// アクセス失敗時にその旨を表示する
function failDoorkeeper() {
  $('#doorkeeper-list')
    .html(
      $('<div class="alert alert-warning">Doorkeeper API の接続に失敗しました。</div>')
      .fadeIn('slow')
    );
}

// アクセス成功時にリストを作成する
function doneDoorkeeper(data) {
  var arr, items = [], list, table;

  $.each(data, function(){
    items.push(parseLine(this.event));
  });

  list = '<tr>' + items.join('</tr><tr>') + '</tr>';
  table = '<table class="table table-striped table-hover">' +
          list +
          '</table>';

  $('#doorkeeper-list').html($(table).fadeIn('fast'));
}
