const Form = () => {
  return (
    <div class="display-flex justify-end">
      <div class="bg-white form-box border-radius">
        <label>Nome</label>
        <input type="text" class="form-control" placeholder="Nome" />
        <label>Email</label>
        <input type="text" class="form-control" placeholder="Email" />
        <label>Telefone</label>
        <input type="text" class="form-control" placeholder="Telefone" />
        <a class="btn btn-lg btn-block bg-green color-white" href="#">
          Comece agora mesmo.
        </a>
        <small>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </small>
      </div>
      <a class="btn btn-lg btn-block bg-green color-white btn-mobile" href="#">
        Comece agora mesmo.
      </a>
    </div>
  );
};

export default Form;
