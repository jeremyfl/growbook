$(document).ready(() => {
  const orderBuku = () => {
    $("#button-buku").click(function(e) {
      e.preventDefault();
      const stock = $(this).val();
      $("#id_buku_input").val(stock);
    });
  };

  orderBuku();
});
