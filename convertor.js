function copyToClipboard(element) {
    $(element).select();
    document.execCommand("copy");
  }

$(document).ready(function() {
    $("#convert").click(function() {
      var ssh_cmd = $("#ssh-cmd").val();
      // example: 
      // ssh ip172-18-0-28-bvffvr7p2ffg00cj4gf0@direct.labs.play-with-docker.com
      var cmd = ssh_cmd.split(' ')[1];
      var token = cmd.split('@')[0];
    
      var port = $("#port").val();
      var url = `http://${token}-${port}.direct.labs.play-with-docker.com`
      $("#result-url").val(url);
    });

    $("#copy").click(function() {
        copyToClipboard("#result-url");
    })

    $("#redirect").click(function() {
        $(window).attr("location", $("#result-url").val());
    })

  })