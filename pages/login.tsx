import Head from "next/head";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <main>
        <div className="container d-flex justify-content-center">
          <div className="card mt-5 w-50">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nickName">Usuário</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nickName"
                    placeholder="Usuário"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Senha"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
