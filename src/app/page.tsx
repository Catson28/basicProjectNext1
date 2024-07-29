import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="col-12 col-md-6 col-lg-4 px-3 text-center mb-5 mb-lg-0">
          <div className="position-relative w-75 w-md-100 mx-auto mb-2">
            <div className="social-icons"><a href="#!"> <span className="uil uil-facebook" /></a><a href="#!"> <span className="uil uil-instagram-alt" /></a><a href="#!"> <span className="uil uil-linkedin" /></a></div>
          </div>
          <h3 className="fs-9 fs-md-8 text-success fw-bold mb-1">Feliciano Candieiro</h3>
          <h5 className="text-black fs-10 fs-md-9 fw-medium text-capitalize mb-3">CEO</h5>
          <p className="fs-10 fs-md-9 fs-xxl-8 text-primary lh-xl mb-0 line-clamp-2">Produtor, Fotografo da Candstudio e Desenvolvedor Da Lumeit</p>
        </div>
    </main>
  );
}
