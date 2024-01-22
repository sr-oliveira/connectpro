function previewFoto(input) {
  var preview = document.getElementById('preview-imagem');
  var escolherFotoLabel = document.getElementById('input-foto-label');

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block'; // Mostra a visualização da imagem
      escolherFotoLabel.style.display = 'none'; // Esconde o rótulo do botão de escolher foto
    };

    reader.readAsDataURL(input.files[0]);
  }
}
