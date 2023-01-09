import "../styles/globals.css";
import Script from "next/script";
import $ from "jquery";
import { useEffect } from "react";
import "/node_modules/jquery/dist/jquery.min.js";
import ReactModal from "react-modal";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    $(window).on("load", function () {
      setTimeout(function () {
        $("#myModal").modal("show");
      }, 2000);
    });
    $(".close").on("click", function () {
      $("#myModal").modal("hide");
    });
  }, []);
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MF6PFZKBS4"
        data-nscript="lazyOnload"
      ></Script>
      <Script id="gtag-script" data-nscript="lazyOnload">
        {` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MF6PFZKBS4', {
        page_path: window.location.pathname,
      });`}
      </Script>
      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></Script>
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></Script> */}
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></Script> */}
      {/* <Script>
        {`$(window).load(function(){
         setTimeout(function(){
         $('#myModal').modal('show');
          }, 2000);
         });`}
      </Script>
      <Script type="text/javascript">
        {`$('.close').click(function() {
        $('#myModal').modal('hide');
        });`}
      </Script> */}
      <Component {...pageProps} />
    </>
  );
}
