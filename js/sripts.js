<script>
   $(document).ready(function () {
      $("#mycarousel").carousel({ interval: 2000, pause: false });
      $("#carousel-button").click(function () {
         if ($("#carousel-button").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $("#carousel-button").children("span").removeClass("fa-pause").addClass("fa-play");
         } else {
            $("#mycarousel").carousel("cycle");
            $("#carousel-button").children("span").removeClass("fa-play").addClass("fa-pause");
         }
      });

      // Reserve table modal
      $("#btn-reserve").click(function () {
         $('#reserve-modal').modal('show');
      });
      $('#cancel-reserve').click(function () {
         $('#reserve-modal').modal('hide');
      });

      // Login modal
      $('#btn-login').click(function () {
         $('#login-modal').modal('show');
      });
      $('#cancel-login').click(function () {
         $('#login-modal').modal('hide');
      });
   });
</script>
